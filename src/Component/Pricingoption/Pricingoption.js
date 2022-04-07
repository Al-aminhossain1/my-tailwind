import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const Pricingoption = ({ option }) => {
    const { name, price, benefits } = option
    console.log(benefits)
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h4 className='text-xl py-2 rounded bg-indigo-300 font-bold'>{name}</h4>
            <span className='text-5xl font-bold'>{price}</span>
            <span className='text-xl font-bold text-gray-500'>/mo</span>
            <div>
                <h3 className='text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }

            </div>
            <button className=' bg-green-500 flex items-center justify-center w-full font-bold py-2 mt-4 rounded  hover:text-white'>Buy Now <ArrowRightIcon className='w-5 h-5'></ArrowRightIcon> </button>
        </div>
    );
};

export default Pricingoption;