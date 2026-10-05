import { useState } from 'react';

import NavbarT1 from './components/NavbarT1';
import HeroT1 from './components/HeroT1';
import NosotrosT1 from './components/NosotrosT1';
import MenuT1 from './components/MenuT1';
import StatsT1 from './components/StatsT1';
import TestimonialsT1 from './components/TestimonialsT1';
import LocationT1 from './components/LocationT1';
import FooterT1 from './components/FooterT1';
import CartDrawer from './components/CartDrawer'; 

import { configT1 } from '../../config/dataT1'; 

export default function Template1() {
  
  // ESTADO GLOBAL DEL CARRITO
  const [cart, setCart] = useState<any[]>([]);

  // Función para sumar productos
  const addToCart = (product: any) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Función para sumar o restar cantidades desde el menú o el drawer
  const updateQuantity = (id: string, amount: number) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null; 
        }
        return item;
      }).filter(item => item !== null); 
    });
  };

  const paleta = {
    fondoPrincipal: "#0A0A0A",
    fondoSecundario: "#111111",
    fondoCajas: "#111111",
    colorPrimario: configT1?.identidad?.colorPrincipal || "#F59E0B",
    fondoBoton: "#FFFFFF",
    textoBoton: "#000000",
    textoPrimario: "#FFFFFF",
    textoSecundario: "#A3A3A3",
  };

  return (
    <main 
      className="w-full max-w-[100vw] min-h-screen font-sans overflow-x-hidden relative"
      style={{ backgroundColor: paleta.fondoPrincipal }}
    >
      <NavbarT1 data={configT1} paleta={paleta} />
      <HeroT1 data={configT1} paleta={paleta} />
      <NosotrosT1 data={configT1} paleta={paleta} />
      
      {/* Le pasamos el carrito y las funciones de control al Menú */}
      <MenuT1 data={configT1} paleta={paleta} cart={cart} addToCart={addToCart} updateQuantity={updateQuantity} />
      
      <StatsT1 data={configT1} paleta={paleta} />
      <TestimonialsT1 data={configT1} paleta={paleta} />
      <LocationT1 data={configT1} paleta={paleta} />
      <FooterT1 data={configT1} paleta={paleta} />

      {/* Checkout Inteligente */}
      <CartDrawer data={configT1} paleta={paleta} cart={cart} updateQuantity={updateQuantity} />
    </main>
  );
}