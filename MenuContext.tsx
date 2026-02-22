import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuCategory } from './types';
import { MENU_DATA } from './constants';
import { fetchMenuFromSheets } from './GoogleSheetsService';

// ========================================
// CONFIGURACIÓN DE GOOGLE SHEETS
// ========================================
// pubKey: clave pública del sheet publicado (de la URL después de /d/e/)
// GIDs: identificadores de cada hoja dentro del spreadsheet

const PUB_KEY = '2PACX-1vRoU778-d-jv2b8SBNW3YJAoIvTFlbuJJ98UGag42FAeGoUsyNR100X8Rzsh_bxGzX6c5Q9VgRHvRNR';
const CATEGORIAS_GID = '0';
const PLATOS_GID = '595372223';

// ========================================

interface MenuContextType {
    menu: MenuCategory[];
    loading: boolean;
    error: string | null;
    negocio: typeof MENU_DATA.negocio;
}

const MenuContext = createContext<MenuContextType>({
    menu: MENU_DATA.menu,
    loading: false,
    error: null,
    negocio: MENU_DATA.negocio,
});

export const useMenu = () => useContext(MenuContext);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [menu, setMenu] = useState<MenuCategory[]>(MENU_DATA.menu);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Only fetch if Sheet ID is configured
        if (!PUB_KEY || !PLATOS_GID) {
            console.log('Google Sheets no configurado. Usando datos locales (constants.ts).');
            return;
        }

        const loadMenu = async () => {
            setLoading(true);
            setError(null);
            try {
                const sheetsMenu = await fetchMenuFromSheets(PUB_KEY, CATEGORIAS_GID, PLATOS_GID);
                if (sheetsMenu.length > 0) {
                    setMenu(sheetsMenu);
                }
            } catch (err) {
                console.error('Error cargando menú desde Google Sheets:', err);
                setError('No se pudo cargar el menú. Mostrando datos locales.');
                // Keep fallback data from constants.ts
            } finally {
                setLoading(false);
            }
        };

        loadMenu();
    }, []);

    return (
        <MenuContext.Provider value={{ menu, loading, error, negocio: MENU_DATA.negocio }}>
            {children}
        </MenuContext.Provider>
    );
};
