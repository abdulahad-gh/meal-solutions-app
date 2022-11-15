import React from 'react';
import { motion } from 'framer-motion'
import BestFood from '../assets/images/best-food.jpg'
import EasyOrder from '../assets/images/easy-to-order.jpg'
import FastDelivery from '../assets/images/fast-delivery.jpg'

const Intro = () => {
    return (
        <section className='py-20 px-4 md:px-16 text-center'>
            <h2 className='text-xl md:text-2xl font-bold'>We focus on</h2>
            <article className='flex flex-col md:flex-row justify-between items-center gap-8 pt-16'>
                <div>
                    <motion.img whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-md mx-auto" src={BestFood} alt="best food" />
                    <h3 className='text-lg font-bold mt-2'>Best food</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae temporibus pariatur aut vel! Ad, ullam?</p>
                </div>
                <div>
                    <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-48 h-48  md:w-56  md:h-56 object-cover rounded-full shadow-md mx-auto" src={EasyOrder} alt="easy order" />
                    <h3 className='text-lg font-bold mt-2'>Easy order</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae temporibus pariatur aut vel! Ad, ullam?</p>
                </div>
                <div>
                    <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className=" w-48 h-48 md:w-56  md:h-56 object-cover rounded-full shadow-md mx-auto" src={FastDelivery} alt="Fast delivery" />
                    <h3 className='text-lg font-bold mt-2'>Fast delivery</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae temporibus pariatur aut vel! Ad, ullam?</p>
                </div>
            </article>

        </section>
    );
};

export default Intro;