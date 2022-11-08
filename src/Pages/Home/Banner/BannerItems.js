import React from 'react';
import './BannerItems.css';

const BannerItems = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousel_img w-full h-96'>
                <img src={image} alt='Banner' className="w-full" />
            </div>
            <div className="absolute flex justify-end flex-col transform -translate-y-1/2 left-24 top-1/2">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    & Budget Friendly<br />
                    Dentistry Services
                </h1>
                <p className='text-white w-1/2 my-7 text-xl'>We offer a wide range of dental services, from preventative care to more complex procedures. We focus on providing quality care and maintaining a high standard of oral health for our patients.</p>              
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle ml-5">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;