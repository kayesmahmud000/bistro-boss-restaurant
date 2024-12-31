import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({image, title , subtitle}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div
                className="hero h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-white bg-black bg-opacity-40 px-52 py-16  text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
                        <p className="mb-5">
                           {subtitle}
                        </p>
                       
                    </div>
                </div>
            </div>
    </Parallax>
        
    );
};

export default Cover;