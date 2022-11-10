import React, { useContext } from 'react';
import { FaStar, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewCard = ({ review }) => {
    const { user } = useContext(AuthContext);
    const { _id, service, serviceName, servicePhoto, reviewerName, reviewerEmail, reviewerPhotoURL, reviewerFeedback, rating } = review;
    // console.log(review);
    return (
        <div className="w-2/3 mx-auto shadow-xl card bg-base-100 border mb-2">
            <div className="flex ml-4 mt-4 items-center">
                <div className="mr-1">
                    {
                        reviewerPhotoURL ?
                            <div>
                                <img src={reviewerPhotoURL} className='w-10 rounded-full' alt='' />
                            </div>
                            :
                            <>
                                <FaUser className='w-10 rounded-full'></FaUser>
                            </>
                    }
                </div>
                <div>
                    <h3>{reviewerName}</h3>
                    <h4 className='flex items-center'><FaStar className='text-orange-600 mr-1'></FaStar> <span>{rating}</span></h4>
                </div>              
                
            </div>
            <div className="card-body">
                <p>{reviewerFeedback}</p>
            </div>
        </div>
    );
};

export default ReviewCard;