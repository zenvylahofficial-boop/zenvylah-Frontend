// // import React, { useEffect, useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Link } from 'react-router-dom';
// // import { ArrowRight, Star, Truck, ShieldCheck, Clock } from 'lucide-react';
// // import { productService } from '../services/productService';
// // import { ProductCard } from '../components/ui/ProductCard';
// // import { Button } from '../components/ui/Button';
// // import banner from "../assets/banner.jpg";
// // import hero from "../assets/logo.png";
// // export const Home = () => {
// //   const [heroImages, setHeroImages] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [products, setProducts] = useState([]);
// //   const [currentHero, setCurrentHero] = useState(0);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const [images, cats, prods] = await Promise.all([
// //         productService.getHeroImages(),
// //         productService.getCategories(),
// //         productService.getProducts()
// //       ]);
// //       setHeroImages(images);
// //       setCategories(cats);
// //       setProducts(prods.slice(0, 8)); // Top 8 featured
// //     };
// //     fetchData();
// //   }, []);

// //   // Auto-slide hero
// //   useEffect(() => {
// //     if (heroImages.length === 0) return;
// //     const interval = setInterval(() => {
// //       setCurrentHero((prev) => (prev + 1) % heroImages.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [heroImages]);

// //   return (
// //     <div className="min-h-screen bg-white-bg">
// //       {/* ================= MOBILE HERO ================= */}
// // {/* Added mt-[68px] to explicitly push the banner down past the sticky navbar height */}
// // <section className="w-full md:hidden relative mt-[68px]">
// //   <div>
// //     {/* Relative container spans 100% width */}
// //     <div className="relative w-full block">

// //       {/* Full Banner */}
// //       <Link to="/shop" className="w-full block">
// //         <img
// //           src={banner}
// //           alt="ZENVYLAH Clothing"
// //           className="w-full h-auto block shadow-xl"
// //         />
// //       </Link>

// //       {/* Overlay Button - Anchored correctly underneath the text decoration ornament */}
// //       <Link 
// //         to="/shop" 
// //         className="absolute bottom-[6%] left-[30%] -translate-x-1/2 z-10"
// //       >
// //         <button className="px-4 py-1.5 text-[11px] bg-dark-maroon text-white rounded-md font-semibold shadow-md hover:bg-opacity-90 transition-all whitespace-nowrap">
// //           Shop Now
// //         </button>
// //       </Link>

// //     </div>
// //   </div>
// // </section>

// // {/* ================= DESKTOP HERO ================= */}
// // {/* Removed py-20 to eliminate the top and bottom cream gaps */}
// // <section className="hidden md:block w-full relative">
// //   {/* Removed container and px-4 to make the content stretch edge-to-edge */}
// //   <div className="relative w-full block">

// //     {/* Full Banner - Changed max-w-5xl to w-full */}
// //     <img
// //       src={hero}
// //       alt="ZENVYLAH Clothing"
// //       className="w-full h-auto block"
// //     />

// //     {/* Overlay Buttons - Positioned relative to the full-bleed image layout */}
// //     <div className="absolute bottom-[10%] left-[34%] -translate-x-1/2 flex gap-4 z-10">
// //       <Link to="/shop">
// //         <button className="btn-primary whitespace-nowrap">
// //           Shop Now
// //         </button>
// //       </Link>

// //       <Link to="/category/women">
// //         <button className="btn-secondary whitespace-nowrap">
// //           Explore Collection
// //         </button>
// //       </Link>
// //     </div>

// //   </div>
// // </section>

// //       {/* Trending Categories */}
// //       <section className="py-24 bg-white-bg">
// //         <div className="container mx-auto px-4">
// //           <div className="flex justify-between items-end mb-12">
// //             <div>
// //               <h2 className="text-4xl font-serif text-dark-maroon mb-2">Trending Categories</h2>
// //               <p className="text-muted-maroon">Discover what's hot right now</p>
// //             </div>
// //             <Link to="/shop" className="hidden md:flex items-center text-maroon-light font-medium hover:text-maroon-light transition-colors">
// //               View All <ArrowRight size={20} className="ml-2" />
// //             </Link>
// //           </div>

// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
// //             {categories.map((cat, index) => (
// //               <motion.div
// //                 key={cat.id}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.1, duration: 0.5 }}
// //               >
// //                 <Link to={`/category/${cat.slug}`} className="group block text-center">
// //                   <div className="relative aspect-square overflow-hidden rounded-full bg-cream-beige/30 mb-4 p-2 border-2 border-transparent group-hover:border-maroon-light transition-all duration-300">
// //                     <img
// //                       src={cat.image}
// //                       alt={cat.name}
// //                       className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
// //                     />
// //                   </div>
// //                   <h3 className="font-serif text-lg text-dark-maroon group-hover:text-maroon-light transition-colors">{cat.name}</h3>
// //                 </Link>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Latest Arrivals */}
// //       <section className="py-24 bg-white-bg">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-serif text-dark-maroon mb-4">Latest Arrivals</h2>
// //             <p className="text-muted-maroon max-w-2xl mx-auto">Explore our newest additions and fresh styles.</p>
// //           </div>

// //           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
// //             {products.map(product => (
// //               <ProductCard key={`latest-${product.id}`} product={product} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Popular Collection */}
// //       <section className="py-24 bg-cream-beige/10">
// //         <div className="container mx-auto px-4">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-serif text-dark-maroon mb-4">Popular Collection</h2>
// //             <p className="text-muted-maroon max-w-2xl mx-auto">Handpicked styles combining elegance, comfort, and the latest trends.</p>
// //           </div>

// //           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
// //             {products.map(product => (
// //               <ProductCard key={product.id} product={product} />
// //             ))}
// //           </div>

// //           <div className="text-center mt-12">
// //             <Link to="/shop">
// //               <Button variant="outline" size="lg">View All Products</Button>
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose Us */}
// //       <section className="py-24 bg-white-bg relative overflow-hidden">
// //   {/* Decorative Background */}
// //   <div className="absolute inset-0 opacity-40">
// //     <div className="absolute top-0 left-0 w-72 h-72 bg-cream-beige rounded-full blur-3xl"></div>
// //     <div className="absolute bottom-0 right-0 w-72 h-72 bg-border-beige rounded-full blur-3xl"></div>
// //   </div>

// //   <div className="container mx-auto px-4 relative z-10">
// //     {/* Heading */}
// //     <div className="text-center mb-16">
// //       <h2 className="text-4xl md:text-5xl font-bold text-dark-maroon mb-4">
// //         Why Choose ZENVYLAH Clothing
// //       </h2>

// //       <p className="text-muted-maroon text-lg max-w-2xl mx-auto">
// //         Trending fashion at affordable range for your complete family.
// //       </p>
// //     </div>

// //     {/* Cards */}
// //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

// //       {/* Card 1 */}
// //       <div className="card-soft hover-lift p-8 text-center">
// //         <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-maroon flex items-center justify-center">
// //           <Star size={40} className="text-white-bg" />
// //         </div>

// //         <h3 className="text-2xl font-bold text-dark-maroon mb-4">
// //           Premium Quality
// //         </h3>

// //         <p className="text-muted-maroon leading-relaxed">
// //           Handpicked fabrics and flawless stitching for elegant comfort.
// //         </p>
// //       </div>

// //       {/* Card 2 */}
// //       <div className="card-soft hover-lift p-8 text-center">
// //         <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-maroon flex items-center justify-center">
// //           <Truck size={40} className="text-white-bg" />
// //         </div>

// //         <h3 className="text-2xl font-bold text-dark-maroon mb-4">
// //           Fast Delivery
// //         </h3>

// //         <p className="text-muted-maroon leading-relaxed">
// //           Reliable doorstep delivery with smooth shopping experience.
// //         </p>
// //       </div>

