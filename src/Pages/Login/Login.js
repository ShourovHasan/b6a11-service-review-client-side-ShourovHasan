import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import login from '../../assets/images/login_register/login_Register.png';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import useTitle from '../../hooks/useTitle';
import toast from 'react-hot-toast';

const Login = () => {
    const { setUser, userLogin, loading, setLoading, googleSignIn, facebookSignIn } = useContext(AuthContext);

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
        // console.log(email, password);
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
                        // console.log(data);
                        localStorage.setItem('dentistry-Token', data.token);
                        toast.success('Successfully Login');
                        navigate(from, { replace: true });
                    })
                    .catch(error => console.error(error.message))
                // navigate(from, { replace: true });
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
                // console.log(user);

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
                        // console.log(data);
                        localStorage.setItem('dentistry-Token', data.token);
                        toast.success('Successfully Login');
                        navigate(from, { replace: true });
                    })
                    .catch(error => console.error(error.message))
                // navigate(from, { replace: true });
                // window.location.reload(true);
                // console.log(currentUser);
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
                // console.log(user);

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
                        // console.log(data);
                        localStorage.setItem('dentistry-Token', data.token);
                        toast.success('Successfully Login');
                        navigate(from, { replace: true });
                    })
                    .catch(error => console.error(error.message))
                // navigate(from, { replace: true });
                // window.location.reload(true);
                // console.log(currentUser);

            })
            .catch(error => {
                setError(error.message);
            })
        toast.error({ error })
    }
    if (error) {
        setLoading(false);
    }
    else if (loading) {
        return <div className='flex items-center justify-center w-full h-96'>
            <button className="btn loading ">loading</button>
        </div>
    }
    return (
        <div className="w-11/12 mx-auto my-20 hero">
            <div className="flex-col gap-20 hero-content lg:flex-row md:flex-row">
                <div className="text-center lg:w-1/2 lg:text-left md:w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="flex-shrink-0 w-full py-5 shadow-2xl md:w-1/2 lg:w-1/2 card bg-base-100">
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
                        <p className="text-center text-red-600">
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
        // <div className="my-20 hero">
        //     <div className="flex-col gap-20 hero-content lg:flex-row">
        //         <div className="w-1/2 text-center lg:text-left">
        //             <img src={login} alt="" />
        //         </div>
        //         <div className='px-5 rounded-lg shadow-xl shadow-neutral py-7 w-[385px]'>
        //             <h2 className='mb-5 text-xl text-center'>Sign Up</h2>
        //             <form onSubmit={handleSubmit(handleRegister)} className=''>
        //                 {/* <Header /> */}
        //                 <div className="w-full form-control">
        //                     <label className="label">
        //                         <span className="label-text">Name</span>
        //                     </label>
        //                     <input {...register("displayName", {
        //                         required: "full name is required"
        //                     })} type="text" placeholder="full name" className="w-full input input-bordered" />
        //                     {errors.displayName && <p className='ml-4 text-red-500'>{errors.displayName.message}</p>}
        //                 </div>
        //                 <div className="w-full form-control">
        //                     <label className="label">
        //                         <span className="label-text">Email</span>
        //                     </label>
        //                     <input  {...register("email", {
        //                         required: "email address is required"
        //                     })} type="email" placeholder="email" className="w-full input input-bordered" />
        //                     {errors.email && <p role="alert" className='ml-4 text-red-600'>{errors.email?.message}</p>}
        //                 </div>
        //                 <div className="w-full mt-2 form-control">
        //                     <label className="label">
        //                         <span className="label-text">Password</span>
        //                     </label>
        //                     <input  {...register("password", {
        //                         required: "password is required",
        //                         minLength: { value: 6, message: 'password at least 6 characters' },
        //                         maxLength: 20,
        //                         pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: 'password must have Uppercase, lowercase, number and Special characters' }
        //                     })} type="password" placeholder="password" className="w-full input input-bordered " />
        //                     {errors.password && <p role="alert" className='ml-4 text-red-600'>{errors.password?.message}</p>}
        //                 </div>
        //                 <div className="w-full form-control">
        //                     <label className="label">
        //                         <span className="label-text">User Type</span>
        //                     </label>
        //                     <select {...register("userType")} className="w-full select input-bordered">
        //                         <option defaultValue='buyer'>buyer</option>
        //                         <option defaultValue='seller'>seller</option>
        //                     </select>
        //                 </div>
        //                 <input type="submit" className='w-full pb-0 mt-5 mb-0 text-white btn bg-gradient-to-r from-secondary to-primary' defaultValue='Sign Up' />
        //                 <div>
        //                     {
        //                         signUpError &&
        //                         <p className='ml-4 text-red-500'>{signUpError}</p>
        //                     }
        //                 </div>
        //             </form>
        //             <div className="flex flex-col w-full border-opacity-50">
        //                 <div className="grid w-full h-20 py-0 my-0 card rounded-box place-items-center"><p>Already have an account? <Link to='/login' className='text-primary'>Please Login</Link></p>
        //                 </div>
        //                 <div className="py-0 my-0 divider">OR</div>
        //                 <div className="grid h-20 py-0 my-0 card rounded-box place-items-center"><button onClick={handleSignInWithGoogle} className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Login;