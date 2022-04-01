import React from 'react';
import './Shirt.css'
const Shirt = (props) => {
    const {handleAddToCart, shirt}=props
    const { picture, name, price } = shirt
    return (
        <div className='card-body'>
            <img className='card-photo' src={picture} alt="" />
            <div  className='p-name'>
                <h3 className='name'>{name}</h3>
                <p className='price'>${price}</p>
            </div>
            <button onClick={()=>handleAddToCart(shirt)} className='button'>Add To cart</button>
        </div>
    );
};

export default Shirt;