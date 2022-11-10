import React, { useContext, useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';


const Services = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext);
    useTitle('Services');

    console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => {
                
                return res.json()
            })
            .then(data => {
                setServices(data)
            })
            .catch(error => console.log(error))
    }, [loading])

    if (loading) {
        return <div className='flex items-center justify-center w-full h-96'>
            <button className="btn loading ">loading</button>
        </div>
    }
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