import React from 'react'
import { useStateValue } from './StateProvider'
import image_ad from './images/amazon.png'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">

            <img className="checkout_ad" src={image_ad} alt="" />


            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no ietms in the basket. To buy one or more item, 
                        please go back to "Add to basket" to  add the item
                    </p>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout_title">Your Shopping basket</h2>
                        {/* // List all checkout items */}
                        {/* {console.log("Checkout " + basket[0].id +  basket[0].title + 
                         basket[0].image + basket[0].price + basket[0].rating)} */}
                        {basket.map( (item) => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image} 
                            price= {item.price}
                            // rating={item.rating}
                            />
                        ))

                        }
                    </div>
                )}


        </div>
    )
}

export default Checkout;
