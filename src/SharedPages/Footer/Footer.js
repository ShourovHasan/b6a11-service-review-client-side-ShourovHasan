import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo/fav.webp'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black text-white flex justify-between p-24">
                <div>
                    <img src={logo} className="w-20" alt=''></img>
                    <p>Dentistry Services<br />Providing reliable service since 2022</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;