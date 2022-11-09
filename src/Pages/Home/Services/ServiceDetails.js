import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const { _id, serviceName, serviceDescription, photoURL, price, rating } = serviceDetails;
    return (
        <div className="w-2/3 mx-auto shadow-xl card card-compact bg-base-100">
            <figure>
                <PhotoProvider>
                    <PhotoView src={photoURL}>
                        <img className='w-full' src={photoURL} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="flex justify-center card-title">{serviceName}</h2>
                <p className='Service_Description'>{serviceDescription}</p>
                <div className='flex items-center justify-between text-xl'>
                    <p className=''>Price: ${price}</p>
                    <span className='flex items-center'><FaStar className='mr-2 text-orange-400'></FaStar> <span className='text-2xl'>{rating}</span></span>
                </div>
                <div className="text-xl card-actions">
                    <Link to={`/service/${_id}`} className='w-full bg-blue-600 btn '>Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;