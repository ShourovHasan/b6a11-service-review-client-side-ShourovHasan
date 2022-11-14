import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const UpdateReviews = () => {
    const { user } = useContext(AuthContext);
    useTitle('Update Review');

    const updateReviews = useLoaderData();
    const [uReviews, setUReviews] = useState(updateReviews);
    const { reviewerFeedback } = uReviews;
    const navigate = useNavigate();

    console.log(uReviews);

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...uReviews };
        newReview[field] = value;
        setUReviews(newReview);
        console.log(newReview);
    }

    const handleUpdateReviews = event => {
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/updateReviews/${updateReviews._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(uReviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review updated successfully!')
                    console.log(data);
                    navigate('/myReviews');
                }

            })
    }
    return (
        <div className='w-full mx-auto mb-12 lg:w-1/2 bg-base-200 rounded-xl md:w-2/3'>
            <h2 className='pt-10 text-3xl text-center text-blue-600'>Update your valuable feedback</h2>
            <form onSubmit={handleUpdateReviews} className='px-10 '>
                <textarea onBlur={handleInputChange} name="reviewerFeedback" className="w-full h-32 mt-5 bg-white textarea textarea-ghost" placeholder="Add your review" defaultValue={reviewerFeedback}></textarea>
                <div className="rating">
                    <span className='mr-2'>Give Rating:</span>
                    <input onBlur={handleInputChange} type="radio" name="rating" value='1' className="bg-orange-400 mask mask-star-2" />
                    <input onBlur={handleInputChange} type="radio" name="rating" value='2' className="bg-orange-400 mask mask-star-2" />
                    <input onBlur={handleInputChange} type="radio" name="rating" value='3' className="bg-orange-400 mask mask-star-2" />
                    <input onBlur={handleInputChange} type="radio" name="rating" value='4' className="bg-orange-400 mask mask-star-2" />
                    <input onBlur={handleInputChange} type="radio" name="rating" value='5' className="bg-orange-400 mask mask-star-2" defaultChecked />
                </div>
                <div className="mt-3 text-xl card-actions">
                    <input type='submit' className='w-full bg-blue-600 btn' defaultValue='Update Review'></input>
                </div>
            </form>
        </div>
    );
};

export default UpdateReviews;