import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import login from '../../assets/images/login_register/login_Register.png';
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
    const { setUser, userLogin, googleSignIn, facebookSignIn } = useContext(AuthContext);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();

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
                navigate(from, { replace: true });
                console.log(currentUser);
                form.reset();
            })
            .catch(error => {
                console.error(error);
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
                navigate(from, { replace: true });
                console.log(currentUser);
            })
            .catch(error => {
                console.error(error);
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
                navigate(from, { replace: true });
                console.log(currentUser);

            })
            .catch(error => {
                console.error(error);
            })
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
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="mt-2 form-control">
                            <input type="submit" className="text-white bg-red-500 btn btn-warning " value="Login" />
                        </div>
                    </form>
                    <div className='mx-auto mb-2'>
                        <p>Or Sign In with</p>
                        <div className='flex justify-center  items-center mt-3'>
                            {/* <button onClick={handleFacebookSignIn} className='mr-4 text-xl text-blue-600 border-none btn btn-circle bg-slate-100'><FaFacebookF></FaFacebookF></button> */}
                            <button onClick={handleGoogleSignIn} className='text-xl text-blue-600 border-none btn btn-circle bg-slate-100'><FaGoogle></FaGoogle></button>
                        </div>
                    </div>
                    <p className='text-center'>New to Dentistry Services? <Link to='/register' className='font-bold text-red-500'> Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;