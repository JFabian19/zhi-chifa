import React, { useState } from 'react';
import { MenuItem as MenuItemType } from '../types';
import { Plus, Check } from 'lucide-react';
import { useCart } from './CartContext';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const formatPrice = (price: string | number) => {
    if (price === "00.00" || price === 0) return "Consultar";
    if (typeof price === 'number') return `S/ ${price.toFixed(2)}`;
    return `S/ ${price}`;
  };

  const isConsultar = item.precio === "00.00" || item.precio === 0;
  const canOrder = !isConsultar;

  const handleAdd = () => {
    addItem(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="flex justify-between items-start gap-3 py-3 border-b border-gray-800 last:border-0 hover:bg-white/5 transition-colors rounded-lg px-2">
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-body font-bold text-base leading-tight">
          {item.nombre}
        </h3>
        {item.descripcion && (
          <p className="text-gray-500 text-xs mt-1 font-body">{item.descripcion}</p>
        )}
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        {/* Price tag */}
        <div className={`
          relative bg-chifa-card-light border border-chifa-gold/40 
          px-3 py-1 shadow-sm transform -rotate-2 
          flex items-center justify-center
          ${isConsultar ? 'rounded-lg' : 'rounded-[50%] min-w-[70px]'}
        `}>
          <span className="font-hand font-bold text-chifa-gold text-lg whitespace-nowrap">
            {formatPrice(item.precio)}
          </span>
        </div>

        {/* Add to cart button */}
        {canOrder && (
          <button
            onClick={handleAdd}
            className={`
              w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0
              ${justAdded
                ? 'bg-green-500 text-white scale-110'
                : 'bg-chifa-red hover:bg-red-700 text-white hover:scale-110'}
            `}
            aria-label={`Agregar ${item.nombre} al pedido`}
          >
            {justAdded ? <Check size={18} /> : <Plus size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};