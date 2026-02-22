import { MenuCategory, MenuItem } from './types';

// Google Sheets public CSV URL builder
// The sheet must be published to the web: File > Share > Publish to web
// pubKey is the long key from the published URL (the part after /d/e/)
function buildCsvUrl(pubKey: string, gid: string): string {
    const cacheBuster = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
    return `https://docs.google.com/spreadsheets/d/e/${pubKey}/pub?gid=${gid}&single=true&output=csv&_cb=${cacheBuster}`;
}

// Parse CSV text into rows of strings
function parseCsv(csvText: string): string[][] {
    const rows: string[][] = [];
    let current = '';
    let inQuotes = false;
    let row: string[] = [];

    for (let i = 0; i < csvText.length; i++) {
        const char = csvText[i];
        const next = csvText[i + 1];

        if (inQuotes) {
            if (char === '"' && next === '"') {
                current += '"';
                i++; // skip next quote
            } else if (char === '"') {
                inQuotes = false;
            } else {
                current += char;
            }
        } else {
            if (char === '"') {
                inQuotes = true;
            } else if (char === ',') {
                row.push(current.trim());
                current = '';
            } else if (char === '\n' || (char === '\r' && next === '\n')) {
                row.push(current.trim());
                rows.push(row);
                row = [];
                current = '';
                if (char === '\r') i++; // skip \n
            } else {
                current += char;
            }
        }
    }

    // Push last field and row
    if (current || row.length > 0) {
        row.push(current.trim());
        rows.push(row);
    }

    return rows;
}

interface RawCategory {
    nombre: string;
    orden: number;
    imagen_url: string;
}

interface RawPlato {
    categoria: string;
    nombre: string;
    descripcion: string;
    precio: number | string;
}

// Fetch and parse categories sheet
async function fetchCategorias(pubKey: string, gid: string): Promise<RawCategory[]> {
    const url = buildCsvUrl(pubKey, gid);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error fetching categorias: ${response.status}`);

    const text = await response.text();
    const rows = parseCsv(text);

    // First row is headers: nombre, orden, imagen_url
    const categories: RawCategory[] = [];
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const nombre = (row[0] || '').trim();
        const orden = parseInt(row[1]);
        // Skip empty rows, rows with very short names, or invalid order
        if (nombre.length >= 2 && !isNaN(orden)) {
            categories.push({
                nombre,
                orden,
                imagen_url: (row[2] || '').trim(),
            });
        }
    }

    return categories.sort((a, b) => a.orden - b.orden);
}

// Fetch and parse platos sheet
async function fetchPlatos(pubKey: string, gid: string): Promise<RawPlato[]> {
    const url = buildCsvUrl(pubKey, gid);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error fetching platos: ${response.status}`);

    const text = await response.text();
    const rows = parseCsv(text);

    // First row is headers: categoria, nombre, descripcion, precio
    const platos: RawPlato[] = [];
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.length >= 4 && row[0] && row[1]) {
            const precioStr = row[3].replace('S/', '').replace(',', '.').trim();
            const precio = parseFloat(precioStr);
            platos.push({
                categoria: row[0],
                nombre: row[1],
                descripcion: row[2] || '',
                precio: isNaN(precio) ? '00.00' : precio,
            });
        }
    }

    return platos;
}

// Main function: fetch both sheets and merge into MenuCategory[]
export async function fetchMenuFromSheets(
    pubKey: string,
    categoriasGid: string,
    platosGid: string
): Promise<MenuCategory[]> {
    const [categorias, platos] = await Promise.all([
        fetchCategorias(pubKey, categoriasGid),
        fetchPlatos(pubKey, platosGid),
    ]);

    // Group platos by category name
    const platosByCategory = new Map<string, MenuItem[]>();
    for (const plato of platos) {
        const key = plato.categoria.trim().toLowerCase();
        if (!platosByCategory.has(key)) {
            platosByCategory.set(key, []);
        }
        platosByCategory.get(key)!.push({
            nombre: plato.nombre,
            descripcion: plato.descripcion,
            precio: plato.precio,
        });
    }

    // Build MenuCategory[] in the order from categorias sheet
    const menu: MenuCategory[] = categorias.map(cat => {
        const key = cat.nombre.trim().toLowerCase();
        return {
            categoria: cat.nombre,
            imagen: cat.imagen_url || undefined,
            items: platosByCategory.get(key) || [],
        };
    });

    return menu;
}
