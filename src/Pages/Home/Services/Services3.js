import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services3 = () => {
    const [services3, setServices3] = useState([]);

    console.log(services3);
    useEffect(() => {
        fetch('http://localhost:5000/recentServices')
            .then(res => res.json())
            .then(data => {
                setServices3(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='my-20'>
            <div className='text-center'>
                <p className='mb-5 text-xl font-bold text-red-500'>Service</p>
                <h1 className="my-5 text-5xl font-bold">Our Service Area</h1>
                <div className='w-full'>
                    <p className='w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
            </div>
            <div className='flex justify-center my-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
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