import React from 'react';
import axios from 'axios';

const SuggSlider = (props) =>{
  console.log(props)


  const imageContainer = props.products.map((product =>
    <div className ="story-product-tile story-carousel-container">
      <div className ="imagecontainer">
        <a className ="link story-product-tile__link" >
          <img className="sliderPhoto" src = {product.productimgurl}></img>
          <h2 className="product-name">{product.productname}</h2>
          <h2 className="price">${product.productprice}.00 USD</h2>
        </a>
      </div>
    </div>
    ))
    return (
      <div>
        <h2 className = "headline h1">You may also like</h2>
          {imageContainer}
      </div>
    )


}

export default SuggSlider;




// style="width: 311.75px; margin-right: 25px;"