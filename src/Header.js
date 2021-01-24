import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from './StateProvider';
function Header() {
    const [{basket}] = useStateValue();
    console.log(basket)
    return (
        <nav className="header">
            <Link to="/login">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>


            {/*Search Box */}
            <div className="header_search">
                <input type="text" className="header_searchInput"></input>
                <SearchIcon className="header_searchIcon" />
            </div>

            {/*Links */}

            <div className="header_nav">
                {/* 1st Link */}
                <Link to="/login" className="header_link">
                <div className="header_option">
                        <span className="header_optionLineOne">Hello Avneesh</span>
                        <span className="header_optionLineTwo">Sign In</span>
                </div>
                </Link>
                {/* 2st Link */}
                <Link to="/" className="header_link">
                <div className="header_option">
                        <span className="header_optionLineOne">return</span>
                        <span className="header_optionLineTwo">& Orders</span>
                </div>
                </Link>

                {/* 3st Link */}
                <Link to="/" className="header_link">
                <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                </div>
                </Link>

                {/* 4st Link */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                    </div>
                
                </Link>

              
            </div>


        </nav>

    )
}

export default Header
