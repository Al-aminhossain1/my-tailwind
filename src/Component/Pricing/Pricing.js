import React from 'react';
import Pricingoption from '../Pricingoption/Pricingoption';


const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'lifetime free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals']
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'lifetime regular',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals']
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'lifetime premium',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals']
        }
    ];
    return (
        <div className=' mt-10 p-5  bg-indigo-300'>
            <h1 className='text-6xl font-medium text-white'>Best Deals Of The Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia amet error velit id, repudiandae consequatur dolorum, itaque sequi maiores iste odio quisquam, quod eaque nam quam quasi! Inventore, numquam perspiciatis.</p>
            <div className='grid md:grid-cols-3 gap-4 mt-8'>
                {
                    pricingOption.map(option => <Pricingoption option={option}></Pricingoption>)
                }
            </div>
        </div>
    );
};

export default Pricing;  