import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services3 = () => {
    const [services3, setServices3] = useState([]);

    // console.log(services3);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-shourovhasan.vercel.app/recentServices')
            .then(res => res.json())
            .then(data => {
                setServices3(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='my-20'>
            <div className='text-center'>
                <h1 className="my-5 text-5xl font-bold">Our Recently Added Services</h1>
            </div>
            <div className='flex justify-center mx-auto my-12'>
                <div className='grid w-11/12 grid-cols-1 mx-auto md:grid-cols-2 xl:grid-cols-3 lg:gap-7 md:gap-3'>
                    {
                        services3.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
            <div className='text-center'>
                <Link to='/services' className='text-red-500 btn btn-outline'>See all Services</Link>
            </div>
        </div>
    );
};

export default Services3;