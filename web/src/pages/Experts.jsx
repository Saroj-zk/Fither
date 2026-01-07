import React from 'react';
import { Link } from 'react-router-dom';

const Experts = () => {
    return (
        <div className="pt-24 pb-12">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-simmer-orange">Meet Your Health Team</h1>
                    <p className="text-gray-600">FitHer isn't just about food. It's about holistic health. Your subscription includes <span className="font-bold text-simmer-orange">FREE</span> consultations with our certified experts.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Dietician */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center text-center md:text-left shadow-simmer-orange/5">
                        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 shrink-0">
                            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Doctor" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-simmer-dark">Dr. Anjali Sharma</h3>
                            <p className="text-simmer-orange font-medium mb-4">Senior Clinical Nutritionist</p>
                            <p className="text-simmer-dark/80 mb-6">Specializes in Indian metabolic health, diabetes reversal, and post-pregnancy weight loss.</p>
                            <Link to="/get-started" className="btn btn-accent text-sm px-6 py-2 shadow-none border border-simmer-orange bg-transparent text-simmer-orange hover:bg-simmer-orange hover:text-white">Book Consultation</Link>
                        </div>
                    </div>

                    {/* Gynaec */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center text-center md:text-left shadow-simmer-orange/5">
                        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 shrink-0">
                            <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Doctor" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-simmer-dark">Dr. Priya Patel</h3>
                            <p className="text-simmer-orange font-medium mb-4">Consultant Gynecologist</p>
                            <p className="text-simmer-dark/80 mb-6">Expert in PCOD/PCOS management, menstrual health, and fertility nutrition integration.</p>
                            <Link to="/get-started" className="btn btn-accent text-sm px-6 py-2 shadow-none border border-simmer-orange bg-transparent text-simmer-orange hover:bg-simmer-orange hover:text-white">Book Consultation</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experts;
