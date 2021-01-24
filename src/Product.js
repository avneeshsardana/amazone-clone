import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import Rating from '@material-ui/lab/Rating';

function Product({id, title, image, price, rating}) {

    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
         //Add item to basket
         dispatch( {
             type: "ADD_TO_BASKET",
             item: {
                 id:id,
                 title: title,
                 image: image
             }
         })
    }
    return (
        <div className="product">
            <div className="product_info" >
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}> Add to basket</button>
        </div>
    )
}


 {/*<div className="product_rating">
                   
                   
                </div>
     {<Rating name="size-medium" defaultValue={2} value={rating} />}
      {Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))}  */}
export default Product;
