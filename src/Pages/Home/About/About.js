import React from 'react';
import img1 from '../../../../src/assets/images/banner/1.jpg';
import img2 from '../../../../src/assets/images/banner/2.jpg';

const About = () => {
    return (
        <div className="mb-32 hero">
            <div className="flex-col-reverse mx-auto hero-content lg:flex-row-reverse">
                <div className='relative w-11/12 mx-auto lg:w-1/2'>
                    <img src={img1} className="w-4/5 h-full rounded-lg shadow-2xl" alt="" />
                    <img src={img2} className="absolute w-3/5 border-8 border-white rounded-full shadow-2xl right-5 top-1/2" alt="" />
                </div>
                <div className='w-11/12 mx-auto lg:w-1/2'>
                    <h1 className="mb-10 text-5xl font-bold">
                        No More <br />
                        Dental Problem <br />
                        No More Pain
                    </h1>
                    <p className="pt-7">
                        We offer a variety of dental services at an affordable price. Services include teeth cleaning, fillings, extractions, crowns, bridges, dentures, and more.
                    </p>
                    <p className="pt-5 pb-7">
                         We accept most dental insurance plans and offer financing options to help make dental care more affordable.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;