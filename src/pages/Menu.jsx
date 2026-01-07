import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const menuItems = [
    { id: 1, name: "Paneer Tikka Quinoa Bowl", category: "Lunch", cals: 450, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Grilled Chicken & Palak", category: "Dinner", cals: 520, img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Masala Oats & Egg Whites", category: "Breakfast", cals: 380, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Ragi Dosa with Chutney", category: "Breakfast", cals: 290, img: "https://images.unsplash.com/photo-1589301760576-41f473911556?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, name: "Multigrain Roti & Dal", category: "Lunch", cals: 320, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Tofu Bhurji Salad", category: "Dinner", cals: 410, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const Menu = () => {
    const [filter, setFilter] = useState("All");

    const filteredItems = filter === "All" ? menuItems : menuItems.filter(item => item.category === filter);

    return (
        <div className="pt-24 pb-12">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Our Weekly Menu</h1>
                    <p className="text-gray-600">Freshly prepared, chef-curated meals for the week.</p>
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12">
                    {["All", "Breakfast", "Lunch", "Dinner"].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map(item => (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold">
                                    {item.cals} kcal
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">{item.category}</div>
                                <h3 className="text-xl font-bold mb-4">{item.name}</h3>
                                <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2">
                                    <Plus size={18} /> Add to Plan
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
