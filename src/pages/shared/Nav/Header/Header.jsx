// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {


    const items = useSelector((state) => state.cart)

    return (
        <div className='flex items-center justify-between py-4 px-20 shadow-lg'>
            <span>Redux Ema-Jhon</span>
            <div className='flex '>
                <Link to='/'  className='px-3'>Products</Link>
                <Link to='/cart' className='px-3'>Cart</Link>
            </div>
            <span className='font-semibold'>Item {items.length}</span>
      </div>
    );

};

export default Header;