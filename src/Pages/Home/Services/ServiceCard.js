import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { _id, serviceName, serviceDescription, photoURL, price, rating } = service;
    return (
        <div className="shadow-xl card card-compact w-96 bg-base-100">
            <figure>
                <PhotoProvider>
                    <PhotoView src={photoURL}>
                        <img src={photoURL} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p className='Service_Description'>
                    {
                    serviceDescription.length > 100 ?
                        <>{serviceDescription.slice(0, 100) + '...'}</>
                            :
                        <>{serviceDescription}</>                    
                    }
                </p>
                <div className='flex items-center justify-between text-xl'>
                    <p className=''>Price: ${price}</p>
                    <span className='flex items-center'><FaStar className='mr-2 text-orange-400'></FaStar> <span className='text-2xl'>{rating}</span></span>
                </div>
                <div className="text-xl card-actions">
                    <Link to={`/service/${_id}`} className='w-full bg-blue-600 btn '>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;