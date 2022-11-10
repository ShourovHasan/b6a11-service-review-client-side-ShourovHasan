import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import login from '../../assets/images/login_register/login_Register.png';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import useTitle from '../../hooks/useTitle';
import toast from 'react-hot-toast';

const Login = () => {
    const { user, setUser, userLogin, loading, setLoading, googleSignIn, facebookSignIn } = useContext(AuthContext);

    const [error, setError] = useState(''); 

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useTitle('Login');

    // toast.error(error);

    const handleLogin = event => {
        event.preventDefault();
        // setLoading(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                
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
                        navigate(from, { replace: true });
                    })
                    .catch(error => console.error(error.message))
                navigate(from, { replace: true });
                // console.log(user);
                // console.log(currentUser);
                // window.location.reload(true);
                form.reset();
            })

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
                        navigate(from, { replace: true });
                    })
                    .catch(error => console.error(error.message))
                    navigate(from, { replace: true });
                    // window.location.reload(true);
                console.log(currentUser);
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
                        navigate(from, { replace: true });
                    })
                    .catch(error => console.error(error.message))
                navigate(from, { replace: true });
                // window.location.reload(true);
                console.log(currentUser);

            })
            .catch(error => {
                setError(error.message);
            })
        toast.error({error})
    }
    if ({error}) {
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
                    <img src={login} alt="" />
                </div>
                <div className="flex-shrink-0 w-1/2 max-w-sm py-5 shadow-2xl card bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                            
                        </div>
                        <div className="mt-2 form-control">
                            <input type="submit" className="text-white bg-red-500 btn btn-warning " value="Login" />
                        </div>
                        <p className="text-red-600 text-center">
                            {error}
                        </p>
                    </form>
                    <div className='mx-auto mb-2'>
                        <p>Or Sign In with</p>
                        <div className='flex items-center justify-center mt-3'>
                            <button onClick={handleGoogleSignIn} className='mr-4 text-xl text-blue-600 border-none btn btn-circle bg-slate-100'><FaGoogle></FaGoogle></button>
                            <button onClick={handleFacebookSignIn} className='text-xl text-blue-600 border-none btn btn-circle bg-slate-100'><FaFacebookF></FaFacebookF></button>
                            
                        </div>
                    </div>
                    <p className='text-center'>New to Dentistry Services? <Link to='/register' className='font-bold text-red-500'> Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;