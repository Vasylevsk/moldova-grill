import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'MOLDOVA GRILL',
      subtitle: 'Authentic Moldovan & Romanian Cuisine | Traditional Dishes & Modern European Flavors',
      cta: 'Menu',
      order: 'Delivery',
    },
    orderModal: {
      title: 'Order Now',
      subtitle: 'Choose your preferred delivery platform',
      ubereats: 'UberEats',
      ubereatsDesc: 'Order via UberEats',
      deliveroo: 'Deliveroo',
      deliverooDesc: 'Order via Deliveroo',
    },
    about: {
      title: 'About Us',
      p1: 'Welcome to Moldova Grill Restaurant, where we bring you the authentic flavors of Moldova and Romania. We are dedicated to serving traditional dishes made with the finest ingredients and time-honored recipes.',
      p2: 'Try our popular Moldavian Stew, Cabbage Rolls with Polenta, and our signature Mici with chips.',
      p3: 'Experience the rich culinary heritage of Eastern Europe right here in Chertsey.',
    },
    menu: {
      title: 'Our Menu',
      subtitle: 'Handcrafted with care, served with excellence',
      items: {
        breakfast: {
          name: 'Moldavian Stew',
          description: 'Traditional Moldavian stew with polenta and egg - a hearty dish with slow-cooked pork and rich flavors.',
          price: '£13.90',
        },
        burger: {
          name: 'Mici & Chips',
          description: 'Traditional Romanian grilled minced meat rolls served with chips - a customer favorite.',
          price: '£8.90',
        },
        beverages: {
          name: 'Fine Beverages',
          description: 'Selection of premium beverages to complement your meal perfectly.',
          price: 'From £3.50',
        },
      },
      orderNow: 'Order Now',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'See what our customers are enjoying',
    },
    footer: {
      address: '4, Burwood Parade, Guildford St, Chertsey KT16 9AE',
      phone: '07557 252595',
      hours: 'Friday: 14:00 - 22:30\nSaturday - Sunday: 13:00 - 23:00\nMonday, Wednesday - Thursday: 14:00 - 22:00\nTuesday: Closed',
      hoursTime: '',
      ubereats: 'UberEats',
      deliveroo: 'Deliveroo',
      tripadvisor: 'TripAdvisor',
      googlemaps: 'Google Maps',
      rights: 'All rights reserved.',
    },
  },
  ro: {
    nav: {
      home: 'Acasă',
      about: 'Despre',
      menu: 'Meniu',
      gallery: 'Galerie',
      contact: 'Contact',
    },
    hero: {
      title: 'MOLDOVA GRILL',
      subtitle: 'Bucătărie Autentică Moldovenească & Românească | Preparate Tradiționale & Arome Europene Moderne',
      cta: 'Meniu',
      order: 'Livrare',
    },
    orderModal: {
      title: 'Comandă Acum',
      subtitle: 'Alege platforma de livrare preferată',
      ubereats: 'UberEats',
      ubereatsDesc: 'Comandă prin UberEats',
      deliveroo: 'Deliveroo',
      deliverooDesc: 'Comandă prin Deliveroo',
    },
    about: {
      title: 'Despre Noi',
      p1: 'Bun venit la Moldova Grill Restaurant, unde vă aducem aromele autentice ale Moldovei și României. Suntem dedicați să vă servim preparate tradiționale făcute cu cele mai bune ingrediente și rețete consacrate.',
      p2: 'Încercați populara noastră Tochitură Moldovenească, Sărmăluțe cu Mămăligă și Mici noștri cu cartofi prăjiți.',
      p3: 'Experimentați moștenirea culinară bogată a Europei de Est chiar aici în Chertsey.',
    },
    menu: {
      title: 'Meniu',
      subtitle: 'Pregătit cu grijă, servit cu excelență',
      items: {
        breakfast: {
          name: 'Tochitură Moldovenească',
          description: 'Tochitură tradițională moldovenească cu mămăligă și ou - un preparat consistent cu carne de porc gătită lent și arome bogate.',
          price: '£13.90',
        },
        burger: {
          name: 'Mici cu Cartofi',
          description: 'Mici tradiționali românești la grătar servite cu cartofi prăjiți - favoritul clienților.',
          price: '£8.90',
        },
        beverages: {
          name: 'Băuturi Fine',
          description: 'Selecție de băuturi premium pentru a vă completa perfect masa.',
          price: 'De la £3.50',
        },
      },
      orderNow: 'Comandă Acum',
    },
    gallery: {
      title: 'Galerie',
      subtitle: 'Vedeți ce savurează clienții noștri',
    },
    footer: {
      address: '4, Burwood Parade, Guildford St, Chertsey KT16 9AE',
      phone: '07557 252595',
      hours: 'Vineri: 14:00 - 22:30\nSâmbătă - Duminică: 13:00 - 23:00\nLuni, Miercuri - Joi: 14:00 - 22:00\nMarți: Închis',
      hoursTime: '',
      ubereats: 'UberEats',
      deliveroo: 'Deliveroo',
      tripadvisor: 'TripAdvisor',
      googlemaps: 'Google Maps',
      rights: 'Toate drepturile rezervate.',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ro' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
