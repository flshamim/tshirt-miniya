
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Shirt from '../shirt/Shirt';
import useTshirt from './../../useTSirt';
import './Home.css'
const Home = () => {
    const [tShirt, setTshirt] = useTshirt();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt=> tShirt._id===selectedItem._id);
        if(!exists){
           const newCart = [...cart, selectedItem];
        setCart(newCart);  
       }
       else{
           alert('Alrady Added')
       }
    }

    const removeItem = (selectedItem) => {
       const rest =cart.filter(tShirt=> tShirt._id !==selectedItem._id);
       setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className='shirt-container'>
                <h1 className='shop-head'>Our Collection here</h1>
                <div className='card'>
                    {
                        tShirt.map(tShirt => <Shirt
                            key={tShirt._id}
                            shirt={tShirt}
                            handleAddToCart={handleAddToCart}
                        ></Shirt>)
                    }
                </div>
            </div>
            <div className='rivew-container'>
                <h3>Order Review</h3>
                <h3>{cart.length}</h3>
                <Cart cart={cart}
                    removeItem={removeItem}
                >

                </Cart>
                {/* {
                   cart.map(cart => <Cart cart={cart}></Cart>)
                } */}

            </div>
        </div>
    );
};

export default Home;