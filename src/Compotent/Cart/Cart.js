import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {removeItem,cart} =props;
    return (
        <div>
            {
                props.cart.map(cart => 
                <div className='cart-div'>
                    <img className='cart-img' src={cart.picture} alt="" />
                    <h4>{cart.name}</h4>
                    <button className='remove-button' onClick={()=>removeItem(cart)}>X</button>
                </div>)
            }

        </div>
    );
};

export default Cart;