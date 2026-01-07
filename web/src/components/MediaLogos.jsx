import React from 'react';

const MediaLogos = () => {
    const logos = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/The_Times_logo_2022.svg/2560px-The_Times_logo_2022.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Forbes_logo.svg/2560px-Forbes_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/BBC_Logo_2021.svg/1200px-BBC_Logo_2021.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/2560px-CNBC_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/The_Guardian_2018.svg/2560px-The_Guardian_2018.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Financial_Times_Logo.svg/2560px-Financial_Times_Logo.svg.png"
    ];

    return (
        <section className="bg-[#E6BEAA] py-8 overflow-hidden">
            <div className="container">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt="Media Logo" className="h-6 md:h-8 object-contain mix-blend-multiply" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaLogos;
