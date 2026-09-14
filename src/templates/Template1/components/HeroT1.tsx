import { motion } from 'framer-motion';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function HeroT1({ data, paleta }: Props) {
  // Animaciones premium en cascada
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 20 } 
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-center overflow-hidden bg-black" 
    >
      
      {/* --- VIDEO BACKGROUND A PANTALLA COMPLETA --- */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={data.hero.images.desktop}
          // Escala ligera para inmersión sin bordes
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="/assets-t1/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* OVERLAYS PARA LEGIBILIDAD DEL TEXTO */}
        {/* 1. Oscurecimiento base súper sutil */}
        <div className="absolute inset-0 bg-black/20 transition-all duration-700" />
        
        {/* 2. Gradiente Mobile: Fuerte abajo, transparente al medio. Deja la parte superior limpia */}
        <div className="absolute bottom-0 left-0 w-full h-[75%] bg-gradient-to-t from-black/95 via-black/60 to-transparent md:hidden" />
        
        {/* 3. Gradiente Desktop: De izquierda a derecha */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent w-full lg:w-[75%]" />
      </div>

      {/* --- CONTENIDO TEXTUAL ANIMADO --- */}
      {/* Ajuste de pb-20 en mobile para separarlo del borde inferior */}
      <div className="relative z-10 w-full max-w-[1250px] mx-auto px-6 sm:px-12 lg:px-16 pt-24 flex flex-col justify-end md:justify-center h-full pb-20 md:pb-0">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="show" 
          className="flex flex-col items-start max-w-[700px]"
        >
          
          {/* Badge Flotante Estilo Agencia */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <span 
              className="w-8 md:w-14 h-[2px] opacity-90" 
              style={{ backgroundColor: paleta.colorPrimario || '#EF4444' }}
            />
            <span className="text-[10px] md:text-sm font-bold tracking-[0.25em] uppercase text-white/90 drop-shadow-md">
              Experiencia Inigualable
            </span>
          </motion.div>

          {/* Título Principal (Escalado corregido para mobile) */}
          <motion.h1 
            variants={fadeUp}
            className="text-[38px] sm:text-[54px] lg:text-[76px] xl:text-[86px] font-black leading-[1.05] tracking-tight md:tracking-tighter text-balance drop-shadow-2xl text-white mb-4 md:mb-6"
          >
            {data.hero.title}
          </motion.h1>

          {/* Subtítulo (Más sutil y corto en mobile) */}
          <motion.p 
            variants={fadeUp}
            className="text-[15px] md:text-[20px] lg:text-[22px] font-light leading-relaxed max-w-[500px] mb-8 md:mb-10 opacity-90 drop-shadow-lg text-white/80"
          >
            {data.hero.subtitle}
          </motion.p>

          {/* Botón Asimétrico Interactivo */}
          <motion.a 
            variants={fadeUp}
            href={`https://wa.me/${data.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="group relative inline-flex items-center gap-4 pl-6 md:pl-8 pr-2 py-2 rounded-full w-max shadow-[0_8px_30px_rgb(0,0,0,0.4)] overflow-hidden cursor-pointer"
            style={{ backgroundColor: paleta.fondoBoton }}
          >
            {/* Sweep Background animation */}
            <motion.div 
              className="absolute inset-0 z-0 origin-left"
              style={{ backgroundColor: paleta.textoBoton }}
              variants={{
                rest: { scaleX: 0, opacity: 0 },
                hover: { scaleX: 1, opacity: 0.1 },
                tap: { scaleX: 1, opacity: 0.2 }
              }}
              transition={{ duration: 0.4, ease: "circOut" }}
            />
            
            <motion.span 
              className="font-bold text-[15px] md:text-[18px] tracking-wide whitespace-nowrap relative z-10"
              style={{ color: paleta.textoBoton }}
              variants={{
                rest: { x: 0 },
                hover: { x: 4 }
              }}
              transition={{ duration: 0.3 }}
            >
              {data.hero.buttonText}
            </motion.span>
            
            <motion.div 
              className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center relative z-10 shadow-lg"
              style={{ backgroundColor: paleta.textoBoton, color: paleta.fondoBoton }}
              variants={{
                rest: { rotate: 0, scale: 1 },
                hover: { rotate: -12, scale: 1.08 },
                tap: { scale: 0.95 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <svg className="w-5 h-5 md:w-7 md:h-7 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </motion.div>
          </motion.a>

        </motion.div>
      </div>

    </section>
  );
}