import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ShoppingCart, Sparkles } from 'lucide-react';
import SectionDivider from './SectionDivider';
import OrderModal from './OrderModal';
import { useRef, useState } from 'react';

// Import images
import miciChips from '../assets/Mici&chips 4pc.png';
import rusticBeefSoup from '../assets/Rustic Beef Soup.png';
import moldavianStew from '../assets/Moldavian Stew.png';
import chickenBurger from '../assets/Chicken Burger.png';

const Menu = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const menuCategories = {
    en: {
      featured: 'FEATURED',
      soups: 'SOUPS',
      salads: 'SALADS',
      sideSalads: 'SIDE SALADS',
      principal: 'MAIN DISHES',
    },
    ro: {
      featured: 'RECOMANDATE',
      soups: 'CIORBE',
      salads: 'SALATE',
      sideSalads: 'SALATE GARNITURĂ',
      principal: 'FELURI PRINCIPALE',
    },
  };

  const menuItems = [
    {
      category: 'featured',
      items: [
        { 
          name: 'Classic Cheese Doughnuts / Papanași smântână și dulceață', 
          price: '£9.90', 
          image: '🍩',
          popular: true,
          description: 'Traditional Moldovan cheese doughnuts served with sour cream and jam'
        },
        { 
          name: 'Mici & chips 4pcs / Mici cu cartofi prăjiți 4pcs', 
          price: '£8.90', 
          image: miciChips,
          imageType: 'photo',
          popular: true,
          description: 'Traditional Romanian grilled minced meat rolls served with chips'
        },
        { 
          name: 'Rustic Beef Soup / Ciorbă De Văcuţă', 
          price: '£11.50', 
          image: rusticBeefSoup,
          imageType: 'photo',
          popular: true,
          description: 'Beef soup is a tangy dish made from beef, vegetables, and spices, served hot with bread, sour cream and hot peppers'
        },
        { 
          name: 'Moldavian Stew / Tochitură Moldovenească', 
          price: '£13.90', 
          image: moldavianStew,
          imageType: 'photo',
          description: 'Moldavian stew with polenta and egg is a hearty dish with slow-cooked pork, rich flavors, and traditional sides'
        },
        { 
          name: 'Cabbage Rolls and Polenta / Sărmăluţe Cu Mămăligă', 
          price: '£11.90', 
          image: '🥬',
          popular: true,
          description: 'Stuffed cabbage rolls with polenta and sour cream are a traditional dish, rich in flavors and slow-cooked to perfection'
        },
      ],
    },
    {
      category: 'soups',
      items: [
        { 
          name: 'Beef Tripe Soup / Ciorbă De Burtǎ', 
          price: '£11.50', 
          image: '🍲',
          description: 'Tripe soup is a creamy dish made from beef tripe, enriched with sour cream and egg, served with bread, sourcream and hot peppers'
        },
        { 
          name: 'Rustic Beef Soup / Ciorbă De Văcuţă', 
          price: '£11.50', 
          image: rusticBeefSoup,
          imageType: 'photo',
          popular: true,
          description: 'Beef soup is a tangy dish made from beef, vegetables, and spices, served hot with bread, sour cream and hot peppers'
        },
        { 
          name: 'Smoked Pork with Bean Soup / Ciorbă De Fasole Cu Afumătură', 
          price: '£10.90', 
          image: '🍲',
          description: 'Bean soup with smoked meat is a tangy dish made with beans, smoked meat, and vegetables, served hot with red onion'
        },
      ],
    },
    {
      category: 'salads',
      items: [
        { 
          name: 'Greek Salad / Salată Grecească', 
          price: '£10.50', 
          image: '🥗',
          description: 'Greek salad is a fresh and flavorful dish made with tomatoes, cucumbers, olives, feta cheese, and a light dressing'
        },
        { 
          name: 'Bulgarian Salad / Salată Bulgărească', 
          price: '£9.50', 
          image: '🥗',
          description: 'Bulgarian salad is a fresh and flavorful dish made with tomatoes, cucumbers, peppers, cheese, ham, egg and a light dressing'
        },
        { 
          name: 'Caesar Salad / Salată Caesar', 
          price: '£12.90', 
          image: '🥗',
          description: 'Classic Caesar salad with crisp romaine lettuce, parmesan cheese, croutons and creamy Caesar dressing'
        },
      ],
    },
    {
      category: 'sideSalads',
      items: [
        { 
          name: 'Pickled Salad / Salată De Murături', 
          price: '£3.90', 
          image: '🥒',
          popular: true,
          description: 'The Pickled Salad is a refreshing and tangy mix of assorted pickled vegetables, perfect as a flavorful side dish'
        },
        { 
          name: 'Summer Salad / Salată De Crudități', 
          price: '£3.90', 
          image: '🥗',
          description: 'The Fresh Vegetable Salad is a light and refreshing mix of grated raw vegetables, offering a crisp and healthy taste'
        },
        { 
          name: 'Rainbow Cabbage Salad / Salată De Varză Curcubeu', 
          price: '£3.90', 
          image: '🥬',
          description: 'The Rainbow Cabbage Salad is a colorful and crunchy mix of fresh cabbage varieties, offering a vibrant and refreshing taste'
        },
        { 
          name: 'Roasted Pepper Salad / Salată ardei copți', 
          price: '£4.90', 
          image: '🌶️',
          description: 'The Roasted Pepper Salad is a flavorful and aromatic dish, made with grilled peppers, lightly marinated for a rich taste'
        },
        { 
          name: 'In House Made Coleslaw / Salată Coleslaw', 
          price: '£3.90', 
          image: '🥗',
          description: 'The Coleslaw Salad is a fresh and creamy mix of finely shredded cabbage, carrots, and a light dressing, perfect as a side dish'
        },
      ],
    },
    {
      category: 'principal',
      items: [
        { 
          name: 'Moldavian Stew / Tochitură Moldovenească', 
          price: '£13.90', 
          image: moldavianStew,
          imageType: 'photo',
          description: 'Moldavian stew with polenta and egg is a hearty dish with slow-cooked pork, rich flavors, and traditional sides'
        },
        { 
          name: 'Chicken Schnitzel and Mash / Șnițel de pui cu piure de cartofi', 
          price: '£13.90', 
          image: '🍗',
          description: 'Chicken schnitzel with mashed potatoes and bacon is a crispy and creamy dish, served hot with rich flavors'
        },
        { 
          name: 'Chicken Schnitzel Capresse / Șnițel de pui Capresse', 
          price: '£14.90', 
          image: '🍗',
          description: 'Chicken schnitzel with mozzarella on a salad bed is a crispy and creamy dish, combining rich flavors with freshness'
        },
        { 
          name: 'Cabbage Rolls and Polenta / Sărmăluţe Cu Mămăligă', 
          price: '£11.90', 
          image: '🥬',
          popular: true,
          description: 'Stuffed cabbage rolls with polenta and sour cream are a traditional dish, rich in flavors and slow-cooked to perfection'
        },
        { 
          name: 'Chicken Liver and Polenta / Ficǎței De Pui Cu Mamaliga', 
          price: '£10.90', 
          image: '🍗',
          description: 'Chicken livers with polenta is a hearty and flavorful dish, served hot for a rich and comforting taste'
        },
        { 
          name: 'Slow cooked pork collar / Ceafă porc la cuptor', 
          price: '£12.90', 
          image: '🍖',
          description: 'Oven-baked pork neck in beer sauce with roasted potatoes is a tender and flavorful dish, rich in aroma and taste'
        },
        { 
          name: 'Chicken Coqueletes & roasted potatoes / Pui Coquelet și cartofi copți', 
          price: '£16.90', 
          image: '🍗',
          description: 'Coquelet chicken with roasted potatoes, polenta, and garlic sauce is a savory dish, served hot with rich flavors'
        },
        { 
          name: 'Beans Stew & smoked sausages / Fasole cu carnati', 
          price: '£11.50', 
          image: '🍲',
          description: 'Beans with smoked meat and pickled salad is a hearty and flavorful dish, combining rich textures with a tangy touch'
        },
      ],
    },
  ];

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <section id="menu" className="section-padding bg-dark-bg relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-accent/2 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto container-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20 sm:mb-24"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-accent mx-auto mb-6 origin-center"
            />
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              {t.menu.title}
            </h2>
            <p className="text-xl sm:text-2xl text-white/60 mb-6 font-light">
              {t.menu.subtitle}
            </p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </motion.div>

          <div ref={ref} className="space-y-20 sm:space-y-24">
            {menuItems.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={categoryVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-12 text-accent tracking-wide">
                  {menuCategories[language]?.[category.category] || menuCategories.en[category.category]}
                </h3>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                >
                  {category.items.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group relative bg-dark-section rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 premium-shadow hover:premium-glow"
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Popular Badge */}
                      {item.popular && (
                        <div className="absolute top-4 right-4 z-20 bg-accent text-dark-bg px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Popular
                        </div>
                      )}
                      
                      {/* Image Area with Zoom Effect */}
                      <div className="relative aspect-square bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 overflow-hidden image-zoom-container">
                        {item.imageType === 'photo' ? (
                          <motion.img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover image-zoom"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            loading="lazy"
                          />
                        ) : (
                          <motion.div
                            className="w-full h-full flex items-center justify-center text-7xl sm:text-8xl image-zoom"
                            whileHover={{ scale: 1.15, rotate: 8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            {item.image}
                          </motion.div>
                        )}
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-section/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 sm:p-8">
                        <h4 className="text-xl sm:text-2xl font-serif font-bold mb-3 text-white leading-tight">
                          {item.name}
                        </h4>
                        
                        {item.description && (
                          <p className="text-white/60 text-sm mb-4 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                          <span className="text-2xl sm:text-3xl font-bold text-accent font-serif">
                            {item.price}
                          </span>
                        <motion.button
                          onClick={openOrderModal}
                          className="p-3 bg-accent text-dark-bg rounded-full hover:bg-accent/90 transition-colors group/btn button-glow-hover"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        </motion.button>
                        </div>
                      </div>
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
          ))}
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal isOpen={isOrderModalOpen} onClose={closeOrderModal} />
    </section>
    <SectionDivider />
    </>
  );
};

export default Menu;
