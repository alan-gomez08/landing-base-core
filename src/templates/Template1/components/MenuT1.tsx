import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, type Variants } from 'framer-motion';

// --- Types -------------------------------------------------------------------
interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  imagePath?: string;
}

interface MenuT1Props {
  data: any;
  paleta: any;
  cart: any[];
  addToCart: (item: any) => void;
  updateQuantity: (id: string, amount: number) => void;
}

// --- Animation Variants ------------------------------------------------------
const GRID_VARIANTS: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
  exit: {},
};

const CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -14,
    scale: 0.96,
    transition: { duration: 0.18, ease: 'easeIn' },
  },
};

// --- Single Menu Card --------------------------------------------------------
function MenuCard({
  item,
  isEcommerce,
  mostrarPrecios,
  cart,
  addToCart,
  updateQuantity,
  accentColor,
  whatsapp,
}: {
  item: MenuItem;
  isEcommerce: boolean;
  mostrarPrecios: boolean;
  cart: any[];
  addToCart: (item: any) => void;
  updateQuantity: (id: string, amount: number) => void;
  accentColor: string;
  whatsapp: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const quantity = cart?.find((i: any) => i.id === item.id)?.quantity ?? 0;

  return (
    <motion.article
      variants={CARD_VARIANTS}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ willChange: 'transform' }}
      className="relative w-full md:flex md:flex-col"
    >

      {/* ====================================================================
          MOBILE CINEMATIC CARD  (md:hidden - invisible on tablet+)
          Full-bleed image hero, gradient overlay, text at bottom, FAB.
      ==================================================================== */}
      <div
        className="md:hidden relative w-full rounded-3xl overflow-hidden"
        style={{ height: 'clamp(220px, 72vw, 340px)' }}
      >

        {/* ── Image Stage ─────────────────────────────────────────────────────
            - Radial spotlight gradient background: consistent behind all items
            - object-contain + p-6 so cutouts never bleed to the edges
            - drop-shadow on the <img> itself (not box-shadow) for 3D depth
            - motion.img scale on hover for subtle alive feel
        ─────────────────────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 flex items-center justify-center p-6"
          style={{
            background: 'radial-gradient(ellipse at 50% 44%, #242424 0%, #131313 45%, #0A0A0A 100%)',
          }}
        >
          {item.imagePath ? (
            <motion.img
              src={item.imagePath}
              alt={item.title}
              className="w-full h-full object-contain max-w-[85%] max-h-[85%]"
              style={{
                filter: 'drop-shadow(0 20px 28px rgba(0,0,0,0.85)) drop-shadow(0 6px 10px rgba(0,0,0,0.6))',
              }}
              animate={{ scale: hovered ? 1.05 : 1, y: hovered ? -4 : 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as any }}
            />
          ) : (
            <svg className="w-16 h-16 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )}
        </div>

        {/* Dark gradient overlay - bottom up */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.8) 28%, rgba(10,10,10,0.35) 52%, transparent 100%)' }}
        />

        {/* Accent colour tint at top */}
        <div
          className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, ${accentColor}20 0%, transparent 100%)` }}
        />

        {/* Category badge - top left */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.8)',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {item.category}
        </div>

        {/* Glassmorphic FAB - add to cart */}
        {isEcommerce && quantity === 0 && (
          <motion.button
            type="button"
            onClick={() => addToCart(item)}
            className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.22)',
            }}
            whileTap={{ scale: 0.91 }}
            aria-label={`Agregar ${item.title} al pedido`}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.4}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </motion.button>
        )}

        {/* Glassmorphic quantity stepper FAB */}
        {isEcommerce && quantity > 0 && (
          <div
            className="absolute top-4 right-4 h-11 rounded-full flex items-center gap-0.5 px-1.5"
            style={{
              backgroundColor: 'rgba(10,10,10,0.75)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: `1px solid ${accentColor}60`,
            }}
          >
            <button
              type="button"
              onClick={() => updateQuantity(item.id, -1)}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-lg font-light active:scale-90 transition-transform"
            >
              -
            </button>
            <span className="font-bold text-[15px] text-white min-w-[20px] text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(item.id, 1)}
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg active:scale-90 transition-transform"
              style={{ backgroundColor: accentColor, color: '#000' }}
            >
              +
            </button>
          </div>
        )}

        {/* WhatsApp FAB - non-ecommerce */}
        {!isEcommerce && (
          <a
            href={`https://wa.me/${whatsapp}?text=Hola! Quisiera consultar sobre: ${encodeURIComponent(item.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center active:scale-95 transition-transform"
            style={{
              backgroundColor: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: 'white',
            }}
            aria-label={`Consultar sobre ${item.title}`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        )}

        {/* Text overlay anchored to bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3
            className="text-[19px] font-bold leading-tight tracking-tight text-white mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {item.title}
          </h3>
          <p className="text-[12px] leading-snug mb-2.5" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {item.description.length > 60 ? item.description.slice(0, 60) + '...' : item.description}
          </p>
          {isEcommerce && mostrarPrecios && item.price && (
            <span
              className="text-[20px] font-bold tracking-tight"
              style={{ color: accentColor, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {item.price}
            </span>
          )}
        </div>
      </div>


      {/* ====================================================================
          DESKTOP CARD  (hidden md:flex - only visible on tablet+)
          Vertical column: floating image top, text below, ghost pill CTA.
          All md: and lg: classes below are the originals - untouched.
      ==================================================================== */}
      <div className="hidden md:flex md:flex-col md:w-full">

        {/* Diffuse glow on hover */}
        <motion.div
          aria-hidden
          className="absolute top-4 left-1/2 -translate-x-1/2 w-[160px] h-[160px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${accentColor}55 0%, transparent 70%)`,
            filter: 'blur(28px)',
          }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.2 : 0.8 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        {/* Floating food image */}
        <div className="relative w-full h-[190px] flex items-center justify-center mb-5 overflow-visible">
          {item.imagePath ? (
            <motion.img
              src={item.imagePath}
              alt={item.title}
              className="w-full h-full object-contain relative z-10"
              style={{ filter: 'drop-shadow(0 20px 32px rgba(0,0,0,0.65))' }}
              animate={{ scale: hovered ? 1.07 : 1, rotate: hovered ? 2 : 0, y: hovered ? -6 : 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as any }}
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-neutral-600 z-10">
              <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-neutral-700">Sin foto</span>
            </div>
          )}
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-2 flex-grow px-1">
          <h3
            className="text-[19px] lg:text-[21px] font-bold leading-tight tracking-tight text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {item.title}
          </h3>
          <p className="text-[13.5px] leading-relaxed text-neutral-400 line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Price + CTA */}
        <div className="mt-5 flex flex-col gap-3.5 px-1">
          {isEcommerce && mostrarPrecios && item.price && (
            <span
              className="text-[24px] font-bold tracking-tight"
              style={{ color: accentColor, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {item.price}
            </span>
          )}

          {isEcommerce ? (
            quantity === 0 ? (
              <motion.button
                type="button"
                onClick={() => addToCart(item)}
                onHoverStart={() => setBtnHovered(true)}
                onHoverEnd={() => setBtnHovered(false)}
                className="relative w-full py-3 rounded-full text-[14px] font-semibold tracking-wide overflow-hidden border flex items-center justify-center gap-2"
                style={{
                  borderColor: accentColor,
                  color: btnHovered ? '#000' : accentColor,
                  backgroundColor: btnHovered ? accentColor : 'transparent',
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: 'background-color 0.28s ease, color 0.28s ease',
                }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  animate={{ x: btnHovered ? 0 : -6, opacity: btnHovered ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </motion.svg>
                <motion.span animate={{ x: btnHovered ? 0 : -8 }} transition={{ duration: 0.2 }}>
                  Agregar al Pedido
                </motion.span>
              </motion.button>
            ) : (
              <div
                className="w-full h-[50px] rounded-full flex items-center justify-between px-1.5 border"
                style={{ borderColor: `${accentColor}40`, backgroundColor: '#0A0A0A' }}
              >
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-2xl font-light text-white hover:bg-white/10 active:scale-90 transition-all"
                >
                  -
                </button>
                <span className="font-bold text-[16px] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl active:scale-90 transition-all"
                  style={{ backgroundColor: accentColor, color: '#000' }}
                >
                  +
                </button>
              </div>
            )
          ) : (
            <a
              href={`https://wa.me/${whatsapp}?text=Hola! Quisiera consultar sobre: ${encodeURIComponent(item.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-[14px] font-semibold tracking-wide flex items-center justify-center gap-2 border active:scale-95 transition-all duration-300"
              style={{ borderColor: accentColor, color: accentColor, fontFamily: "'Space Grotesk', sans-serif" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = accentColor;
                (e.currentTarget as HTMLAnchorElement).style.color = '#000';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = accentColor;
              }}
            >
              Consultar
            </a>
          )}
        </div>

        {/* Separator */}
        <div className="mt-7 h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
      </div>

    </motion.article>
  );
}

// --- Main Component ----------------------------------------------------------
export default function MenuT1({ data, paleta, cart, addToCart, updateQuantity }: MenuT1Props) {
  const categories: string[] = data?.menu?.categories || [];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || 'Destacados');
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.05 });

  const filteredItems: MenuItem[] = (data?.menu?.items || []).filter(
    (item: MenuItem) => item.category === activeCategory
  );

  const isEcommerce: boolean = data?.config?.ecommerceMode ?? false;
  const mostrarPrecios: boolean = data?.config?.mostrarPrecios !== false;
  const accentColor: string = paleta.colorPrimario || '#F59E0B';
  const whatsapp: string = data?.contact?.whatsapp || '';

  return (
    <section
      id="menu"
      className="relative w-full py-20 lg:py-28 flex justify-center overflow-hidden bg-transparent"
    >
      {/* ── Studio Spotlight Effect ────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft, oversized radial spotlight centered behind food items */}
        <div
          className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] max-w-[1500px] h-[900px] lg:h-[1200px]"
          style={{
            background: 'radial-gradient(ellipse 65% 55% at 50% 50%, #1A1A1A 0%, rgba(26,26,26,0.45) 45%, rgba(10,10,10,0) 80%)',
          }}
        />
        {/* Subtle ambient warmth glow */}
        <div
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] opacity-20"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${accentColor}18 0%, transparent 65%)`,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, bounce: 0.2 }}
        viewport={{ once: true, margin: '-100px' }}
      >

        {/* Section Header */}
        <div className="text-center px-6 mb-14 lg:mb-16">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: accentColor }}>
            Lo Mejor de Nuestra Cocina
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {data?.menu?.title || 'Nuestro Menu'}
          </h2>
        </div>

        {/* Category Segmented Control
            Floating glass effect: bg-white/[0.03] backdrop-blur-md border border-white/[0.05] */}
        <div
          className="sticky top-20 z-40 md:relative md:top-auto md:z-auto w-full mb-6 md:mb-12 lg:mb-16 px-4 md:px-6 py-3 md:py-0 flex justify-start md:justify-center bg-transparent"
        >
          <div
            className="flex flex-row items-center gap-1 md:gap-1.5 p-1 md:p-1.5 rounded-full overflow-x-auto hide-scrollbar snap-x snap-mandatory bg-white/[0.03] backdrop-blur-md border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
            style={{ maxWidth: '100%' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className="relative shrink-0 snap-start px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[12.5px] md:text-[13.5px] font-medium z-10 outline-none active:scale-95 transition-transform duration-100"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: activeCategory === cat ? '#000000' : 'rgba(255,255,255,0.6)' }}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full z-[-1] shadow-md"
                    style={{ backgroundColor: '#FFFFFF' }}
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile sticky-nav spacer */}
        <div className="md:hidden w-full h-2" />

        {/* Menu Grid
            Mobile:  flex-col gap-4, cinematic full-bleed cards
            Desktop: md:grid md:grid-cols-2 / lg:grid-cols-3 premium grid */}
        <div ref={gridRef} className="w-full px-4 md:px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="flex flex-col gap-4 md:gap-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-14"
              variants={GRID_VARIANTS}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              exit="exit"
            >
              {filteredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  isEcommerce={isEcommerce}
                  mostrarPrecios={mostrarPrecios}
                  cart={cart}
                  addToCart={addToCart}
                  updateQuantity={updateQuantity}
                  accentColor={accentColor}
                  whatsapp={whatsapp}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              className="flex flex-col items-center justify-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <svg className="w-14 h-14 mb-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <p className="text-neutral-600 text-sm tracking-wide">Sin items en esta categoria</p>
            </motion.div>
          )}
        </div>

      </motion.div>
    </section>
  );
}
