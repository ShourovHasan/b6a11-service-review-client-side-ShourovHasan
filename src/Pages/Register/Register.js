import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import signup from '../../assets/images/login_register/login_Register.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { user, setUser, setLoading, loading, createUser, updateUserProfile, googleSignIn, facebookSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    let location = useLocation();
    useTitle('Register');


    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                handleUpdateUserProfile(name, photoURL);
                console.log(user);
                form.reset();
                // window.location.reload(true);
                const currentUser = {
                    email: user.email
                }
                // get jwt token 
                fetch('https://b6a11-service-review-server-side-shourovhasan.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('dentistry-Token', data.token);
                    })
                    .catch(error => console.error(error.message))
                // navigate('/');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = event => {
        event.preventDefault();

        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);

                const currentUser = {
                    email: user.email
                }
                // get jwt token 
                fetch('https://b6a11-service-review-server-side-shourovhasan.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('dentistry-Token', data.token);
                    })
                    .catch(error => console.error(error.message))
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleFacebookSignIn = event => {
        event.preventDefault();

        facebookSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);

                const currentUser = {
                    email: user.email
                }
                // get jwt token 
                fetch('https://b6a11-service-review-server-side-shourovhasan.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('dentistry-Token', data.token);
                    })
                    .catch(error => console.error(error.message))

            })
            .catch(error => {
                setError(error.message);
            })
    }
    if ({ error }) {
        setLoading(false);
    }
    else if (loading) {
        return <div className='flex items-center justify-center w-full h-96'>
            <button className="btn loading ">loading</button>
        </div>
    }
    return (
        <div className="my-20 hero">
            <div className="flex-col gap-20 hero-content lg:flex-row">
                <div className="w-1/2 text-center lg:text-left">
                    <img src={signup} alt="" />
                </div>
                <div className="flex-shrink-0 w-1/2 max-w-sm py-5 shadow-2xl card bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                        </div>
                        <div className="mt-6 form-control">
                            <input type="submit" className="text-white bg-red-500 btn btn-warning " value="Sign Up" />
                        </div>
                        <div className="text-red-600">
                            {error}
                        </div>
                    </form>
                    <div className='mx-auto mb-2'>
                        <p>Or Sign Up with</p>
                        <div className='flex items-center justify-center mt-3'>
                            <button onClick={handleGoogleSignIn} className='mr-4 text-xl text-blue-600 border-none btn btn-circle bg-slate-100'><FaGoogle></FaGoogle></button>
                            <button onClick={handleFacebookSignIn} className='text-xl text-blue-600 border-none btn btn-circle bg-slate-100'><FaFacebookF></FaFacebookF></button>

                        </div>
                    </div>
                    <p className='text-center'>Already have an account? <Link to='/login' className='font-bold text-red-500'> Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;