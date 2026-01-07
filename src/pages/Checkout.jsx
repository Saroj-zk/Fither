import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CreditCard, CheckCircle, MapPin, Truck } from 'lucide-react';

const Checkout = () => {
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [step, setStep] = useState(1);

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            navigate('/track-order');
        }, 2500);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-light">
            <div className="container max-w-4xl">
                <h1 className="text-3xl font-bold mb-8">Secure Checkout</h1>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Address Section */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <MapPin size={20} className="text-primary" /> Delivery Address
                            </h2>
                            <div className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-primary" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Phone" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-primary" />
                                    <input type="text" placeholder="Pincode" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-primary" />
                                </div>
                                <textarea placeholder="Complete Address (Tower, Flat No, Landmark)" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-primary h-24" />
                            </div>
                        </div>

                        {/* Payment Section */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <CreditCard size={20} className="text-primary" /> Payment Method
                            </h2>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 p-4 border border-primary/20 bg-primary/5 rounded-xl cursor-pointer transition-all">
                                    <input type="radio" name="payment" defaultChecked className="text-primary" />
                                    <span className="font-bold">UPI / GPay / PhonePe</span>
                                    <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Fastest</span>
                                </label>
                                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
                                    <input type="radio" name="payment" className="text-primary" />
                                    <span>Credit / Debit Card</span>
                                </label>
                                <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
                                    <input type="radio" name="payment" className="text-primary" />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
                        <h2 className="text-lg font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold text-dark">FitHer Essential Plan</p>
                                    <p className="text-sm text-gray-500">Weekly Subscription</p>
                                </div>
                                <p className="font-bold">₹2,499</p>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Delivery Charges</span>
                                <span className="text-green-600 font-bold">FREE</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Expert Consultation</span>
                                <span className="text-green-600 font-bold">FREE</span>
                            </div>
                        </div>
                        <div className="flex justify-between text-xl font-bold mb-8">
                            <span>Total</span>
                            <span>₹2,499</span>
                        </div>

                        <button
                            onClick={handlePayment}
                            disabled={isProcessing}
                            className={`btn btn-primary w-full py-4 text-lg ${isProcessing ? 'opacity-80 cursor-not-allowed' : ''}`}
                        >
                            {isProcessing ? 'Processing...' : 'Pay Securely'}
                        </button>
                        <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                            <CheckCircle size={12} /> SSL Encrypted Transaction
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
