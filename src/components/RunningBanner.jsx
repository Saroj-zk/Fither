import React from 'react';

const RunningBanner = () => {
    return (
        <div className="bg-simmer-yellow py-3 overflow-hidden whitespace-nowrap border-y-2 border-simmer-dark">
            <div className="animate-marquee inline-block">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-sm font-bold uppercase tracking-widest text-simmer-dark mx-4">
                        DELICIOUS DIY 🌮 HIGH PROTEIN 💪 NUTRIENT DENSE 🥦 GLOBAL CUISINES 🌎 HEAT & EAT 🥘
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RunningBanner;
