import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const Reviews = ({ serviceDetails }) => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    // const { _id } = serviceDetails;
    // console.log(reviews);
    // setLoading(false);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${serviceDetails?._id}`)
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