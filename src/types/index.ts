export interface ClientData {
  templateId?: string;
  businessName: string;
  config?: {
    modulo?: string;
    mostrarPrecios?: boolean;
    agendaModo?: string;
    agendaLink?: string;
    [key: string]: any;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
  nav?: {
    links?: { name: string; href: string }[];
    buttonText?: string;
  };
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonType?: string;
    buttonUrl?: string;
    images: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    buttonText?: string;
    buttonType?: string;
    buttonUrl?: string;
    images: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };
  menu: {
    title: string;
    categories: string[];
    items: {
      id: string;
      title: string;
      description: string;
      price: string;
      imagePath: string;
      category: string;
      colores?: string[];
      talles?: string[];
    }[];
  };
  stats: {
    title: string;
    items: {
      value: string;
      label: string;
    }[];
  };
  events: {
    title: string;
    description: string;
    buttonText: string;
    buttonType?: string;
    buttonUrl?: string;
    images?: string[];
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    buttonType?: string;
    buttonUrl?: string;
  };
  testimonials: {
    title: string;
    items: {
      id?: string;
      name: string;
      text?: string;
      content?: string;
      role?: string;
      imagePath?: string;
      avatar?: string;
      bgImage?: string;
      rating?: number;
    }[];
  };
  location: {
    title: string;
    description: string;
    buttonText: string;
    buttonType?: string;
    buttonUrl?: string;
    mapEmbedUrl: string;
  };
  contact: {
    whatsapp: string;
    instagram: string;
    facebook: string;
  };
}