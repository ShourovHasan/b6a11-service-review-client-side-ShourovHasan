import React from 'react';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';

const CheckupAndHealthy = () => {
    return (
        <div className="mb-20 hero">
            <div className="flex-col hero-content lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={img3} className="w-4/5 h-full rounded-lg shadow-2xl" alt="" />
                    <img src={img4} className="absolute w-3/5 border-8 border-white rounded-lg shadow-2xl right-5 top-1/2" alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">
                        Qualified Staff<br />
                        Better experiences<br />
                        Make life healthy
                    </h1>
                    <p className="pt-7">
                        We offer the best dental services because we have the best qualified staff. All of our staff members are highly trained and experienced in the field of dentistry. 
                    </p>
                    <p className="pt-5 pb-7">
                        They are also able to offer the latest in dental technology and procedures. This means that our patients can expect to receive the highest level of care possible.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CheckupAndHealthy;