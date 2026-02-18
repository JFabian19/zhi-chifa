import React, { useRef, useEffect } from 'react';
import { MenuCategory } from '../types';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  activeCategory, 
  onSelectCategory 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the nav to keep active item in view
  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = document.getElementById(`nav-item-${activeCategory}`);
      if (activeEl) {
        const container = scrollRef.current;
        const scrollLeft = activeEl.offsetLeft - container.offsetWidth / 2 + activeEl.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeCategory]);

  return (
    <nav className="sticky top-0 z-40 bg-chifa-bg/95 backdrop-blur-sm shadow-md border-b border-gray-200">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto py-3 px-2 hide-scrollbar gap-2"
      >
        {categories.map((cat, index) => {
            // Extract just the main name before parenthesis for the button
            const shortName = cat.categoria.split('(')[0].trim();
            
            return (
                <button
                key={index}
                id={`nav-item-${cat.categoria}`}
                onClick={() => onSelectCategory(cat.categoria)}
                className={`
                    whitespace-nowrap px-4 py-2 rounded-full text-sm font-body font-bold transition-all duration-300
                    ${activeCategory === cat.categoria 
                    ? 'bg-chifa-red text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-600 border border-gray-200'}
                `}
                >
                {shortName}
                </button>
            );
        })}
      </div>
    </nav>
  );
};