import React from 'react';
import BestFood from '../assets/images/best-food.jpg'
import EasyOrder from '../assets/images/easy-to-order.jpg'
import FastDelivery from '../assets/images/fast-delivery.jpg'

const Intro = () => {
    return (
        <section className='py-20 px-16 text-center'>
            <h2 className='text-2xl font-bold'>We focus on</h2>
            <article className='flex justify-between items-center'>
                <div>
                    <img className="w-56 h-56 object-cover rounded-full shadow-md mx-auto" src={BestFood} alt="best food" />
                    <h3 className='text-lg font-bold mt-2'>Best food</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae temporibus pariatur aut vel! Ad, ullam?</p>
                </div>
                <div>
                    <img className="w-56 h-56 object-cover rounded-full shadow-md mx-auto" src={EasyOrder} alt="easy order" />
                    <h3 className='text-lg font-bold mt-2'>Easy order</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae temporibus pariatur aut vel! Ad, ullam?</p>
                </div>
                <div>
                    <img className="w-56 h-56 object-cover rounded-full shadow-md mx-auto" src={FastDelivery} alt="Fast delivery" />
                    <h3 className='text-lg font-bold mt-2'>Fast delivery</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae temporibus pariatur aut vel! Ad, ullam?</p>
                </div>
            </article>

        </section>
    );
};

export default Intro;