import React from 'react';
import { UtensilsCrossed, MapPin, Facebook, Phone } from 'lucide-react';
import { MENU_DATA } from '../constants';

// Real WhatsApp SVG icon
const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// TikTok SVG icon
const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48 6.3 6.3 0 001.83-4.48V8.73a8.28 8.28 0 004.86 1.56V6.84a4.84 4.84 0 01-1.11-.15z" />
  </svg>
);

export const Header: React.FC = () => {
  const whatsappNumber = '51950571654';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="relative bg-chifa-black border-b-4 border-chifa-red pb-6 pt-8 px-4 text-center overflow-hidden">
      {/* Decorative top pattern */}
      <div className="absolute top-0 left-0 w-full h-3 bg-oriental-pattern opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-chifa-red shadow-lg shadow-red-900/30 mb-4">
          <img src="/logo.png" alt={MENU_DATA.negocio.nombre} className="w-full h-full object-cover" />
        </div>

        <h1 className="text-4xl font-oriental text-chifa-gold mb-2 tracking-wide" style={{ textShadow: '0 0 20px rgba(212,175,55,0.3)' }}>
          {MENU_DATA.negocio.nombre}
        </h1>

        <div className="flex items-center gap-3 text-chifa-red font-elegant font-bold tracking-[0.25em] text-sm uppercase">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-chifa-gold"></span>
          <span>{MENU_DATA.negocio.identidad}</span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-chifa-gold"></span>
        </div>

        <div className="mt-4 flex gap-4 text-xs text-gray-400 font-body">
          <div className="flex items-center gap-1">
            <UtensilsCrossed size={14} className="text-chifa-gold" />
            <span>Auténtico sabor</span>
          </div>
        </div>

        {/* Ubícanos - Google Maps link */}
        <a
          href="https://maps.app.goo.gl/wjwciuKnZx3ThgWN7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 bg-chifa-red/20 hover:bg-chifa-red/30 border border-chifa-red/40 text-white px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 group"
        >
          <MapPin size={18} className="text-chifa-red group-hover:text-chifa-gold transition-colors" />
          <span className="font-body font-bold text-sm tracking-wider uppercase">Ubícanos</span>
        </a>

        {/* Social Media Icons */}
        <div className="mt-5 flex gap-8 text-chifa-red">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1HkD68MzPT/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 hover:text-chifa-gold transition-colors cursor-pointer"
          >
            <Facebook size={24} />
            <span className="text-[10px] uppercase tracking-wider font-bold">Facebook</span>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@chifa.zhi.oriental?_r=1&_t=ZS-945wc4eXVsD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 hover:text-chifa-gold transition-colors cursor-pointer"
          >
            <TikTokIcon size={24} />
            <span className="text-[10px] uppercase tracking-wider font-bold">TikTok</span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 hover:text-green-400 transition-colors cursor-pointer"
          >
            <WhatsAppIcon size={24} />
            <span className="text-[10px] uppercase tracking-wider font-bold">WhatsApp</span>
          </a>

          {/* Llamar */}
          <a
            href="tel:01056523196"
            className="flex flex-col items-center gap-1 hover:text-chifa-gold transition-colors cursor-pointer"
          >
            <Phone size={24} />
            <span className="text-[10px] uppercase tracking-wider font-bold">Llamar</span>
          </a>
        </div>
      </div>

      {/* Decorative corner patterns */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-chifa-gold rounded-tl-xl opacity-40"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-chifa-gold rounded-tr-xl opacity-40"></div>
    </header>
  );
};