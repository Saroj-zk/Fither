import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const foodItems = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Superfood Salad",
        desc: "High protein, zero preservative"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Keto Paneer Thali",
        desc: "Low carb, homestyle taste"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Wholesome Bowl",
        desc: "Balanced nutrition & fiber"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Protein Smoothies",
        desc: "Fresh fruits, no added sugar"
    }
];

const FoodCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % foodItems.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
            <AnimatePresence mode="popLayout">
                <motion.img
                    key={currentIndex}
                    src={foodItems[currentIndex].image}
                    alt={foodItems[currentIndex].title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Text Overlay */}
            <motion.div
                key={`text-${currentIndex}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-8 left-8 text-white z-10"
            >
                <div className="bg-simmer-orange/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold inline-block mb-2 text-simmer-yellow uppercase tracking-wider">
                    Our Menu Highlights
                </div>
                <h3 className="text-3xl font-bold">{foodItems[currentIndex].title}</h3>
                <p className="text-gray-200">{foodItems[currentIndex].desc}</p>
            </motion.div>
        </div>
    );
};

export default FoodCarousel;
