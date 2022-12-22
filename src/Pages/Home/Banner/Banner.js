import React from 'react';
import img1 from '../../../../src/assets/images/banner/1.jpg';
import img2 from '../../../../src/assets/images/banner/2.jpg';
import img3 from '../../../../src/assets/images/banner/3.jpg';
import img4 from '../../../../src/assets/images/banner/4.jpg';
import img5 from '../../../../src/assets/images/banner/5.jpg';
import BannerItems from './BannerItems';

const bannerData = [
    {
        image: img1,
        prev: 5,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="w-11/12 my-10 carousel rounded-xl h-[600px] mx-auto">
            {
                bannerData.map(slide => <BannerItems
                    key={slide.id}
                    slide={slide}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;