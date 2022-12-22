import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Reviews from '../../MyReviews/Reviews';

const ServiceDetails = () => {
    const { user, loading } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const { _id, serviceName, serviceDescription, photoURL, price, rating } = serviceDetails;

    useTitle('Service Details');
    if (loading) {
        return <div className='flex items-center justify-center w-full h-96'>
            <button className="btn loading ">loading</button>
        </div>
    }
    return (
        <div className="mx-auto my-10 mb-5 shadow-xl lg:w-2/3 card card-compact bg-base-100 md:w-11/12 xs:w-11/12 sm:w-11/12">
            <figure>
                <PhotoProvider>
                    <PhotoView src={photoURL}>
                        <img className='w-full' src={photoURL} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="flex justify-center card-title">{serviceName}</h2>
                <p className='text-3xl text-justify'>{serviceDescription}</p>
                <div className='flex items-center justify-between text-xl'>
                    <p className=''>Price: ${price}</p>
                    <span className='flex items-center'><FaStar className='mr-2 text-orange-400'></FaStar> <span className='text-2xl'>{rating}</span></span>
                </div>                
            </div>
            <Reviews serviceDetails={serviceDetails}></Reviews>
            {
                user?.uid ?
                    <div className="text-xl card-actions">
                        <Link to={`/serviceReviews/${_id}`} className='w-2/3 mx-auto mb-4 bg-blue-600 btn'>Add Review</Link>
                    </div>
                    :
                    <div className="text-xl card-actions">
                        <Link to={`/serviceReviews/${_id}`} className='w-2/3 mx-auto mb-4 bg-blue-600 btn'>Please login to add a review</Link>
                    </div>                    
            }
        </div>
    );
};

export default ServiceDetails;