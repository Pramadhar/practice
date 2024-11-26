import './SingleProduct.css'

const SingleProduct = ({pro, handleSelectedProducts}) => {
    const{id, name, image, description, isFeature} = pro
    return (
        <div className='image'>
           <img className='img' src={image} alt="" />
           <div>

           </div>
           <div className='details'>
           <p>{name}</p>
           <p>{description}</p>
  <p>{isFeature ? "feature Category" : "none"}</p>
           </div>
           <button  onClick={() => handleSelectedProducts(pro)} className='btn'>add to cart</button>
        </div>
    );
};

export default SingleProduct;