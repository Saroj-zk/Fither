import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Stethoscope, Clock, Heart, Star, Sparkles, ShieldCheck, Truck, Leaf, Play } from 'lucide-react';
import FoodCarousel from '../components/FoodCarousel';

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
        <div ref={targetRef} className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-[60%] h-[90%] bg-gradient-to-bl from-orange-50 to-pink-50 rounded-bl-[300px] -z-20 opacity-70" />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                        filter: ["blur(40px)", "blur(60px)", "blur(40px)"]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-multiply -z-10"
                />

                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        <motion.div
                            style={{ y: heroTextY }}
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="space-y-6 md:space-y-8 text-center lg:text-left z-10"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full text-sm font-bold text-primary shadow-sm mx-auto lg:mx-0">
                                <Sparkles size={16} />
                                <span>#1 Trusted Health Kitchen</span>
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark leading-[1.1] tracking-tight">
                                Meals Like Home, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                                    Nutrition by Experts.
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Experience the <b>freshest meal</b> of your day. We start cooking <b>only after you order</b>—ensuring 100% healthy, preservative-free food delivered right on time.
                            </motion.p>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                                <Link to="/get-started" className="btn btn-primary px-8 py-4 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-1 transition-all flex items-center justify-center">
                                    Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link to="/menu" className="btn btn-secondary px-8 py-4 text-lg flex items-center justify-center group">
                                    <Play size={18} className="mr-2 fill-current group-hover:text-white transition-colors" /> View Menu
                                </Link>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="pt-8 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-gray-500 font-medium border-t border-gray-100 mt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center"><div className="w-2 h-2 bg-green-500 rounded-full" /></div>
                                    Specialized Women's Care
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center"><div className="w-2 h-2 bg-blue-500 rounded-full" /></div>
                                    Fitness Plans for Everyone
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Interactive Hero Image -> Food Carousel */}
                        <motion.div
                            style={{ y: heroImageY }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative mx-auto max-w-[500px] lg:max-w-none w-full"
                        >
                            <FoodCarousel />

                            {/* Floating Interactive Elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute cursor-pointer top-8 -left-4 lg:-left-12 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 hover:scale-105 transition-transform"
                            >
                                <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                                    <Star size={20} fill="currentColor" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark text-sm">Top Rated</h4>
                                    <p className="text-xs text-gray-500">by 10,000+ Users</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute cursor-pointer bottom-12 -right-4 lg:-right-8 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-4 hover:scale-105 transition-transform"
                            >
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark text-sm">100% Natural</h4>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">No Preservatives</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quality Promise - Grid Layout Fixed */}
            <section className="py-20 bg-white">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Quality Promise</h2>
                        <p className="text-gray-600 text-lg">Uncompromising quality. Here is why FitHer lies at the heart of health.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Leaf size={32} />,
                                title: "Healthy & Natural",
                                desc: "No artificial colors, no preservatives. Just pure, farm-fresh ingredients.",
                                color: "bg-green-50 text-green-600 border-green-100"
                            },
                            {
                                icon: <Truck size={32} />,
                                title: "On-Time Delivery",
                                desc: "Our logistics ensure your meal arrives piping hot, exactly when you need it.",
                                color: "bg-blue-50 text-blue-600 border-blue-100"
                            },
                            {
                                icon: <ChefHat size={32} />,
                                title: "Made Fresh",
                                desc: "We start chopping and cooking only after your order is confirmed.",
                                color: "bg-orange-50 text-orange-600 border-orange-100"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`bg-white p-8 rounded-2xl border ${item.color} border-opacity-50 shadow-sm hover:shadow-xl transition-all duration-300`}
                            >
                                <div className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-dark">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ecosystem/Features Section - Improved Image Fit */}
            <section className="py-20 bg-gray-50 overflow-hidden">
                <div className="container px-4">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                    More Than Just <br />
                                    <span className="text-primary">Healthy Food.</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    We build a complete ecosystem around your well-being. From expert medical advice to adaptive nutrition.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors cursor-default"
                                >
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Stethoscope size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Free Expert Consultations</h4>
                                        <p className="text-gray-600 text-sm">Access to top Dieticians & Gynecologists included.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors cursor-default"
                                >
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Flexible Schedules</h4>
                                        <p className="text-gray-600 text-sm">Pause, skip, or swap meals instantly via our app.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] w-full"
                        >
                            <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] rotate-6 transform origin-bottom-right" />
                            <img
                                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Healthy Lifestyle"
                                className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl hover:rotate-0 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
