import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../assets/images/Logo/fav.webp'


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handlelogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    const menuItems = <>
        <li className='font-semibold'><NavLink to='/home'>Home</NavLink></li>      
        <li className='font-semibold'><NavLink to='/blog'>Blog</NavLink></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><NavLink to='/addServices'>Add Services</NavLink></li>
                    <li className='font-semibold'><NavLink to='/myReviews'>My Reviews</NavLink></li>
                    {/* <li onClick={handlelogOut} className='font-semibold'><Link >Log Out</Link></li> */}
                </>
                :
                <>                   
                    <li className='font-semibold'><NavLink to='/login'>Login</NavLink></li>
                </>
        }
        
        
    </>
    return (
        <div className="w-11/12 h-10 py-12 mx-auto mb-12 bg-gray-100 navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {
                            user?.uid &&
                            <>
                                <li tabIndex={0}>
                                    <Link className="flex justify-between ">
                                        {
                                            user?.photoURL ?
                                                <>
                                                    <img className='rounded-full me-5' style={{ height: '52px' }} src={user?.photoURL} alt="" />
                                                </>
                                                :
                                                <></>
                                        }
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2 text-white bg-gray-400 w-52">
                                        <li className='mx-auto'><Link>{user?.displayName}</Link></li>
                                    </ul>
                                </li>
                                <NavLink>
                                    <li className='mx-auto'>
                                        {
                                            user?.email ?
                                                <>
                                                    <button onClick={handlelogOut} className='font-semibold'>Log Out</button>
                                                </>
                                                :
                                                <>
                                                </>
                                        }
                                    </li>
                                </NavLink>
                            </>
                        }
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="h-16 text-xl normal-case btn btn-ghost">
                    <img className='max-h-14' src={logo} alt="" />
                    <h1 className='ml-3 md:text-2xl lg:text-4xl'>
                        <span className='px-4 py-1 text-white bg-blue-600 rounded-xl'>Dentistry</span> <span className='text-blue-600'>Services</span>
                    </h1>
                </Link>
            </div>
            <div className="hidden navbar-end lg:flex">
                <ul className="p-0 menu menu-horizontal">
                    {menuItems}
                    {
                        user?.uid &&
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <Link className='flex items-center font-semibold'>
                                        {
                                            user?.photoURL ?
                                                <>
                                                    <img className='rounded-full' style={{ height: '32px' }} src={user?.photoURL} alt="" />
                                                </>
                                                :
                                                <></>
                                        }
                                    </Link>
                                </label>
                                <ul tabIndex={0} className="w-40 p-2 mt-3 text-white bg-gray-400 shadow menu menu-compact dropdown-content bg-base-100 rounded-box">
                                    <li className='mx-auto'><Link>{user?.displayName}</Link></li>
                                    <li className='mx-auto'>
                                        {
                                            user?.email ?
                                                <>
                                                    <Link onClick={handlelogOut} className='font-semibold'>Log Out</Link>
                                                </>
                                                :
                                                <>
                                                </>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </>
                    }

                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link to='/' className=""><button className="btn btn-outline btn-warning">Appointment</button></Link>
            </div> */}
            
        </div>
    );
};

export default Header;