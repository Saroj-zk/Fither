import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-simmer-dark text-white py-12">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-heading font-black text-simmer-yellow mb-4">FITHER</h2>
                        <p className="text-gray-400 max-w-sm">
                            Empowering women through nutrition. Freshly cooked, delivered daily, and backed by medical experts.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 font-heading uppercase text-simmer-orange">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-simmer-yellow transition-colors">Home</a></li>
                            <li><a href="/menu" className="hover:text-simmer-yellow transition-colors">Menu</a></li>
                            <li><a href="/plans" className="hover:text-simmer-yellow transition-colors">Plans</a></li>
                            <li><a href="/experts" className="hover:text-simmer-yellow transition-colors">Experts</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 font-heading uppercase text-simmer-orange">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>support@fither.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
                    © 2026 FitHer Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
