import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import AllProduct from '../components/AllProduct/AllProduct'
import AllProduct from '../components/AllProduct/AllProduct'
// import CartContainer from '../components/AllProduct/CartContainer/CartContainer'
import CartContainer from '../components/CartContainer/CartContainer'
function App() {
const [isActive, setActive] = useState({
  cart: "true",
  status : "cart"
})
const [selectedPorducts, setSelectedPorducts] = useState([])
const handleSelectedProducts = (pro) => {
  const isExist = selectedPorducts.find((p) =>p.id == pro.id)
  if(isExist){
    alert('ache already')
  }
  else{
    const newProduct = [...selectedPorducts , pro]
    setSelectedPorducts(newProduct)
  }
 
  // console.log( pro)
}
console.log(selectedPorducts)
const handleIsActive = (status) => {
  if (status === "cart") {
    setActive({
      cart: true,  // Set to true if "cart" is selected
      status: "cart"
    });
  } else {
    setActive({
      cart: false,  // Set to false if "about" is selected
      status: "about"
    });
  }
};
  return (
    <>
    <div className='container'>
    
    <AllProduct handleSelectedProducts={handleSelectedProducts}></AllProduct>
    <CartContainer isActive={isActive} handleIsActive={handleIsActive} />
    </div>
      
    </>
  )
}

export default App
