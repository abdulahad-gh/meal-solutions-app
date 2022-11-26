import React from 'react';
import BannerImg from '../assets/images/bannaer.jpg'

const Header = () => {
    return (
        <header className='h-screen w-full'>


            <img className='absolute left-0 top-0 h-screen w-screen hero-overlay object-cover bg-opacity-100' src={BannerImg} alt="banner" />

            <div className='absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%] text-center overflow-hidden '>
                <div className='hero-overlay bg-opacity-50 md:px-24 pt-12 rounded-3xl'>
                    <h1 className='text-5xl md:text-7xl font-extrabold'>
                        Are YOU <span className='text-orange-500'>Hungry??</span>
                        <br /><span>No <span className='text-green-400'>Problem!!</span></span>
                    </h1>
                    <button className='btn bg-green-400 my-12'>See Menu</button>
                </div>
            </div>

        </header>
    );
};

export default Header;