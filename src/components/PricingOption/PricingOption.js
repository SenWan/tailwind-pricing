import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const {name, price, benefits} = props.option;
    return (
        <div className='bg-blue-400 text-white p-4 rounded-lg'>
            <h2>{name}</h2>
            <h2>{price}</h2>
            <div>
                <h3 className='text-xl text-left'>Benefits: </h3>
               {
                   benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
               }
            </div>
        </div>
    );
};

export default PricingOption;