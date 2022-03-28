import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, benefits : [
            'lifetime Free',
            'unlimited deals',
            'localized deals'
        ]},
        {id: 1, name: 'Regular', price: 10, benefits : [
            'lifetime Free',
            'unlimited deals',
            'localized deals'
        ]},
        {id: 1, name: 'Premium', price: 20, benefits : [
            'lifetime Free',
            'unlimited deals',
            'localized deals'
        ]}
    ]
    return (
        <div className='md:container md:mx-auto'>
            <h1 className='mt-4 text-3xl text-blue-600 font-bold'>Welcome To Pricing Club</h1>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;