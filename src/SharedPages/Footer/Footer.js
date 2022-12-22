import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo/fav.webp'

const Footer = () => {
    const [services, setServices] = useState([]);

    // console.log(services);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-shourovhasan.vercel.app/recentServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <footer className="flex flex-col justify-between w-11/12 p-12 mx-auto text-white bg-black lg:p-24 footer lg:flex-row md:flex-row md:p-24">
                <div>
                    <img src={logo} className="w-20" alt=''></img>
                    <p className='md:w-full'>
                        Dentistry Services<br />
                        Providing reliable service since 2022 <br />
                        Copyright @2022. All Rights Reserved by Dentistry Services
                    </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    {
                        services.map(service => <Link key={service._id} to='/services' className="link link-hover">{service.serviceName}</Link>)
                    }
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
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