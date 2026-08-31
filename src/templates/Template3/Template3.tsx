import { configT3 } from '../../config/dataT3'; 
import NavbarT3 from './components/NavbarT3';
import HeroT3 from './components/HeroT3';
import ServiciosT3 from './components/ServiciosT3';
import EquipoT3 from './components/EquipoT3';
import FaqT3 from './components/FaqT3';
import CtaT3 from './components/CtaT3';
import LocationT3 from './components/LocationT3';
import FooterT3 from './components/FooterT3';

export default function Template3() {

  // 🎨 TABLERO DE COLORES T3 🎨
  const paleta = {
    fondoOscuro: "#0F172A",          // Fondo principal oscuro (Hero, Menú Mobile)
    fondoOscuroSecundario: "#101828",// Fondo del Footer
    fondoClaro: "#F8FAFC",           // Fondo de secciones claras (Servicios, Equipo)
    fondoCajas: "#FFFFFF",           // Fondo de las tarjetas blancas
    colorPrimario: configT3?.theme?.primaryColor || "#2563EB", // Azul corporativo (Botones, Íconos)
    textoClaro: "#F5F5F5",           // Textos sobre fondo oscuro
    textoOscuro: "#0F172A",          // Títulos sobre fondo claro
    textoGris: "#475569",            // Párrafos sobre fondo claro
  };

  return (
    <main 
      className="w-full min-h-screen font-sans selection:text-white overflow-x-hidden"
      style={{ 
        backgroundColor: paleta.fondoClaro,
        '--tw-selection-background-color': paleta.colorPrimario 
      } as React.CSSProperties}
    >
      <NavbarT3 data={configT3} paleta={paleta} />
      <HeroT3 data={configT3} paleta={paleta} />
      <ServiciosT3 data={configT3} paleta={paleta} />
      <EquipoT3 data={configT3} paleta={paleta} />
      {/* Nueva sección FAQ insertada antes del CTA */}
      <FaqT3 data={configT3} paleta={paleta} />
      <CtaT3 data={configT3} paleta={paleta} />
      <LocationT3 data={configT3} paleta={paleta} />
      <FooterT3 data={configT3} paleta={paleta} />
    </main>
  );
}