// //       {/* Card 3 */}
// //       <div className="card-soft hover-lift p-8 text-center">
// //         <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-maroon flex items-center justify-center">
// //           <ShieldCheck size={40} className="text-white-bg" />
// //         </div>

// //         <h3 className="text-2xl font-bold text-dark-maroon mb-4">
// //           Secure Payments
// //         </h3>

// //         <p className="text-muted-maroon leading-relaxed">
// //           Safe and trusted payment methods for worry-free checkout.
// //         </p>
// //       </div>

// //       {/* Card 4 */}
// //       <div className="card-soft hover-lift p-8 text-center">
// //         <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-maroon flex items-center justify-center">
// //           <Clock size={40} className="text-white-bg" />
// //         </div>

// //         <h3 className="text-2xl font-bold text-dark-maroon mb-4">
// //           Open 365 Days
// //         </h3>

// //         <p className="text-muted-maroon leading-relaxed">
// //           Always open to serve your family fashion shopping needs.
// //         </p>
// //       </div>

// //     </div>
// //   </div>
// // </section>
// //     </div>
// //   );
// // };
// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Star, Truck, ShieldCheck, Clock } from 'lucide-react';
// import { productService } from '../services/productService';
// import { ProductCard } from '../components/ui/ProductCard';
// import { Button } from '../components/ui/Button';
// import banner from "../assets/banner.jpg";
// import hero from "../assets/logo.png";

// export const Home = () => {
//   const [heroImages, setHeroImages] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [currentHero, setCurrentHero] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const [images, cats, prods] = await Promise.all([
//         productService.getHeroImages(),
//         productService.getCategories(),
//         productService.getProducts()
//       ]);
//       setHeroImages(images);
//       setCategories(cats);
//       setProducts(prods.slice(0, 8)); // Top 8 featured
//     };
//     fetchData();
//   }, []);

//   // Auto-slide hero
//   useEffect(() => {
//     if (heroImages.length === 0) return;
//     const interval = setInterval(() => {
//       setCurrentHero((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [heroImages]);

//   return (
//     <div className="min-h-screen bg-white-bg">
//       {/* ================= MOBILE HERO ================= */}
//       <section className="w-full md:hidden relative mt-[104px] bg-dark-maroon">
//   <div className="bg-white"> {/* Keeps the rest of the page layout standard */}
//     <div className="relative w-full block">
//       {/* Full Banner */}
//       <Link to="/shop" className="w-full block">
//         <img
//           src={banner}
//           alt="ZENVYLAH Clothing"
//           className="w-full h-auto block shadow-xl"
//         />
//       </Link>

//       {/* Overlay Button */}
//       <Link 
//         to="/shop" 
//         className="absolute bottom-[6%] left-[30%] -translate-x-1/2 z-10"
//       >
//         <button className="px-4 py-1.5 text-[11px] bg-dark-maroon text-white rounded-md font-semibold shadow-md hover:bg-opacity-90 transition-all whitespace-nowrap">
//           Shop Now
//         </button>
//       </Link>
//     </div>
//   </div>
// </section>

//       {/* ================= DESKTOP HERO ================= */}
//       <section className="hidden md:block w-full relative pt-24">
//   <div className="relative w-full block">
//     {/* Full Banner */}
//     <img
//       src={hero}
//       alt="ZENVYLAH Clothing"
//       className="w-full h-auto block"
//     />

//     {/* Overlay Buttons */}
//     <div className="absolute bottom-[10%] left-[34%] -translate-x-1/2 flex gap-4 z-10 mt-1">
//       <Link to="/shop">
//         <button className="btn-primary whitespace-nowrap">
//           Shop Now
//         </button>
//       </Link>

//       <Link to="/category/women">
//         <button className="btn-secondary whitespace-nowrap">
//           Explore Collection
//         </button>
//       </Link>
//     </div>
//   </div>
// </section>

