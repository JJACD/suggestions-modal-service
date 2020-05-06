import React from 'react';
import {useSwipeable, Swipeable} from 'react-swipeable';
import { ButtonBack, ButtonFirst, ButtonLast, ButtonNext,
  CarouselProvider, DotGroup, ImageWithZoom, Slide, Slider, } from 'pure-react-carousel';
  

const SuggSlider = (props) =>{

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
const randomProd1 = props.products[Math.floor(Math.random() * props.products.length)]
const randomProd2 = props.products[Math.floor(Math.random() * props.products.length)]
const randomProd3 = props.products[Math.floor(Math.random() * props.products.length)]
const randomProd4 = props.products[Math.floor(Math.random() * props.products.length)]
const productsArray = props.products.slice(0, 4)

  const imageContainer = productsArray.map((product =>
    <div className ="story-product-tile-story-carousel-container">
      <div className ="imagecontainer">
        <a className ="link story-product-tile__link" >
          <img className="sliderPhoto" src = {product.productimgurl}></img>
          <h2 className="product-name">{product.productname}</h2>
          <span className="price">${product.productprice}.00
            <abbr className ="currency"> USD</abbr>
          </span>
        </a>
      </div>
    </div>
    ))

  const randomimageContainer =
    <div className ="story-product-tile-story-carousel-container">
      <div className ="imagecontainer">
        <a className ="link story-product-tile__link" >
          <img className="sliderPhoto" src = {randomProd1.productimgurl}></img>
          <h2 className="product-name">{randomProd1.productname}</h2>
          <span className="price">${randomProd1.productprice}.00
            <abbr className ="currency"> USD</abbr>
          </span>
        </a>
      </div>
    </div>
  const randomimageContainer1 =
    <div className ="story-product-tile-story-carousel-container">
      <div className ="imagecontainer">
        <a className ="link story-product-tile__link" >
          <img className="sliderPhoto" src = {randomProd2.productimgurl}></img>
          <h2 className="product-name">{randomProd2.productname}</h2>
          <span className="price">${randomProd2.productprice}.00
            <abbr className ="currency"> USD</abbr>
            </span>
        </a>
      </div>
    </div>
  const randomimageContainer2 =
    <div className ="story-product-tile-story-carousel-container">
      <div className ="imagecontainer">
        <a className ="link story-product-tile__link" >
          <img className="sliderPhoto" src = {randomProd3.productimgurl}></img>
          <h2 className="product-name">{randomProd3.productname}</h2>
          <span className="price">${randomProd3.productprice}.00
           <abbr className ="currency"> USD</abbr>
          </span>
        </a>
      </div>
    </div>
  const randomimageContainer3 =
    <div className ="story-product-tile-story-carousel-container">
      <div className ="imagecontainer">
        <a className ="link story-product-tile__link" >
          <img className="sliderPhoto" src = {randomProd4.productimgurl}></img>
          <h2 className="product-name">{randomProd4.productname}</h2>
          <span className="price">${randomProd4.productprice}.00
            <abbr className ="currency"> USD</abbr>
            </span>
        </a>
      </div>
    </div>


    return (
      <div className = "test">
        <h2 className = "headline-h1">You may also like</h2>
        <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        totalSlides={4}
        visiblelides={4}
        step={1}
        isIntrinsicHeight={true}
        hasMasterSpinner
      >
        <Slider className="carousel-main">
          <Slide index={0}>
          {randomimageContainer}
          </Slide>
          <Slide index={1}>
          {randomimageContainer1}
          </Slide>
          <Slide index={2}>
          {randomimageContainer2}
          </Slide>
          <Slide index={3}>
          {randomimageContainer3}
          </Slide>
        </Slider>
        <ButtonFirst>First</ButtonFirst>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <ButtonLast>Last</ButtonLast>
        <DotGroup />
      </CarouselProvider>


      </div>
    )


}

export default SuggSlider;




// style="width: 311.75px; margin-right: 25px;"