import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ChefHat, Truck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
    { icon: <CheckCircle size={20} />, label: "Order Confirmed", time: "10:30 AM" },
    { icon: <ChefHat size={20} />, label: "Preparing Fresh", time: "10:45 AM" },
    { icon: <Truck size={20} />, label: "Out for Delivery", time: "11:20 AM" },
    { icon: <MapPin size={20} />, label: "Delivered", time: "Expected 12:00 PM" }
];

const OrderTracking = () => {
    // Determine simulate progress
    const [progress, setProgress] = useState(1);

    useEffect(() => {
        // Simulate progress updates
        const timer = setTimeout(() => {
            setProgress(2); // Move to 'Out for Delivery' after 2 seconds for demo
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-12 bg-light">
            <div className="container max-w-2xl">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center mb-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <CheckCircle size={40} />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Order #FH8992 Placed!</h1>
                    <p className="text-gray-600">Thank you for choosing health. Your meal is being prepared.</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-8">Live Status</h2>
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-8 left-6 md:left-[2.1rem] bottom-8 w-0.5 bg-gray-100 -z-10" />

                        <div className="space-y-10">
                            {steps.map((step, idx) => {
                                const isCompleted = idx <= progress;
                                const isCurrent = idx === progress;

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.2 }}
                                        className={`flex gap-6 items-start ${isCompleted ? 'opacity-100' : 'opacity-40 grayscale'}`}
                                    >
                                        <div className={`
                                            w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-sm transition-colors duration-500
                                            ${isCurrent ? 'bg-primary text-white scale-110 ring-4 ring-primary/20' : isCompleted ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400'}
                                        `}>
                                            {step.icon}
                                        </div>
                                        <div className="pt-2">
                                            <h4 className={`text-lg font-bold ${isCurrent ? 'text-primary' : 'text-dark'}`}>{step.label}</h4>
                                            <p className="text-sm text-gray-500">{step.time}</p>
                                            {isCurrent && idx === 1 && (
                                                <p className="text-sm text-primary font-medium mt-1 animate-pulse">Cooking fresh... 🥘</p>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                        <Link to="/" className="btn btn-secondary w-full">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
