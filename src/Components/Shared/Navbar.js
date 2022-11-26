import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import userAvatar from '../../assets/images/profile.png'
import addToCart from '../../assets/images/add-to-cart.png'
import auth from '../../firebase.init';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

const Navbar = () => {
    const [{ user }, dispatch] = useStateValue()
    const provider = new GoogleAuthProvider();

    const [isMenu, setisMenu] = useState(false)
    const signIn = async () => {
        if (!user) {
            const { user: { providerData } } = await signInWithPopup(auth, provider)
            dispatch({
                type: actionType.USER_INFO,
                user: providerData[0]
            })
            localStorage.setItem('user', JSON.stringify(providerData[0]))
        }
        else {
            setisMenu(!isMenu)
        }


    }

    console.log(user)
    const NavLinks = <>
        <Link className='btn btn-success text-white btn-xs' to='/'>Home</Link>
        <Link className='btn btn-success text-white btn-xs' to='/menu'>Menu</Link>
        <Link className='btn btn-success text-white btn-xs' to='/blog'>Blog</Link>
        <Link className='btn btn-success text-white btn-xs' to='/about-us'>About Us</Link>
        <Link className='btn btn-success text-white btn-xs' to='/contact-us'>Contact Us</Link>
        <Link className='btn btn-warning text-white btn-xs ' to='/contact-us'>Sign in</Link>
        <Link className='btn btn-warning text-white btn-xs   md:mr-4' to='/contact-us'>Sign up</Link>
        <p className='px-2 py-1 hover:bg-yellow-100 rounded-md transition-all duration-100 ease-in-out cursor-pointer md:hidden'>Log Out</p>


    </>



    return (
        <div class="navbar absolute left-0 top-0 z-30 px-4 ">
            <div class="navbar-start">

                <Link to='/' class="btn btn-ghost normal-case text-2xl text-slate-300 md:text-green-300 font-bold pl-0 ">Meal Solutions</Link>

            </div>

            <div class="navbar-end ">
                <div class="dropdown lg:hidden">
                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.6 }} className='w-8 h-8 cursor-pointer shadow-md rounded-full border-2' src={user ? user.photoURL : userAvatar} alt="Avatar" onClick={() => signIn()} />
                        {
                            isMenu && <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className='w-32 flex flex-col gap-2  bg-gray-400 absolute top-12 right-0 px-2 py-2 rounded-lg shadow-xl lg:hidden'>
                                {
                                    user && user.email === "abdulahadgmid@gmail.com" && (
                                        <Link to='create-container'>  <p className='px-2 py-1 hover:bg-slate-100 rounded-md transition-all duration-100 ease-in-out cursor-pointer'>New item</p></Link>
                                    )
                                }

                                {
                                    NavLinks
                                }

                            </motion.div>
                        }
                    </div>
                </div>


                <div class="hidden lg:flex">
                    <motion.ul initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 200 }} class="menu menu-horizontal p-0 flex items-center gap-x-2">
                        {
                            NavLinks
                        }
                    </motion.ul>
                    <div >
                        <img className='w-8 h-8 cursor-pointer shadow-md' src={addToCart} alt="add-to-cart" />
                        <span className='bg-[#000] text-white rounded-full w-1 h-1 p-3 flex justify-center items-center absolute top-0 right-19'>2</span>
                    </div>
                    <div className='relative'>
                        <motion.img whileTap={{ scale: 0.6 }} className='w-8 h-8 cursor-pointer shadow-md rounded-full border-2' src={user ? user.photoURL : userAvatar} alt="Avatar" onClick={() => signIn()} />
                        {
                            isMenu && <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className='w-28 flex flex-col  bg-gray-400 absolute top-12 right-0 px-3 py-2 rounded-lg shadow-xl '>
                                {
                                    user && user.email === "abdulahadgmid@gmail.com" && (
                                        <Link to='create-container'>  <p className='px-2 py-1 hover:bg-slate-100 rounded-md transition-all duration-100 ease-in-out cursor-pointer'>New item</p></Link>
                                    )
                                }
                                <p className='px-2 py-1 bg-yellow-200 hover:bg-yellow-100 rounded-md transition-all duration-100 ease-in-out cursor-pointer'>Log Out</p>


                            </motion.div>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;