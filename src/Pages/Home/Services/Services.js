import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='my-20'>
            <div className='flex justify-center my-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Services;