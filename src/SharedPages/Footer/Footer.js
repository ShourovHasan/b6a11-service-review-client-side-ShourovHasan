import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo/fav.webp'

const Footer = () => {
    const [services, setServices] = useState([]);
    
    console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/recentServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <footer className="flex justify-between p-24 text-white bg-black footer">
                <div>
                    <img src={logo} className="w-20" alt=''></img>
                    <p>Dentistry Services<br />Providing reliable service since 2022</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    {
                        services.map(service => <Link to='/services' className="link link-hover">{service.serviceName}</Link>)
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