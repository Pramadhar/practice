# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
.flex{
    display: flex;
    gap: 2%;
}
.active {
    background-color: chartreuse;
    color: white;
}
.btn{
    padding: 10px;
}

<!-- import About from '../../About/About';
import Cart from '../../Cart/Cart';
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
            {isActive.cart? <Cart></Cart>: <About></About>}
        </div>
    );
};

export default CartContainer; -->