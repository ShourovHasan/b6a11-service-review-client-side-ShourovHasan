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
                <h1 className="my-5 text-5xl font-bold">Our Recently Added Services</h1>                
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