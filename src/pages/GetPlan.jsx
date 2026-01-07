import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

const questions = [
    {
        id: 'goal',
        title: "What is your primary goal?",
        options: ["Weight Loss", "Muscle Gain", "PCOD/F Management", "Post-Pregnancy Recovery", "Diabetes Management"]
    },
    {
        id: 'diet',
        title: "Dietary Preference",
        options: ["Vegetarian", "Non-Vegetarian", "Eggetarian", "Jain (No Onion/Garlic)"]
    },
    {
        id: 'meals',
        title: "Which meals do you need?",
        options: ["Lunch & Dinner", "All 3 Meals + Snack", "Lunch Only", "Dinner + Salad"]
    }
];

const PlanCard = ({ title, calories, price, features, onSelect }) => (
    <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{calories} kcal / day</p>
        <div className="text-3xl font-bold text-primary mb-6">₹{price}<span className="text-sm text-gray-400 font-normal">/week</span></div>
        <ul className="space-y-3 mb-8">
            {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-secondary" /> {f}
                </li>
            ))}
        </ul>
        <button onClick={onSelect} className="btn btn-primary w-full">Select Plan</button>
    </div>
);

const GetPlan = () => {
    const navigate = useNavigate();
    // ... rest of component
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    const handleOptionSelect = (option) => {
        setAnswers({ ...answers, [questions[step].id]: option });
    };

    const nextStep = () => {
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    const prevStep = () => {
        if (step > 0) setStep(step - 1);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-light">
            <div className="container max-w-3xl">
                {!showResult ? (
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-100 h-2 rounded-full mb-8">
                            <div
                                className="bg-primary h-full rounded-full transition-all duration-500"
                                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                            />
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="min-h-[300px] flex flex-col justify-center"
                            >
                                <div className="mb-2 uppercase tracking-wide text-xs font-bold text-gray-400">Step {step + 1} of {questions.length}</div>
                                <h2 className="text-3xl font-bold mb-8 text-dark">{questions[step].title}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {questions[step].options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleOptionSelect(option)}
                                            className={`p-6 rounded-xl text-left font-semibold transition-all duration-200 border-2 ${answers[questions[step].id] === option
                                                ? 'border-primary bg-primary/5 text-primary'
                                                : 'border-transparent bg-gray-50 hover:bg-gray-100 text-dark'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-between mt-8 pt-8 border-t">
                            <button
                                onClick={prevStep}
                                disabled={step === 0}
                                className={`btn text-gray-500 hover:text-dark px-0 ${step === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                            >
                                <ChevronLeft className="mr-2" /> Back
                            </button>
                            <button
                                onClick={nextStep}
                                disabled={!answers[questions[step].id]}
                                className="btn btn-primary"
                            >
                                {step === questions.length - 1 ? 'Unlock Plan' : 'Next'} <ChevronRight className="ml-2" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Your Custom Indie-Plan</h2>
                            <p className="text-gray-600">Tailored for: <span className="font-bold text-dark">{answers.goal}</span> • <span className="font-bold text-dark">{answers.diet}</span></p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <PlanCard
                                title="FitHer Essential"
                                calories="1200-1400"
                                price="2,499"
                                features={[
                                    "Lunch & Dinner (Homestyle Meals)",
                                    "FREE Dietician Consult (1/mo)",
                                    "Custom Indian Menu",
                                    "WhatsApp Support"
                                ]}
                                onSelect={() => navigate('/checkout')}
                            />
                            <PlanCard
                                title="FitHer Pro"
                                calories="1300-1500"
                                price="3,999"
                                features={[
                                    "3 Meals + Evening Snack",
                                    "FREE Bi-Weekly Dietician Consult",
                                    "FREE Gynaecologist Consult (1/mo)",
                                    "Exotic & Desi Fusion Meals"
                                ]}
                                onSelect={() => navigate('/checkout')}
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default GetPlan;
