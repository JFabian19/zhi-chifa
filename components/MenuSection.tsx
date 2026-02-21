import React from 'react';
import { MenuCategory } from '../types';
import { MenuItem } from './MenuItem';

interface MenuSectionProps {
  category: MenuCategory;
  id: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ category, id }) => {
  // Split title into Main and Translation (inside parens)
  const parts = category.categoria.split('(');
  const titleMain = parts[0].trim();
  const titleSub = parts.length > 1 ? parts[1].replace(')', '').trim() : '';

  return (
    <section id={id} className="pt-8 pb-4 scroll-mt-20">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-oriental text-chifa-gold text-center">
          {titleMain}
        </h2>
        {titleSub && (
          <span className="text-chifa-red font-body uppercase text-xs tracking-widest mt-1">
            {titleSub}
          </span>
        )}
        <div className="w-16 h-1 bg-chifa-red mt-2 rounded-full opacity-80"></div>

        <div className="w-full aspect-[3/2] bg-chifa-card mt-4 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
          <span className="text-gray-500 font-body font-medium">aca va imagen</span>
        </div>

        {category.descripcion && (
          <p className="text-gray-400 text-sm mt-2 text-center max-w-xs font-body italic">
            {category.descripcion}
          </p>
        )}

        {category.precio_general && (
          <div className="mt-3 bg-chifa-gold/10 text-chifa-gold px-4 py-1 rounded-full font-bold font-body text-sm border border-chifa-gold/30">
            Precio General: S/ {category.precio_general.toFixed(2)}
          </div>
        )}
      </div>

      <div className="bg-chifa-card rounded-xl shadow-lg shadow-black/30 border border-gray-800 p-2 sm:p-4">
        {category.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};