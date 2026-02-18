export interface MenuItem {
  nombre: string;
  precio: number | string;
  descripcion?: string;
}

export interface MenuCategory {
  categoria: string;
  descripcion?: string;
  precio_general?: number;
  items: MenuItem[];
}

export interface BusinessInfo {
  nombre: string;
  logo_text: string;
  identidad: string;
}

export interface MenuData {
  negocio: BusinessInfo;
  menu: MenuCategory[];
}