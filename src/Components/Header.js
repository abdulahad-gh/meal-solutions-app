import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../assets/images/bannaer.jpg'
const NavLinks = <>
    <Link className='btn btn-success text-white btn-xs' to='/'>Home</Link>
    <Link className='btn btn-success text-white btn-xs' to='/menu'>Menu</Link>
    <Link className='btn btn-success text-white btn-xs' to='/blog'>Blog</Link>
    <Link className='btn btn-success text-white btn-xs' to='/about-us'>About Us</Link>
    <Link className='btn btn-success text-white btn-xs' to='/contact-us'>Contact Us</Link>
    <Link className='btn btn-warning text-white btn-sm ' to='/contact-us'>Sign in</Link>
    <Link className='btn btn-warning text-white btn-sm   mr-4' to='/contact-us'>Sign up</Link>
</>


const Header = () => {
    return (
        <header className='h-screen w-full'>
            <div class="navbar absolute left-0 top-0 z-30 px-4">
                <div class="navbar-start">

                    <Link to='/' class="btn btn-ghost normal-case text-2xl text-green-300 font-bold">Meal Solutions</Link>
                </div>

                <div class="navbar-end ">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-438">
                            {
                                NavLinks
                            }
                        </ul>
                    </div>


                    <div class="hidden lg:flex">
                        <ul class="menu menu-horizontal p-0 flex items-center gap-x-2">
                            {
                                NavLinks
                            }
                        </ul>
                    </div>
                </div>

            </div>

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