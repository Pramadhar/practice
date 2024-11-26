import './AllProduct.css'
import { useEffect, useState } from 'react';
import './AllProduct.css'
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProduct = ({handleSelectedProducts}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
            fetch("./fake.json")
            .then(res => res.json())
            .then(data =>setProducts(data)
            .catch(err => console.error("Error loading products:", err))
        ) },[])
       
    return (
        <div>
            <h1>all product.jsx  </h1>
          {
          products.map ((pro) => <SingleProduct handleSelectedProducts={handleSelectedProducts} key={pro.id} pro={pro}></SingleProduct>)
          }
           
           
        </div>
    );
};

export default AllProduct;