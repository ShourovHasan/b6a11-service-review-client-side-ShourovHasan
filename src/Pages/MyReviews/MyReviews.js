import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewItems from './ReviewItems';

const MyReviews = () => {
    const { user, reviews, setReviews, logOut } = useContext(AuthContext);    
    useTitle('My Reviews');

    // setLoading(false);
    useEffect(() => {
        fetch(`http://localhost:5000/reviewsByEmail?reviewerEmail=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('dentistry-Token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => setReviews(data))
            .catch(error => console.error(error))
    }, [user?.email, setReviews, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this order?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',                
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                        toast.success('Item is successfully deleted.')
                    }
                })
                .catch(error => console.error(error))
        }
    }


    
    return (
        <div className='mb-10'>
            {/* <h2>You have Order: {orders.length}</h2> */}
            {
                reviews.length > 0 ?
                    <div className="w-full overflow-x-auto">
                        <table className="table w-full table-zebra">
                            <thead>
                                <tr className=''>
                                    <th className='text-center'>
                                        Delete
                                    </th>
                                    <th className='flex justify-center'>Services</th>
                                    <th className='text-center'>Review</th>
                                    <th className='text-center'>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(review => <ReviewItems
                                        key={review._id}
                                        review={review}
                                        setReviews={setReviews}
                                        handleDelete={handleDelete}
                                    ></ReviewItems>)
                                }
                            </tbody>

                        </table>
                    </div>
                    :
                    <div className='flex items-center justify-center text-5xl h-52'>
                        <h2>No reviews were added</h2>                        
                    </div>
            }
        </div>
    );
};

export default MyReviews;