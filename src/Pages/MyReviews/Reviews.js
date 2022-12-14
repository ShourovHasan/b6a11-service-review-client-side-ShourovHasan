import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const Reviews = ({ serviceDetails }) => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-shourovhasan.vercel.app/reviews?service=${serviceDetails?._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error))
    }, [serviceDetails?._id])

    return (
        <div className='mb-10'>
            {
                reviews.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                ></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;