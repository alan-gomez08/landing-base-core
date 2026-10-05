import { useState } from 'react';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function NavbarT1({ data, paleta }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Menú', href: '#menu' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Ubicación', href: '#ubicacion' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all"
      style={{ 
        backgroundColor: 'rgba(10,10,10,0.85)',
        borderBottom: '1px solid rgba(255,255,255,0.08)' 
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        
        <a 
          href="#inicio" 
          className="text-2xl font-bold tracking-tight text-white hover:opacity-90 active:scale-95 transition-all"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {data.businessName}
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors active:scale-95"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 active:scale-90 transition-transform"
          style={{ color: paleta.textoPrimario }}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div 
        className={`md:hidden absolute top-20 left-0 w-full transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
        style={{ 
          backgroundColor: paleta.fondoSecundario,
          borderBottom: `1px solid ${paleta.textoSecundario}33`
        }}
      >
        <div className="flex flex-col p-6 gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium font-['Inter'] active:scale-95 transition-all opacity-80 hover:opacity-100"
              style={{ color: paleta.textoPrimario }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}