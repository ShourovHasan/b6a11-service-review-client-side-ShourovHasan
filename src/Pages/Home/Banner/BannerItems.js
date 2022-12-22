import React from 'react';
import './BannerItems.css';

const BannerItems = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="relative w-full carousel-item ">
            <div className='w-full carousel_img'>
                <img src={image} alt='Banner' className="w-full h-[600px]" />
            </div>
            <div className="absolute flex flex-col justify-end transform -translate-y-1/2 lg:left-24 md:left-20 top-1/2 left-5">
                <h1 className='text-3xl font-bold text-white lg:text-6xl md:text-5xl'>
                    Affordable <br />
                    & Budget Friendly<br />
                    Dentistry Services
                </h1>
                <p className='w-1/2 text-lg text-white lg:text-xl my-7'>We offer a wide range of dental services, from preventative care to more complex procedures. We focus on providing quality care and maintaining a high standard of oral health for our patients.</p>              
            </div>
            <div className="absolute bottom-0 flex justify-end transform -translate-y-1/2 left-5 right-5">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="ml-5 btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;