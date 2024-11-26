import About from '../../components/About/About';

import Cart from '../../components/Cart/Cart';
import './CartContainer.css'
const CartContainer = ({handleIsActive, isActive}) => {
    return (
        <div>
            <h1>this cartContainer</h1>
            <div className='flex'>
             <div onClick={() => handleIsActive("cart")}
              className={`${isActive.cart? "btn active" : "btn" } `}
              >cart</div>
             <div  onClick={() => handleIsActive("about")} 
             className={`${isActive.cart? "btn" : "btn active"}`}
             >About</div>
            </div>
            {/* {isActive.cart? <Cart></Cart>: <About></About>} */}
            {isActive.cart? <cart></cart>: <About></About>}
          
        </div>
    );
};

export default CartContainer;