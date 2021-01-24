import React from 'react'
import avneesh_img from './images/ikigai.png'
import Product from './Product'
import "./Home.css"
function Home() {
    return (
        <div className="home">
            <img className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
           <div className="home_row">
            <Product
             id="121"
                 title="Book must have an alt prop, either with meaningful text, or an empty string for decorativ"
                 image={avneesh_img} 
                 price="40"
                 rating="1" >
                

            </Product>

            <Product
             id="122"
                 title="Pen must have an alt prop, either with meaningful text, or an empty string for decorativ"
                 image={avneesh_img} 
                 price="40"
                 rating="2" >
                

            </Product>
            </div>

            <div className="home_row">
            <Product
             id="123"
                 title="Mobile must have an alt prop, either with meaningful text, or an empty string for decorativ"
                 image={avneesh_img} 
                 price="30"
                 rating="3" >
                

            </Product>

            <Product
             id="124"
                 title="Fan must have an alt prop, either with meaningful text, or an empty string for decorativ"
                 image={avneesh_img} 
                 price="40"
                 rating="4" >
                

            </Product>

            <Product
             id="125"
                 title="TV must have an alt prop, either with meaningful text, or an empty string for decorativ"
                 image={avneesh_img} 
                 price="50"
                 rating="5" >
                

            </Product>
            </div>
        </div>
    );
}

export default Home