//       {/* ================= TRENDING CATEGORIES ================= */}
//       {/* CHANGED: Adjusted from py-24 to pt-10 pb-20 to pull header up close to the hero banner */}
//       <section className="pt-10 pb-20 bg-white-bg">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-end mb-12">
//             <div>
//               <h2 className="text-4xl font-serif text-dark-maroon mb-2">Trending Categories</h2>
//               <p className="text-muted-maroon">Discover what's hot right now</p>
//             </div>
//             <Link to="/shop" className="hidden md:flex items-center text-maroon-light font-medium hover:text-maroon-light transition-colors">
//               View All <ArrowRight size={20} className="ml-2" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
//             {categories.map((cat, index) => (
//               <motion.div
//                 key={cat.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//               >
//                 <Link to={`/category/${cat.slug}`} className="group block text-center">
//                   <div className="relative aspect-square overflow-hidden rounded-full bg-cream-beige/30 mb-4 p-2 border-2 border-transparent group-hover:border-maroon-light transition-all duration-300">
//                     <img
//                       src={cat.image}
//                       alt={cat.name}
//                       className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
//                     />
//                   </div>
//                   <h3 className="font-serif text-lg text-dark-maroon group-hover:text-maroon-light transition-colors">{cat.name}</h3>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Latest Arrivals */}
//       <section className="py-24 bg-white-bg">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-serif text-dark-maroon mb-4">Latest Arrivals</h2>
//             <p className="text-muted-maroon max-w-2xl mx-auto">Explore our newest additions and fresh styles.</p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
//             {products.map(product => (
//               <ProductCard key={`latest-${product.id}`} product={product} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Popular Collection */}
//       <section className="py-24 bg-cream-beige/10">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-serif text-dark-maroon mb-4">Popular Collection</h2>
//             <p className="text-muted-maroon max-w-2xl mx-auto">Handpicked styles combining elegance, comfort, and the latest trends.</p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
//             {products.map(product => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link to="/shop">
//               <Button variant="outline" size="lg">View All Products</Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-24 bg-white-bg relative overflow-hidden">
//         <div className="absolute inset-0 opacity-40">
//           <div className="absolute top-0 left-0 w-72 h-72 bg-cream-beige rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-72 h-72 bg-border-beige rounded-full blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-dark-maroon mb-4">
//               Why Choose ZENVYLAH Clothing
//             </h2>
//             <p className="text-muted-maroon text-lg max-w-2xl mx-auto">
//               Trending fashion at affordable range for your complete family.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="card-soft hover-lift p-8 text-center">
//               <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-maroon flex items-center justify-center">
//                 <Star size={40} className="text-white-bg" />
//               </div>
//               <h3 className="text-2xl font-bold text-dark-maroon mb-4">Premium Quality</h3>
//               <p className="text-muted-maroon leading-relaxed">Handpicked fabrics and flawless stitching for elegant comfort.</p>
//             </div>

//             <div className="card-soft hover-lift p-8 text-center">
//               <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-maroon flex items-center justify-center">
//                 <Truck size={40} className="text-white-bg" />
//               </div>
//               <h3 className="text-2xl font-bold text-dark-maroon mb-4">Fast Delivery</h3>
//               <p className="text-muted-maroon leading-relaxed">Reliable doorstep delivery with smooth shopping experience.</p>
//             </div>

//             <div className="card-soft hover-lift p-8 text-center">
//               <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-maroon flex items-center justify-center">
//                 <ShieldCheck size={40} className="text-white-bg" />
//               </div>
//               <h3 className="text-2xl font-bold text-dark-maroon mb-4">Secure Payments</h3>
//               <p className="text-muted-maroon leading-relaxed">Safe and trusted payment methods for worry-free checkout.</p>
//             </div>

//             <div className="card-soft hover-lift p-8 text-center">
//               <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-maroon flex items-center justify-center">
//                 <Clock size={40} className="text-white-bg" />
//               </div>
//               <h3 className="text-2xl font-bold text-dark-maroon mb-4">Open 365 Days</h3>
//               <p className="text-muted-maroon leading-relaxed">Always open to serve your family fashion shopping needs.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, ShieldCheck, Clock } from 'lucide-react';
import { productService } from '../services/productService';
import { ProductCard } from '../components/ui/ProductCard';
import { Button } from '../components/ui/Button';

