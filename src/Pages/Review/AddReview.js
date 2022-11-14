import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const { _id, serviceName, photoURL } = serviceDetails;

    const navigate = useNavigate();
    useTitle('Add Review');

    const handleReviews = event => {
        event.preventDefault();
        const form = event.target;

        const reviewerEmail = user?.email || 'unregistered';
        const reviewerName = user?.displayName || 'unregistered';
        const reviewerPhotoURL = user?.photoURL || "Can't get User Photo";

        const reviewerFeedback = form.review.value;
        const rating = form.rating2.value;

        const reviews = {
            service: _id,
            serviceName: serviceName,
            servicePhoto: photoURL,
            reviewerName: reviewerName,
            reviewerEmail: reviewerEmail,
            reviewerPhotoURL: reviewerPhotoURL,
            reviewerFeedback: reviewerFeedback,
            rating: rating
        }
        fetch('http://localhost:5000/addReviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Reviews Successfully Added')
                    form.reset();
                    navigate(`/service/${_id}`)
                }
            })
            .catch(error => console.error(error));

    }
    return (
        <div className='w-full mx-auto mb-12 lg:w-1/2 bg-base-200 rounded-xl md:w-2/3'>
            <h2 className='pt-10 text-3xl text-center text-blue-600'>Add your valuable feedback</h2>
            <form onSubmit={handleReviews} className='px-10 '>
                <textarea name="review" className="w-full h-32 mt-5 bg-white textarea textarea-ghost" placeholder="Add your review "></textarea>
                <div className="rating">
                    <span className='mr-2'>Give Rating:</span>
                    <input type="radio" name="rating2" value='1' className="bg-orange-400 mask mask-star-2" />
                    <input type="radio" name="rating2" value='2' className="bg-orange-400 mask mask-star-2" />
                    <input type="radio" name="rating2" value='3' className="bg-orange-400 mask mask-star-2" />
                    <input type="radio" name="rating2" value='4' className="bg-orange-400 mask mask-star-2" />
                    <input type="radio" name="rating2" value='5' className="bg-orange-400 mask mask-star-2" defaultChecked />
                </div>
                <div className="mt-3 text-xl card-actions">
                    <input type='submit' className='w-full bg-blue-600 btn' value='Add Review'></input>
                </div>
            </form>
        </div>
    );
};

export default AddReview;