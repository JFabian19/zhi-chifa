import React from 'react';
import { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const formatPrice = (price: string | number) => {
    if (price === "00.00" || price === 0) return "Consultar";
    if (typeof price === 'number') return `S/ ${price.toFixed(2)}`;
    return `S/ ${price}`;
  };

  const isConsultar = item.precio === "00.00" || item.precio === 0;

  return (
    <div className="flex justify-between items-start gap-3 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors rounded-lg px-2">
      <div className="flex-1">
        <h3 className="text-chifa-black font-body font-bold text-base leading-tight">
          {item.nombre}
        </h3>
        {item.descripcion && (
          <p className="text-gray-500 text-xs mt-1 font-body">{item.descripcion}</p>
        )}
      </div>
      
      <div className="flex-shrink-0 pt-1">
        <div className={`
          relative bg-white border border-chifa-black 
          px-3 py-1 shadow-sm transform -rotate-2 
          flex items-center justify-center
          ${isConsultar ? 'rounded-lg' : 'rounded-[50%] min-w-[70px]'}
        `}>
          <span className="font-hand font-bold text-chifa-black text-lg whitespace-nowrap">
            {formatPrice(item.precio)}
          </span>
        </div>
      </div>
    </div>
  );
};