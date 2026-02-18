import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { MENU_DATA } from '../constants';
import { MenuItem as MenuItemType } from '../types';
import { MenuItem } from './MenuItem';

export const SearchFAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const allItems: MenuItemType[] = MENU_DATA.menu.flatMap(cat => cat.items);
  
  const filteredItems = query.length > 1 
    ? allItems.filter(item => item.nombre.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-chifa-red text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-red-700 transition-colors focus:outline-none focus:ring-4 focus:ring-red-300"
        aria-label="Buscar platos"
      >
        <Search size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md max-h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
            
            <div className="p-4 border-b border-gray-200 flex items-center gap-3">
              <Search className="text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar plato (ej. chaufa, sopa)..."
                className="flex-1 font-body text-lg outline-none text-chifa-black"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={() => { setIsOpen(false); setQuery(''); }}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 flex-1 bg-chifa-bg">
              {query.length <= 1 && (
                <div className="text-center text-gray-400 py-10 font-body">
                  Escribe para buscar en nuestra carta...
                </div>
              )}

              {query.length > 1 && filteredItems.length === 0 && (
                <div className="text-center text-gray-500 py-10 font-body">
                  No encontramos platos con "{query}"
                </div>
              )}

              {filteredItems.map((item, idx) => (
                <MenuItem key={idx} item={item} />
              ))}
            </div>
            
            <div className="bg-gray-50 p-3 text-center text-xs text-gray-400 font-body border-t border-gray-200">
              {filteredItems.length} resultados encontrados
            </div>
          </div>
        </div>
      )}
    </>
  );
};