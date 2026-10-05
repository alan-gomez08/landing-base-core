import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { configT1 } from '../../../config/dataT1';
import type { ClientData } from '../../../types';

interface Props {
  data: ClientData;
  paleta: any;
}

export default function HeroT1({ data, paleta }: Props) {
  const heroData = data?.hero || configT1.hero;
  const rawTitle = heroData?.title || configT1.hero.title;
  // Drop generic greeting to focus directly on value proposition
  const cleanTitle = rawTitle.replace(/^Bienvenidos!?\s*\n?/i, '').trim();
  const subtitle = heroData?.subtitle || configT1.hero.subtitle;
  const buttonText = heroData?.buttonText || configT1.hero.buttonText;
  const heroImage = heroData?.images?.desktop || configT1.hero.images.desktop;
  const whatsapp = data?.contact?.whatsapp || configT1.contact.whatsapp;
  const accentColor = paleta?.colorPrimario || '#F59E0B';

  // Subtle parallax effect linked to scroll
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 160]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-[100svh] min-h-[640px] flex flex-col justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* ── Background Image with Parallax & Gentle Scale ── */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.div style={{ y: parallaxY }} className="w-full h-full">
          <motion.img
            src={heroImage}
            alt="Atmósfera gastronómica"
            className="w-full h-full object-cover object-[75%_center] md:object-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: 1,
              scale: [1.05, 1, 1.05],
            }}
            transition={{
              opacity: { duration: 1.5, ease: 'easeOut' },
              scale: { duration: 20, ease: 'easeInOut', repeat: Infinity },
            }}
          />
        </motion.div>

        {/* ── Dynamic Gradient: Safe dark zone on left/bottom ── */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent md:bg-gradient-to-r md:from-[#0A0A0A]/90 md:via-[#0A0A0A]/50 md:to-transparent w-full md:w-[85%] lg:w-[75%]" />

        {/* Subtle ambient film tint */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* ── Editorial Content Block (Anchored Bottom on Mobile, Centered on Desktop) ── */}
      <div className="relative z-10 w-full max-w-[1250px] mx-auto px-6 sm:px-12 lg:px-16 h-full flex flex-col justify-end pb-12 pt-32 md:justify-center md:pb-0 md:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-start max-w-3xl w-full"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 md:mb-5">
            <span
              className="w-8 md:w-10 h-px"
              style={{ backgroundColor: accentColor }}
            />
            <span
              className="text-[10px] md:text-xs font-semibold tracking-[0.28em] uppercase text-white/90"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Experiencia Gastronómica
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight md:leading-[1.05] tracking-tighter text-white mb-4 md:mb-6 whitespace-pre-line text-balance"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {cleanTitle}
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            variants={itemVariants}
            className="text-neutral-400 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-lg mb-8 md:mb-10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {subtitle}
          </motion.p>

          {/* Action Area: Unified Primary & Secondary CTA Architecture */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto"
          >
            {/* Primary CTA: Pill-shaped solid white, text-black */}
            <a
              href={`https://wa.me/${whatsapp}?text=Hola! Quisiera hacer un pedido.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-medium text-black bg-white hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl w-full md:w-auto text-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span>{buttonText}</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Secondary CTA: Glassmorphic outline */}
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-white border border-white/20 bg-transparent hover:bg-white/10 active:scale-95 transition-all duration-200 w-full md:w-auto text-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span>Ver Menú</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}