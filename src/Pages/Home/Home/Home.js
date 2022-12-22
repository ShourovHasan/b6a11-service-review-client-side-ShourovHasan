import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import CheckupAndHealthy from '../../CheckupAndHealthy/CheckupAndHealthy';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services3 from '../Services/Services3';

const Home = () => {
    const { loading } = useContext(AuthContext);
    useTitle('Home');
    if (loading) {
        return <div className='flex items-center justify-center w-full h-96'>
            <button className="btn loading ">loading</button>
        </div>
    }
    
    return (
        <div className='mx-auto mb-12'>
            <Banner></Banner>
            <Services3></Services3>
            <About></About>
            <CheckupAndHealthy></CheckupAndHealthy>
        </div>
    );
};

export default Home;