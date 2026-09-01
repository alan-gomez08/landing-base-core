import type { ClientData } from '../types/index';

export const configT2: any = {
  templateId: 'template-2',
  businessName: 'Tu Marca',
  
  // --- EL INTERRUPTOR MAESTRO ---
  config: {
    modulo: 'catalogos', // Catalogos - Turnos
    mostrarPrecios: true, // true  - false
    agendaModo: 'link', // whatsapp - link
    agendaLink: 'https://calendly.com/tu-usuario',
  },

  theme: { primaryColor: '#000000', secondaryColor: '#ffffff' },
  
  // === SECCIÓN: HERO ===
  hero: { 
    title: 'Transformá Tu Casa En Tu Lugar Favorito.', 
    subtitle: 'Muebles de diseño con envío a todo el país. Visitá nuestro showroom o comprá online.', 
    buttonText: 'Ver el catálogo online', 
    // 👇 LOGICA DE BOTÓN: 'whatsapp' para ícono/chat, 'calendar' para ícono de agenda/link externo.
    buttonType: 'calendar', 
    // 👇 LOGICA DE BOTÓN: Si elegiste 'calendar' arriba, este link es a donde te va a redirigir.
    buttonUrl: 'https://calendly.com/tu-usuario', 
    images: { 
      desktop: '/assets-t2/hero-desktop.webp', 
      tablet: '/assets-t2/hero-tablet.webp', 
      mobile: '/assets-t2/hero-mobile.webp' 
    } 
  },
  
  // === SECCIÓN: BENEFICIOS (¿Por qué elegir nuestros muebles?) ===
  stats: { 
    title: '¿Por qué elegir nuestros muebles?', 
    items: [
      {
        value: 'Asesoramiento Experto',
        label: 'Te ayudamos a elegir el mueble ideal para tu espacio y estilo de vida.'
      },
      {
        value: 'Calidad Premium',
        label: 'Trabajamos con maderas macizas y telas de primera calidad certificada.'
      },
      {
        value: 'Envíos Coordinados',
        label: 'Llegamos a todo el país. Embalaje extra seguro para tu tranquilidad.'
      }
    ] 
  },

  // === SECCIÓN: NOSOTROS (Primer bloque de Inspiración) ===
  about: { 
    title: 'Diseñamos Espacios Para Vivirlos.', 
    subtitle: 'NUESTRA ESENCIA', 
    description: 'Creemos que cada casa tiene el potencial de ser tu lugar favorito. Creamos muebles que equilibran la estética del diseño contemporáneo con la calidez que tu día a día necesita.', 
    buttonText: 'Hablemos por WhatsApp',
    // 👇 LOGICA DE BOTÓN: Acá podés cambiarlo a 'calendar' si quisieras en esta sección
    buttonType: 'whatsapp', 
    // 👇 LOGICA DE BOTÓN: Como está en whatsapp, este campo se ignora. Si fuera 'calendar', llená la URL.
    buttonUrl: '',
    images: { 
      desktop: '/assets-t2/about.webp',
      tablet: '/assets-t2/about.webp',
      mobile: '/assets-t2/about.webp' 
    } 
  },
  
  // === SECCIÓN: CATÁLOGO DE PRODUCTOS ===
  menu: { 
    title: 'Los más elegidos', 
    categories: ['Sillones', 'Sillas', 'Mesas', 'Deco'], 
    items: [
      { id: '1', title: 'Poltrona "Roma"', description: 'Sillón tapizado premium', price: '$250.000', category: 'Sillones', imagePath: '/assets-t2/product-roma.webp', colores: ['Beige', 'Gris', 'Verde Musgo'] },
      { id: '2', title: 'Poltrona "Tartán"', description: '', price: '$210.000', category: 'Sillones', imagePath: '/assets-t2/product-tartan.webp' },
      { id: '3', title: 'Poltrona "Esmeralda"', description: '', price: '$320.000', category: 'Sillones', imagePath: '/assets-t2/product-esmeralda.webp', colores: ['Azul Noche', 'Esmeralda'] },
      { id: '4', title: 'Sillón Rattan "Bali"', description: '', price: '$180.000', category: 'Sillones', imagePath: '/assets-t2/product-bali.webp' },
      { id: '5', title: 'Sofá Modular 3 Cuerpos', description: '', price: '$550.000', category: 'Sillones', imagePath: '/assets-t2/product-modular.webp', talles: ['2 Cuerpos', '3 Cuerpos', 'Esquinero'] },
      { id: '6', title: 'Sillón Individual Nórdico', description: '', price: '$140.000', category: 'Sillones', imagePath: '/assets-t2/product-nordico.webp' },
      
      { id: '7', title: 'Silla de Comedor "Oslo"', description: '', price: '$85.000', category: 'Sillas', imagePath: '/assets-t2/product-oslo.webp', colores: ['Madera Clara', 'Madera Oscura'] },
      { id: '8', title: 'Silla de Cabecera "Milán"', description: '', price: '$95.000', category: 'Sillas', imagePath: '/assets-t2/product-milan.webp' },
      { id: '9', title: 'Silla Eames Tapizada', description: '', price: '$65.000', category: 'Sillas', imagePath: '/assets-t2/product-eames.webp', colores: ['Gris Claro', 'Grafito', 'Mostaza'] },
      { id: '10', title: 'Banqueta Alta Barra', description: '', price: '$75.000', category: 'Sillas', imagePath: '/assets-t2/product-banqueta.webp' },
      { id: '11', title: 'Silla de Diseño "Windsor"', description: '', price: '$110.000', category: 'Sillas', imagePath: '/assets-t2/product-windsor.webp' },
      { id: '12', title: 'Silla de Exterior "Acapulco"', description: '', price: '$45.000', category: 'Sillas', imagePath: '/assets-t2/product-acapulco.webp', colores: ['Negro', 'Blanco', 'Turquesa'] },
      
      { id: '13', title: 'Mesa Ratona de Roble', description: '', price: '$120.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-ratona.webp' },
      { id: '14', title: 'Mesa de Comedor Extensible', description: '', price: '$480.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-comedor.webp', talles: ['1.40m a 1.80m', '1.60m a 2.00m'] },
      { id: '15', title: 'Mesa Auxiliar de Hierro', description: '', price: '$65.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-auxiliar.webp' },
      { id: '16', title: 'Escritorio Home Office', description: '', price: '$190.000', category: 'Mesas', imagePath: '/assets-t2/product-escritorio.webp' },
      { id: '17', title: 'Mesa de Centro Vidrio', description: '', price: '$150.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-vidrio.webp' },
      { id: '18', title: 'Mesa de Luz Nórdica', description: '', price: '$70.000', category: 'Mesas', imagePath: '/assets-t2/product-mesa-luz.webp' },
      
      { id: '19', title: 'Set Living Modular', description: '', price: '$85.000', category: 'Deco', imagePath: '/assets-t2/deco-set-living.webp' },
      { id: '20', title: 'Bahiut Nórdico', description: '', price: '$220.000', category: 'Deco', imagePath: '/assets-t2/deco-bahiut-madera.webp' },
      { id: '21', title: 'Consola Moderna Oscura', description: '', price: '$185.000', category: 'Deco', imagePath: '/assets-t2/deco-consola-moderna.webp' },
      { id: '22', title: 'Cajonera de Diseño', description: '', price: '$160.000', category: 'Deco', imagePath: '/assets-t2/deco-cajonera-diseno.webp' },
      { id: '23', title: 'Cómoda Azul Vintage', description: '', price: '$175.000', category: 'Deco', imagePath: '/assets-t2/deco-comoda-azul.webp' },
      { id: '24', title: 'Sillón 2 Cuerpos Madera', description: '', price: '$290.000', category: 'Deco', imagePath: '/assets-t2/deco-sillon-madera.webp' }
    ] 
  },
  
  // === SECCIÓN: BANNER INFERIOR (Segundo bloque de Inspiración) ===
  events: { 
    title: 'Materiales Nobles, Terminaciones Perfectas.', 
    description: 'Explorá nuestra colección de tapizados antimanchas, linos naturales y maderas con tratamiento poliuretánico.', 
    buttonText: 'Explorar Catálogo',
    // 👇 LOGICA DE BOTÓN: Igual que en about, este define qué mostrar.
    buttonType: 'calendar',
    buttonUrl: 'https://calendly.com/tu-usuario',
    images: [
      '/assets-t2/inspiracion-1.webp',
      '/assets-t2/inspiracion-2.webp',
      '/assets-t2/inspiracion-3.webp'
    ]
  },
  
  // === SECCIÓN: TESTIMONIOS ===
  testimonials: { 
    title: 'Historias De Casas Reales', 
    items: [
      {
        name: 'Belén García',
        role: 'Clienta',
        content: 'Los sillones son una locura. La calidad de la tela y la firmeza del asiento son increíbles. Cambió por completo mi living.',
        avatar: '/assets-t2/avatar1.webp',
        bgImage: '/assets-t2/review-bg-1.webp'
      },
      {
        name: 'Martín',
        role: 'Arquitecto',
        content: 'Siempre los recomiendo a mis clientes. Sus mesas de comedor tienen un acabado perfecto y resisten el uso diario sin problemas.',
        avatar: '/assets-t2/avatar2.webp',
        bgImage: '/assets-t2/review-bg-2.webp'
      },
      {
        name: 'Mariana L.',
        role: 'Clienta',
        content: 'La atención en el showroom fue excelente. Me ayudaron a elegir la silla exacta que combinaba con mis pisos.',
        avatar: '/assets-t2/avatar3.webp',
        bgImage: '/assets-t2/review-bg-3.webp'
      }
    ] 
  },
  
  // === SECCIÓN: UBICACIÓN ===
  location: { 
    title: 'Nuestro Showroom. Vení a probar tu próximo mueble', 
    description: 'Te invitamos a sentir las texturas, probar la comodidad de nuestros sillones y recibir asesoramiento personalizado. Estamos en el corazón del polo de diseño.', 
    buttonText: 'Agendar Cita por WhatsApp', 
    // 👇 LOGICA DE BOTÓN: Define WhatsApp para el bloque de Ubicación.
    buttonType: 'whatsapp',
    buttonUrl: '',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276848!2d-58.43283182352824!3d-34.58249826078652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5840d58849b%3A0xc3b832b85e0ff0!2sPalermo%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar'
  },
  
  // === SECCIÓN: CONTACTO ===
  contact: { 
    whatsapp: '5491100000000', 
    instagram: 'https://instagram.com/tumarca', 
    facebook: 'https://facebook.com/tumarca' 
  }
};