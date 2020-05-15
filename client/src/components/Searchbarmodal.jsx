import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


const Searchbarmodal = (props) => {
  const productArray = props.products.slice(0,4)
  const searchedproducts = productArray.map(((product) => (
    <div>
      <img className="searchimage" src= {product.productimgurl} />
      <span>{product.productname}</span>
    </div>
  )))

  return(
    <div className="searchmodalcontainer">

      <Modal show ={props.show} onHide ={props.onHide} >
        <Modal.Header closeButton>
          <Modal.Title>Top Suggestions</Modal.Title>
        </Modal.Header>
        <Modal.Body>{searchedproducts}</Modal.Body>

      </Modal>
      </div>
  );
};
export default Searchbarmodal;

