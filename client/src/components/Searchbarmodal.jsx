import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'


const Searchbarmodal = (props) => {
  const productArray = props.products.slice(0,4)
  const searchedproducts = productArray.map(((product) => (
    <div key={product.productid}>
      <img className="searchimage" src= {product.productimgurl} href="" />
      <a href="#">{product.productname}</a>
    </div>
  )))
  return(
    <div className="searchmodalcontainer">
<Overlay
        show={props.show}
        placement="bottom-start"
        containerPadding={20}
        target={props.target}
        rootClose = {true}
        onHide={props.onHide}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">Top Suggestions</Popover.Title>
          <Popover.Content>
          {searchedproducts}
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
};
export default Searchbarmodal;

