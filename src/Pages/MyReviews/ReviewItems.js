import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItems = ({ review, setReviews, handleDelete }) => {
    const { _id, service, serviceName, servicePhoto, reviewerName, reviewerEmail, reviewerPhotoURL, reviewerFeedback, rating } = review;
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="m-0 text-xl text-red-500 btn btn-outline">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 h-24 rounded">
                            {
                                servicePhoto ?
                                    <img src={servicePhoto} alt="Avatar" />
                                    :
                                    <></>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">Rating: <span className='text-red-500'>{rating}</span></div>
                    </div>
                </div>
            </td>
            <td>
                {/* {serviceName} */}
                <br />
                <span className="badge badge-ghost badge-sm">{reviewerFeedback}</span>
            </td>
            <td>
                <Link to={`/updateReviews/${_id}`} className="text-orange-400 btn btn-outline btn-primary">Edit</Link>
            </td>
        </tr>
    );
};

export default ReviewItems;