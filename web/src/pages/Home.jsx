import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Stethoscope, Clock, Heart, Star, Sparkles, ShieldCheck, Truck, Leaf, Play, CheckCircle } from 'lucide-react';
import FoodCarousel from '../components/FoodCarousel';
import MediaLogos from '../components/MediaLogos';
import RunningBanner from '../components/RunningBanner';
import { Star as StarIcon } from 'lucide-react'; // Renaming to avoid conflict if needed, though mostly using Lucide default

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
};

const Home = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={targetRef} className="overflow-x-hidden pt-[90px]">
            {/* Hero Section */}
            {/* Announcement Bar */}
            <div className="bg-simmer-purple text-white py-2 text-center border-b border-white/10 relative z-20">
                <p className="font-bold text-xs md:text-sm tracking-widest uppercase">
                    🇮🇳 INDIA'S FAVORITE DIET FOOD DELIVERY | GET 30% OFF YOUR 1ST MONTH 🇮🇳
                </p>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-start pt-10 pb-16 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-simmer-dark/95 via-simmer-dark/70 to-transparent"></div> {/* Gradient Overlay for text readability on left */}

                <div className="container relative z-10 px-4 text-left">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl space-y-6"
                    >
                        {/* Top Badge */}
                        <motion.div variants={fadeInUp} className="inline-block bg-simmer-yellow text-simmer-dark px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 shadow-lg border border-white/20">
                            🌍 GLOBAL FLAVORS, INDIAN SOUL
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none uppercase tracking-tighter drop-shadow-2xl">
                            World Class <br />
                            <span className="text-simmer-yellow">Diet Food.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-base md:text-xl text-white/90 font-medium max-w-xl leading-relaxed">
                            From <b>Creamy Italian Pasta</b> to <b>Homestyle Dal Makhani</b>. We deliver fresh, macro-calculated meals that make weight loss delicious.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to="/get-started" className="btn btn-primary px-8 py-4 text-lg shadow-xl shadow-simmer-orange/20 hover:shadow-simmer-orange/40 hover:-translate-y-1">
                                Order Trial Box
                            </Link>
                            <Link to="/menu" className="btn btn-accent px-8 py-4 text-lg bg-white/10 backdrop-blur-md border-2 border-simmer-yellow text-simmer-yellow hover:bg-simmer-yellow hover:text-simmer-dark">
                                View Weekly Menu
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Media Logos */}
            <MediaLogos />

            {/* How It Works */}
            <section className="py-16 bg-simmer-light">
                <div className="container text-center">
                    <h2 className="text-2xl md:text-4xl font-black text-simmer-orange mb-12 uppercase tracking-tight">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { title: "Choose Your Cuisine", icon: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png", desc: "Select from Indian, Italian, Continental, or Keto plans." },
                            { title: "Chefs Cook Fresh", icon: "https://cdn-icons-png.flaticon.com/512/1830/1830839.png", desc: "Our expert chefs prepare your meal with low oil and premium ingredients." },
                            { title: "Fast Delivery", icon: "https://cdn-icons-png.flaticon.com/512/706/706164.png", desc: "Hot meals delivered to your home or office in eco-friendly packaging." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-20 h-20 mb-4">
                                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain opacity-80" />
                                </div>
                                <h3 className="text-lg font-bold uppercase text-simmer-orange mb-2">{item.title}</h3>
                                <p className="text-simmer-dark max-w-xs mx-auto text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Running Text Banner */}
            <RunningBanner />

            {/* Trust / Satisfaction (Orange Section) */}
            <section className="py-16 bg-simmer-orange text-white">
                <div className="container text-center">
                    <h2 className="text-xl md:text-3xl font-bold uppercase tracking-widest mb-12 opacity-90">Healthy. Tasty. Sustainable.</h2>
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {[
                            { title: "Premium Ingredients", desc: "We use imported Italian durum wheat, authentic Indian spices, and farm-fresh veggies." },
                            { title: "Low Calorie, High Taste", desc: "Our chefs master the art of making low-calorie food taste like a cheat meal." },
                            { title: "Macro Balanced", desc: "Every meal is designed by nutritionists to help you hit your protein and fiber goals." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="w-14 h-14 rounded-full border-2 border-simmer-yellow flex items-center justify-center text-simmer-yellow mb-4">
                                    <CheckCircle size={28} />
                                </div>
                                <h3 className="text-lg font-black uppercase text-simmer-yellow mb-2">{item.title}</h3>
                                <p className="text-white/90 max-w-sm mx-auto text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <Link to="/get-started" className="btn btn-primary px-10 py-4 text-base shadow-xl shadow-black/20">Check Pincode Availability</Link>
                    </div>
                </div>
            </section>

            {/* Menu Preview Section */}
            <section className="py-16 bg-simmer-light">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-simmer-orange mb-12 uppercase">Global Menu Highlights</h2>

                    <div className="grid md:grid-cols-4 gap-6 mb-10">
                        {[
                            { img: "https://images.unsplash.com/photo-1628294895950-98052523e036?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "Paneer Tikka Masala Bowl", macros: "450 kcal • 25g Protein" },
                            { img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "Whole Wheat Pesto Pasta", macros: "380 kcal • 15g Protein" },
                            { img: "https://images.unsplash.com/photo-1606491956689-2ea28c674675?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "Chicken Biryani (Brown Rice)", macros: "500 kcal • 30g Protein" },
                            { img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", title: "Grilled Fish & Quinoa Salad", macros: "320 kcal • 28g Protein" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100"
                            >
                                <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-2 left-2 bg-simmer-yellow text-simmer-dark text-[10px] font-bold px-2 py-1 rounded">HEALTHY SWAP</div>
                                </div>
                                <h4 className="font-bold text-simmer-dark text-left leading-tight mb-2 text-sm">{item.title}</h4>
                                <p className="text-[10px] uppercase font-bold text-gray-500 text-left">{item.macros}</p>
                            </motion.div>
                        ))}
                    </div>
                    <Link to="/menu" className="btn btn-primary px-8 py-3">View Full Menu</Link>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-simmer-purple text-white relative overflow-hidden">
                <div className="container text-center relative z-10">
                    <div className="mb-10">
                        <h2 className="text-6xl font-black italic opacity-10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">LOVED</h2>
                        <h2 className="text-2xl md:text-3xl font-black uppercase mb-2 tracking-tight">Trusted by <span className="text-simmer-yellow">20,000+ Happy Eaters</span></h2>
                        <p className="text-white/70 text-sm">Real reviews from Mumbai, Delhi, and Bangalore.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { text: "I love the variety! One day I'm eating Dal Makhani, the next day it's Pesto Pasta. Never gets boring.", name: "Rahul Verma", loc: "Mumbai" },
                            { text: "Lost 5kgs in 2 months. The brown rice Biryani fits perfectly in my diet plan. Highly recommend!", name: "Priya Sharma", loc: "Bangalore" },
                            { text: "Quality ingredients and on-time delivery. It's the best investment for my health.", name: "Arjun Gupta", loc: "Delhi NCR" }
                        ].map((review, i) => (
                            <div key={i} className="bg-white text-simmer-dark p-6 rounded-2xl text-left relative">
                                <div className="flex gap-1 text-simmer-orange mb-3">
                                    <StarIcon size={14} fill="#0F766E" />
                                    <StarIcon size={14} fill="#0F766E" />
                                    <StarIcon size={14} fill="#0F766E" />
                                    <StarIcon size={14} fill="#0F766E" />
                                    <StarIcon size={14} fill="#0F766E" />
                                </div>
                                <p className="font-bold text-base mb-2">"Never gets boring!"</p>
                                <p className="text-gray-600 text-xs mb-4 leading-relaxed">"{review.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-simmer-yellow rounded-full flex items-center justify-center font-bold text-xs text-simmer-dark">{review.name[0]}</div>
                                    <div>
                                        <p className="font-bold text-xs">{review.name}</p>
                                        <p className="text-[10px] text-gray-500">{review.loc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <Link to="/experts" className="btn btn-primary px-10 py-3">Read All Reviews</Link>
                    </div>
                </div>
            </section>

            {/* Founders / Kitchen Story */}
            <section className="py-16 bg-simmer-orange text-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="rounded-2xl rotate-3 shadow-lg hover:rotate-0 transition-all duration-500" />
                                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="rounded-2xl -rotate-2 shadow-lg hover:rotate-0 transition-all duration-500 mt-8" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 leading-none">Global Inspiration <br /> Local Ingredients</h2>
                            <p className="text-base opacity-90 mb-4 leading-relaxed">
                                FitHer helps you enjoy the best of both worlds. We bring you international flavors cooked with fresh, locally sourced Indian ingredients.
                            </p>
                            <p className="text-base opacity-90 mb-6 leading-relaxed">
                                Whether it's Italian Pasta or Indian Curry, we ensure it's healthy, hygienic, and absolutely delicious.
                            </p>
                            <Link to="/get-started" className="btn btn-primary px-8 py-3">Our Story</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-simmer-yellow">
                <div className="container text-center max-w-2xl">
                    <h2 className="text-2xl font-black text-simmer-orange uppercase mb-2">JOIN THE FIT-FAMILY</h2>
                    <p className="text-simmer-dark font-medium mb-6 text-sm">Get exclusive Indian healthy recipes and 30% off your first subscription.</p>
                    <div className="bg-white p-2 rounded-full shadow-lg flex pl-6">
                        <input type="email" placeholder="Enter your mobile number" className="flex-grow bg-transparent outline-none text-simmer-dark font-medium text-sm" />
                        <button className="btn btn-primary rounded-full px-6 py-2 text-sm">Unlock Offer</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
