import React from 'react';
import { UtensilsCrossed, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { MENU_DATA } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-chifa-bg border-b-4 border-chifa-red pb-6 pt-8 px-4 text-center overflow-hidden">
      {/* Decorative top pattern */}
      <div className="absolute top-0 left-0 w-full h-3 bg-oriental-pattern opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-chifa-black rounded-full flex items-center justify-center border-4 border-chifa-red shadow-lg mb-4">
          <span className="text-white font-oriental text-3xl pt-2">{MENU_DATA.negocio.logo_text}</span>
        </div>

        <h1 className="text-3xl font-oriental text-chifa-black mb-1">
          {MENU_DATA.negocio.nombre}
        </h1>

        <div className="flex items-center gap-2 text-chifa-wine font-body font-semibold tracking-widest text-sm uppercase">
          <span className="w-8 h-[1px] bg-chifa-gold"></span>
          <span>{MENU_DATA.negocio.identidad}</span>
          <span className="w-8 h-[1px] bg-chifa-gold"></span>
        </div>

        <div className="mt-4 flex gap-4 text-xs text-gray-500 font-body">
          <div className="flex items-center gap-1">
            <UtensilsCrossed size={14} className="text-chifa-gold" />
            <span>Auténtico sabor</span>
          </div>
        </div>

        {/* Social Media Icons (Non-functional) */}
        <div className="mt-4 flex gap-6 text-chifa-wine">
          <div className="flex flex-col items-center gap-1">
            <Facebook size={24} />
            <span className="text-[10px] uppercase tracking-wider font-bold">Facebook</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Instagram size={24} />
            <span className="text-[10px] uppercase tracking-wider font-bold">Instagram</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MessageCircle size={24} />
            <span className="text-[10px] uppercase tracking-wider font-bold">WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Decorative corner patterns */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-chifa-red rounded-tl-xl opacity-20"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-chifa-red rounded-tr-xl opacity-20"></div>
    </header>
  );
};