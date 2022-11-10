import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddServices = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
        const email = form.email.value;
        const rating = form.rating2.value;
        const description = form.description.value;
        console.log(serviceName, photoURL, price, email, rating, description);

        const service = {
            serviceName,
            photoURL,
            price,
            email,
            rating,
            serviceDescription: description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Ordered Successfully')                    
                    form.reset();
                    navigate('/services')
                }
            })
            .catch(error => console.error(error));        
    }

    return (
        <div className='my-10'>
            <form onSubmit={handleAddService} className='p-10 bg-base-200 rounded-xl'>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                    <input type="text" name="serviceName" placeholder="Service Name" className="w-full bg-white input input-ghost" required/>
                    <input type="text" name="photoURL" placeholder="photoURL" className="w-full bg-white input input-ghost" required />
                    <input type="text" name="price" placeholder="Price" className="w-full bg-white input input-ghost" required />
                    <input type="text" name="email" placeholder="Your Email" className="w-full bg-white input input-ghost" defaultValue={user?.email} required />
                    <div className="rating">
                        <span className='mr-2'>Rating:</span>
                        <input type="radio" name="rating2" value='1' className="bg-orange-400 mask mask-star-2" />
                        <input type="radio" name="rating2" value='2' className="bg-orange-400 mask mask-star-2" />
                        <input type="radio" name="rating2" value='3' className="bg-orange-400 mask mask-star-2" />
                        <input type="radio" name="rating2" value='4' className="bg-orange-400 mask mask-star-2" />
                        <input type="radio" name="rating2" value='5' className="bg-orange-400 mask mask-star-2" defaultChecked />
                    </div>
                </div>
                <textarea name="description" className="w-full h-32 mt-5 bg-white textarea textarea-ghost" placeholder="Service Description" required></textarea>
                <button className='w-full my-5 text-white bg-red-500 border-none btn'>Add Service</button>
            </form>
        </div>
    );
};

export default AddServices;