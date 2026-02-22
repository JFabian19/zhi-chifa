import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { MenuSection } from './components/MenuSection';
import { FloatingButtons } from './components/SearchFAB';
import { CartProvider } from './components/CartContext';
import { CartBar } from './components/CartBar';
import { CartModal } from './components/CartModal';
import { MenuProvider, useMenu } from './MenuContext';

const AppContent: React.FC = () => {
  const { menu, loading, error, negocio } = useMenu();
  const [activeCategory, setActiveCategory] = useState<string>('');

  // Set initial active category when menu loads
  useEffect(() => {
    if (menu.length > 0 && !activeCategory) {
      setActiveCategory(menu[0].categoria);
    }
  }, [menu]);

  const handleScroll = () => {
    const categoryElements = menu.map(cat => ({
      id: cat.categoria,
      el: document.getElementById(cat.categoria)
    }));

    const scrollPosition = window.scrollY + 180;

    for (const { id, el } of categoryElements) {
      if (el) {
        const { offsetTop, offsetHeight } = el;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveCategory(id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menu]);

  const scrollToCategory = (category: string) => {
    const el = document.getElementById(category);
    if (el) {
      const navHeight = 70;
      const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveCategory(category);
    }
  };

  return (
    <div className="min-h-screen pb-24 relative">
      {/* Decorative side patterns */}
      <div className="side-pattern side-pattern--left"></div>
      <div className="side-pattern side-pattern--right"></div>

      {/* Golden corner ornaments */}
      <div className="corner-ornament corner-ornament--tl"></div>
      <div className="corner-ornament corner-ornament--tr"></div>
      <div className="corner-ornament corner-ornament--bl"></div>
      <div className="corner-ornament corner-ornament--br"></div>

      <Header />

      <CategoryNav
        categories={menu}
        activeCategory={activeCategory}
        onSelectCategory={scrollToCategory}
      />

      <main className="max-w-2xl mx-auto px-4">
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-chifa-gold"></div>
            <span className="ml-3 text-gray-400 font-body">Cargando menú...</span>
          </div>
        )}

        {error && (
          <div className="text-center py-4 text-yellow-500 text-sm font-body bg-yellow-500/10 rounded-lg mb-4">
            {error}
          </div>
        )}

        {!loading && menu.map((category, index) => (
          <MenuSection
            key={category.categoria}
            id={category.categoria}
            category={category}
          />
        ))}
      </main>

      <footer className="mt-12 py-8 text-center text-gray-400 bg-black/60 font-body text-sm relative overflow-hidden border-t border-chifa-red/20">
        <div className="absolute top-0 left-0 w-full h-2 bg-oriental-pattern opacity-30"></div>
        <p className="mb-2">© {new Date().getFullYear()} {negocio.nombre}</p>
        <p className="text-xs mb-4 text-gray-500">Imágenes referenciales</p>

        <a href="https://tymasolutions.lat/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-xs text-gray-400">Hecho por </span>
          <span className="font-bold text-cyan-400">Tyma</span>
          <span className="font-bold text-white"> Solutions</span>
        </a>
      </footer>

      <FloatingButtons />
      <CartBar />
      <CartModal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MenuProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </MenuProvider>
  );
};

export default App;