import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const defaultHeroImages = [hero1, hero2, hero3];

const getHeroImageUrl = (item) => {
  if (!item) return '';
  const imgStr = typeof item === 'string' ? item : (item.image || '');
  if (!imgStr) return '';
  if (imgStr.startsWith('http://') || imgStr.startsWith('https://') || imgStr.startsWith('data:')) {
    return imgStr;
  }
  const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
  return `${apiBase.replace(/\/$/, '')}${imgStr.startsWith('/') ? '' : '/'}${imgStr}`;
};

export const Home = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Derive active carousel images from backend hero images, falling back to local defaults
  const activeHeroImages = (heroImages && heroImages.length > 0)
    ? heroImages.map(getHeroImageUrl).filter(Boolean)
    : defaultHeroImages;

  useEffect(() => {
    if (activeHeroImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeHeroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [activeHeroImages.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [images, cats, latest, popular] = await Promise.all([
          productService.getHeroImages(),
          productService.getCategories(),
          productService.getProductsByTag('latest').catch(() => []),
          productService.getProductsByTag('popular').catch(() => [])
        ]);
        if (Array.isArray(images) && images.length > 0) {
          setHeroImages(images);
        }
        setCategories(Array.isArray(cats) ? cats : []);
        setLatestProducts(Array.isArray(latest) ? latest.slice(0, 8) : []);
        setPopularProducts(Array.isArray(popular) ? popular.slice(0, 8) : []);
      } catch (err) {
        console.warn("Could not load homepage data:", err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white-bg flex flex-col">
      {/* ================= HERO CAROUSEL ================= */}
      <section className="w-full relative mt-[68px] md:mt-20 overflow-hidden h-[75vh] md:h-[85vh]">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide % activeHeroImages.length}
            src={activeHeroImages[currentSlide % activeHeroImages.length]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover object-top"
            alt="ZENVYLAH Premium Essentials"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-dark-maroon/30 hidden md:block" />
        <div className="absolute inset-0 bg-dark-maroon/40 block md:hidden" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h4 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-maroon-light tracking-[0.2em] text-xs md:text-sm uppercase font-semibold mb-4 drop-shadow-md"
          >
            ZENVYLAH CLOTHING
          </motion.h4>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white-bg text-4xl md:text-6xl font-serif mb-6 leading-tight max-w-4xl drop-shadow-lg"
          >
            Premium Essentials.<br/>Designed for Every Day.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-cream-beige text-sm md:text-lg mb-10 max-w-xl mx-auto font-light drop-shadow-md"
          >
            Premium unisex T-shirts crafted for comfort, confidence and effortless everyday style.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/shop" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-maroon-light text-dark-maroon hover:bg-white hover:text-dark-maroon border-none shadow-xl px-10 py-3 rounded-none uppercase tracking-wider text-xs md:text-sm transition-all duration-300 font-semibold cursor-pointer">
                Shop Collection
              </button>
            </Link>
            <Link to="/category/women" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-dark-maroon/40 backdrop-blur-sm text-white-bg border-white-bg/60 hover:bg-white hover:text-dark-maroon border px-10 py-3 rounded-none uppercase tracking-wider text-xs md:text-sm transition-all duration-300 font-semibold cursor-pointer">
                Explore Zenvylah
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Slide Indicator Dots */}
        {activeHeroImages.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
            {activeHeroImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide % activeHeroImages.length === idx
                    ? 'w-8 bg-white shadow'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* ================= TRENDING CATEGORIES ================= */}
      <section className="py-8 md:py-14 bg-white-bg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-6 md:mb-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-serif text-dark-maroon mb-1">Trending Categories</h2>
              <p className="text-xs md:text-sm text-muted-maroon">Discover what's hot right now</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-maroon-light font-medium hover:text-maroon-light transition-colors">
              View All <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link to={`/category/${cat.slug}`} className="group block text-center">
                  <div className="relative aspect-square overflow-hidden rounded-full bg-cream-beige/30 mb-2 p-1.5 border border-transparent group-hover:border-maroon-light transition-all duration-300 max-w-[140px] mx-auto">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-sm md:text-base text-dark-maroon group-hover:text-maroon-light transition-colors truncate">{cat.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LATEST ARRIVALS ================= */}
      <section className="py-8 md:py-14 bg-white-bg border-t border-cream-beige/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-serif text-dark-maroon mb-1">Latest Arrivals</h2>
            <p className="text-xs md:text-sm text-muted-maroon max-w-2xl mx-auto">Explore our newest additions and fresh styles.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {latestProducts.length > 0 ? (
              latestProducts.map(product => (
                <ProductCard key={`latest-${product.id}`} product={product} />
              ))
            ) : (
              <p className="text-muted-maroon col-span-full text-center">No latest arrivals yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* ================= POPULAR COLLECTION ================= */}
      <section className="py-8 md:py-14 bg-cream-beige/10 border-t border-b border-cream-beige/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-serif text-dark-maroon mb-1">Popular Collection</h2>
            <p className="text-xs md:text-sm text-muted-maroon max-w-2xl mx-auto">Handpicked styles combining elegance, comfort, and trends.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {popularProducts.length > 0 ? (
              popularProducts.map(product => (
                <ProductCard key={`popular-${product.id}`} product={product} />
              ))
            ) : (
              <p className="text-muted-maroon col-span-full text-center">No popular items found.</p>
            )}
          </div>

          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="outline" size="sm" className="md:size-lg">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-8 md:py-14 bg-white-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 left-0 w-48 h-48 bg-cream-beige rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-border-beige rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-serif text-dark-maroon mb-1">
              Why Choose ZENVYLAH Clothing
            </h2>
            <p className="text-xs md:text-sm text-muted-maroon max-w-2xl mx-auto">
              Trending fashion at affordable range for your complete family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="card-soft hover-lift p-5 md:p-6 text-center bg-white rounded-xl shadow-sm border border-cream-beige/30">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-dark-maroon flex items-center justify-center">
                <Star className="text-white-bg w-6 md:w-8 h-6 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark-maroon mb-2">Premium Quality</h3>
              <p className="text-xs md:text-sm text-muted-maroon leading-relaxed">Handpicked fabrics and flawless stitching for elegant comfort.</p>
            </div>

            <div className="card-soft hover-lift p-5 md:p-6 text-center bg-white rounded-xl shadow-sm border border-cream-beige/30">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-dark-maroon flex items-center justify-center">
                <Truck className="text-white-bg w-6 md:w-8 h-6 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark-maroon mb-2">Fast Delivery</h3>
              <p className="text-xs md:text-sm text-muted-maroon leading-relaxed">Reliable doorstep delivery with smooth shopping experience.</p>
            </div>

            <div className="card-soft hover-lift p-5 md:p-6 text-center bg-white rounded-xl shadow-sm border border-cream-beige/30">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-dark-maroon flex items-center justify-center">
                <ShieldCheck className="text-white-bg w-6 md:w-8 h-6 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark-maroon mb-2">Secure Payments</h3>
              <p className="text-xs md:text-sm text-muted-maroon leading-relaxed">Safe and trusted payment methods for worry-free checkout.</p>
            </div>

            <div className="card-soft hover-lift p-5 md:p-6 text-center bg-white rounded-xl shadow-sm border border-cream-beige/30">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-dark-maroon flex items-center justify-center">
                <Clock className="text-white-bg w-6 md:w-8 h-6 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-dark-maroon mb-2">Open 365 Days</h3>
              <p className="text-xs md:text-sm text-muted-maroon leading-relaxed">Always open to serve your family fashion shopping needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
