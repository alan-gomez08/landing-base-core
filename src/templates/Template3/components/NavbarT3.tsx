import { useState, useEffect } from 'react';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function NavbarT3({ data, paleta }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Consumimos los links dinámicos desde dataT3.ts (con fallback de seguridad)
  const navLinks = data.nav?.links || [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nuestra Agencia', href: '#equipo' },
    { name: 'Contacto', href: '#ubicacion' }
  ];

  // Consumimos el texto del botón del navbar, si no existe usa el del hero
  const navButtonText = data.nav?.buttonText || data.hero.buttonText;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-md shadow-lg border-b' : 'py-8 bg-transparent'}`}
      style={{ 
        backgroundColor: scrolled ? `${paleta.fondoOscuro}E6` : 'transparent',
        borderColor: scrolled ? `${paleta.textoClaro}1A` : 'transparent'
      }}
    >
      <div className="max-w-[1250px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        <a href="#inicio" className="flex items-baseline relative z-10">
          <span className="text-[24px] lg:text-[28px] font-bold font-['Lexend_Deca'] tracking-wide" style={{ color: paleta.textoClaro }}>
            {data.businessName.replace('.', '')}
          </span>
          <span className="text-[24px] lg:text-[32px] font-bold font-['Lexend_Deca'] leading-none" style={{ color: paleta.colorPrimario }}>.</span>
        </a>

        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link: any) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[15px] font-medium font-['Lexend_Deca'] transition-colors"
              style={{ color: paleta.textoClaro }}
              onMouseEnter={(e) => e.currentTarget.style.color = paleta.colorPrimario}
              onMouseLeave={(e) => e.currentTarget.style.color = paleta.textoClaro}
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href={`https://wa.me/${data.contact.whatsapp}`}
            target="_blank" rel="noopener noreferrer"
            className="px-8 py-2.5 border rounded transition-all flex items-center gap-2 group"
            style={{ backgroundColor: `${paleta.colorPrimario}33`, borderColor: `${paleta.colorPrimario}80`, color: paleta.textoClaro }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = paleta.colorPrimario}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = `${paleta.colorPrimario}33`}
          >
            {navButtonText}
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-10"
        >
          <div className="w-[24px] h-[2px] rounded-full transition-transform" style={{ backgroundColor: paleta.textoClaro }} />
          <div className="w-[24px] h-[2px] rounded-full transition-transform" style={{ backgroundColor: paleta.textoClaro }} />
          <div className="w-[24px] h-[2px] rounded-full transition-transform" style={{ backgroundColor: paleta.textoClaro }} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full border-t py-6 flex flex-col items-center gap-6 lg:hidden shadow-2xl" style={{ backgroundColor: paleta.fondoOscuro, borderColor: `${paleta.textoClaro}1A` }}>
          {navLinks.map((link: any) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium font-['Lexend_Deca']" style={{ color: paleta.textoClaro }}>
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${data.contact.whatsapp}`}
            className="mt-2 px-8 py-3 font-medium rounded flex items-center gap-2"
            style={{ backgroundColor: paleta.colorPrimario, color: paleta.textoClaro }}
          >
            {navButtonText}
          </a>
        </div>
      )}
    </nav>
  );
}