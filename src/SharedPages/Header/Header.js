import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

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
        <li className='font-semibold'><NavLink to='/'>Home</NavLink></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><NavLink to='/addServices'>Add Services</NavLink></li>
                    <li className='font-semibold'><NavLink to='/addServices'>Add Reviews</NavLink></li>
                    <li onClick={handlelogOut} className='font-semibold'><Link >Log Out</Link></li>
                </>
                :
                <li className='font-semibold'><NavLink to='/login'>Login</NavLink></li>
        }
    </>
    return (
        <div className="pt-12 mb-12 navbar m-h-20 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="text-xl normal-case btn btn-ghost">
                    {/* <img className='max-h-10' src={logo} alt="" /> */}
                </Link>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="p-0 menu menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/' className=""><button className="btn btn-outline btn-warning">Appointment</button></Link>
            </div>
        </div>
    );
};

export default Header;