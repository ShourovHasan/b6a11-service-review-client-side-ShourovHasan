import React from 'react';
import useTitle from '../../../hooks/useTitle';
import CheckupAndHealthy from '../../CheckupAndHealthy/CheckupAndHealthy';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services3 from '../Services/Services3';

const Home = () => {
    useTitle('Home');
    return (
        <div className='mb-12'>
            <Banner></Banner>
            <Services3></Services3>
            <About></About>
            <CheckupAndHealthy></CheckupAndHealthy>
        </div>
    );
};

export default Home;