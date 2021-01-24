import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider"
import { Rating } from '@material-ui/lab';

function CheckoutProduct( id, title, image, price) {
    console.log("Product " + id, title, image, price)
    const [{basket}, dispatch] = useStateValue();

    const removefromBasket = () => {
           dispatch({
               type:"REMOVE_FROM_BASKET",
               id:id,
           })
    }
    return (
        <div className="checkoutProduct"> 
            <img className="checkoutProduct_image" src={image} alt=""/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                  {title}  
                </p>
                <p className="checkoutProduct_price">
                  <small>$</small>
                  <strong>{price}</strong>
                </p>

               

                <button onClick={removefromBasket}> Remove from basket</button>

            </div>
        </div>
    )
}

{/* <div className="checkoutProduct_rating">
{<Rating name="size-medium" defaultValue={2} value={rating} />} 
</div> */}
export default CheckoutProduct 
