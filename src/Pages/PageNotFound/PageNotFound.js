import React from 'react';
import useTitle from '../../hooks/useTitle';

const PageNotFound = () => {
    useTitle('404');
    return (
        <div className='flex items-center justify-center'>
            <img src='page404.webp' className='w-1/2 ' alt=''></img>
        </div>
    );
};

export default PageNotFound;