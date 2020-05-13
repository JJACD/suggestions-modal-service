import React, { useState, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Overlay from 'react-bootstrap/Overlay';
import Table from 'react-bootstrap/Table';
import classnames from 'classnames';

const Navheader = (props) => {
  const randomProd1 = props.products[0];
  const title = randomProd1.productname;
  const [currentproduct, setProduct] = useState();
  useEffect(() => {
    setProduct(randomProd1);
  });


  const [scrollPos, setScroll] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);


  const prevscrollRef = useRef();

  useEffect(() => {
    prevscrollRef.current = scrollPos;
  });
  const prevscrollPos = prevscrollRef.current;

  useEffect(() => {
    function handlescrollpos() {
      setScroll(window.pageYOffset);
      if (prevscrollPos > '500') {
        setVisible(prevscrollPos > scrollPos);
      } else {
        setVisible(true);
      }
    }
    window.addEventListener('scroll', handlescrollpos);
    return () => window.removeEventListener('scroll', handlescrollpos);
  });

  return (
    <div>
      <div className={classnames('navbar-container-container', { 'navbar-header-hidden': !visible })}>
        <div className="navbar-container">
          <div className="navbar-header">
            <Navbar
              bg="light"
              variant="light"
              sticky="top"
              expand="lg"
            >
              <Container fluid className="lefthalf-nav-container">

                <Navbar.Brand href="#home">
                  {' '}
                  <img className="headerlogo" src="https://luluproject.s3-us-west-1.amazonaws.com/1200px-Lululemon_Athletica_logo.svg.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                  <Nav className="mr-aut">

                    <NavDropdown title="WOMEN" className="womendropdown">
                      <Container fluid className="background-overlay-container" />
                      <Container fluid className="dropdowntophalf">
                        <Container fluid className="dropdownelements-containter">
                          <Container className="dropdownelements">
                            <Container className="dropdownelements-columns-container">
                              <Container className="elements-column">
                                <Table bordeless="true">
                                  <thead>
                                    <tr>
                                      <th>What's New</th>
                                      <th>
                                        WOMEN'S CLOTHES
                                    <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                      </th>
                                      <th />
                                      <th>
                                        ACCESSORIES
                                    <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Bestsellers</td>
                                      <td>Leggings</td>
                                      <td>Skirts</td>
                                      <td>Bags</td>
                                    </tr>
                                    <tr>
                                      <td>Align Shop</td>
                                      <td>Coats & Jackets</td>
                                      <td>Socks</td>
                                      <td>Gloves & Mittens</td>
                                    </tr>
                                    <tr>
                                      <td>Biker Short Outfits</td>
                                      <td>Dresses</td>
                                      <td>Sports Bras</td>
                                      <td>Hair Accessories</td>
                                    </tr>
                                    <tr>
                                      <td>Mother's Day Gifts</td>
                                      <td>Hoodies & Sweatshirts</td>
                                      <td>Sweaters</td>
                                      <td>Hats</td>
                                    </tr>
                                    <tr>
                                      <td>lululemon Lab</td>
                                      <td>Pants</td>
                                      <td>Swimsuits</td>
                                      <td>Scarves & Wraps</td>
                                    </tr>
                                    <tr>
                                      <td>Science Of Feel</td>
                                      <td>Shirts</td>
                                      <td>Tank Tops</td>
                                      <td>Water Bottles</td>
                                    </tr>
                                    <tr>
                                      <td>Sale</td>
                                      <td>Shorts</td>
                                      <td>Underwear</td>
                                      <td>Yoga Accessories</td>
                                    </tr>
                                    <tr>
                                      <td />
                                      <td />
                                      <td />
                                      <td>Yoga Mats</td>
                                    </tr>

                                  </tbody>
                                </Table>
                              </Container>
                            </Container>
                            <Container className="dropdownelements-bottomrow-container">
                              <Table>
                                <thead>
                                  <tr>
                                    <th>Activity</th>
                                    <th>Yoga</th>
                                    <th>Running</th>
                                    <th>Training</th>
                                    <th>Dance</th>
                                    <th>On The Move</th>
                                    <th>Hiking</th>
                                    <th>
                                      SHOP ALL WOMEN
                                      <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                    </th>
                                  </tr>
                                </thead>
                              </Table>
                            </Container>
                          </Container>
                        </Container>
                      </Container>
                    </NavDropdown>
                    <NavDropdown title="MEN" id="mendropdown">
                      <Container fluid className="background-overlay-container" />
                      <Container fluid className="dropdowntophalf">
                        <Container fluid className="dropdownelements-containter">
                          <Container className="dropdownelements">
                            <Container className="dropdownelements-columns-container">
                              <Container className="elements-column">
                                <Table>
                                  <thead>
                                    <tr>
                                      <th>What's New</th>
                                      <th>
                                        MEN'S CLOTHES
                                    <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                      </th>
                                      <th />
                                      <th>
                                        ACCESSORIES
                                    <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Bestsellers</td>
                                      <td>Joggers</td>
                                      <td>Tank Tops</td>
                                      <td>Bags</td>
                                    </tr>
                                    <tr>
                                      <td>ABC Pants Shop</td>
                                      <td>Button Down Shirts</td>
                                      <td>T-Shirts</td>
                                      <td>Gloves & Mittens</td>
                                    </tr>
                                    <tr>
                                      <td>Metal Vent Tech Shop</td>
                                      <td>Coats & Jackets</td>
                                      <td>Shorts</td>
                                      <td>Hair Accessories</td>
                                    </tr>
                                    <tr>
                                      <td>Lounge Wear</td>
                                      <td>Hoodies & Sweatshirts</td>
                                      <td>Socks</td>
                                      <td>Hats</td>
                                    </tr>
                                    <tr>
                                      <td>lululemon Lab</td>
                                      <td>Pants</td>
                                      <td>Swim Trunks</td>
                                      <td>Water Bottles</td>
                                    </tr>
                                    <tr>
                                      <td>Science Of Feel</td>
                                      <td>Polo Shirts</td>
                                      <td>Underwear</td>
                                      <td>Yoga Accessories</td>
                                    </tr>
                                    <tr>
                                      <td>Sale</td>
                                      <td>Shirts</td>
                                      <td />
                                      <td>Yoga Mats</td>
                                    </tr>


                                  </tbody>
                                </Table>
                              </Container>
                            </Container>
                            <Container className="dropdownelements-bottomrow-container">
                              <Table>
                                <thead>
                                  <tr>
                                    <th>Activity</th>
                                    <th>Training</th>
                                    <th>Running</th>
                                    <th>Yoga</th>
                                    <th>Hiking</th>
                                    <th>On The Move</th>
                                    <th>Golf</th>
                                    <th>
                                      SHOP ALL MEN
                                      <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                    </th>
                                  </tr>
                                </thead>
                              </Table>
                            </Container>
                          </Container>
                        </Container>
                      </Container>
                    </NavDropdown>

                    <NavDropdown title="GIRLS" id="girlsdropdown">
                      <Container fluid className="background-overlay-container" />
                      <Container fluid className="dropdowntophalf">
                        <Container fluid className="dropdownelements-containter">
                          <Container className="dropdownelements">
                            <Container className="dropdownelements-columns-container">
                              <Container className="elements-column">
                                <Table>
                                  <thead>
                                    <tr>
                                      <th>Bestsellers</th>
                                      <th>
                                        GIRLS' CLOTHES
                                    <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                      </th>
                                      <th />
                                      <th>
                                        ACCESSORIES
                                    <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Rhythmic Shop</td>
                                      <td>Bodysuits & Leotards</td>
                                      <td>Shirts</td>
                                      <td>Girl's Bags</td>
                                    </tr>
                                    <tr>
                                      <td>Sale Under $25</td>
                                      <td>Bras</td>
                                      <td>Shorts</td>
                                      <td>Girls' Hair Accessories</td>
                                    </tr>
                                    <tr>
                                      <td>Sale</td>
                                      <td>Coats & Jackets</td>
                                      <td>Skirts</td>
                                      <td>Girls' Hats</td>
                                    </tr>
                                    <tr>
                                      <td />
                                      <td>Dresses</td>
                                      <td>Socks</td>
                                      <td />
                                    </tr>
                                    <tr>
                                      <td />
                                      <td>Hoodies & Sweatshirts</td>
                                      <td>Swimsuits</td>
                                      <td />
                                    </tr>
                                    <tr>
                                      <td />
                                      <td>Pants</td>
                                      <td />
                                      <td> </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </Container>
                            </Container>
                            <Container className="dropdownelements-bottomrow-container">
                              <Table>
                                <thead>
                                  <tr>
                                    <th>Activity</th>
                                    <th>Swim</th>
                                    <th>Dance</th>
                                    <th>Gymnastics</th>
                                    <th>Gym</th>
                                    <th>Tennis</th>
                                    <th />
                                    <th>
                                      SHOP ALL GIRLS
                                      <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                    </th>
                                  </tr>
                                </thead>
                              </Table>
                            </Container>
                          </Container>
                        </Container>
                      </Container>
                    </NavDropdown>
                    <NavDropdown title="ACCESSORIES" id="accessoriesdropdown">
                      <Container fluid className="background-overlay-container" />
                      <Container fluid className="dropdowntophalf">
                        <Container fluid className="dropdownelements-containter">
                          <Container className="dropdownelements">
                            <Container className="dropdownelements-columns-container">
                              <Container className="elements-column">
                                <Table>
                                  <thead>
                                    <tr>
                                      <th>What's New</th>
                                      <th>
                                        ACCESSORIES
                                    <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                      </th>
                                      <th />
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Sale</td>
                                      <td>Bags</td>
                                      <td>Yoga Accessories</td>
                                      <td />
                                    </tr>
                                    <tr>
                                      <td />
                                      <td>Gloves & Mittens</td>
                                      <td>Yoga Mats</td>
                                      <td />
                                    </tr>
                                    <tr>
                                      <td />
                                      <td>Hair Accessories</td>
                                      <td>Girls' Bags</td>
                                      <td />
                                    </tr>
                                    <tr>
                                      <td />
                                      <td>Hats</td>
                                      <td>Girls' Hair Accessories</td>
                                      <td />
                                    </tr>
                                    <tr>
                                      <td />
                                      <td>Scarves & Wraps</td>
                                      <td>Girls Hats</td>
                                      <td />
                                    </tr>
                                    <tr>
                                      <td />
                                      <td>Water Bottles</td>
                                      <td />
                                      <td />
                                    </tr>
                                  </tbody>
                                </Table>
                              </Container>
                            </Container>
                            <Container className="dropdownelements-bottomrow-container">
                              <Table>
                                <thead>
                                  <tr>
                                    <th>Activity</th>
                                    <th>Yoga</th>
                                    <th>Running</th>
                                    <th>Training</th>
                                    <th>On the Move</th>
                                    <th>Golf</th>
                                  </tr>
                                </thead>
                              </Table>
                            </Container>
                          </Container>
                        </Container>
                      </Container>
                    </NavDropdown>
                    <NavDropdown title="COMMUNITY" id="communitydropdown">
                      <Container fluid className="background-overlay-container" />
                      <Container fluid className="dropdowntophalf">
                        <Container fluid className="dropdownelements-containter">
                          <Container className="dropdownelements">
                            <Container className="dropdownelements-columns-container">
                              <Container className="elements-column">
                                <Table>
                                  <thead>
                                    <tr>
                                      <th>
                                        STORIES
                                    <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                      </th>
                                      <th>
                                        AMBASSADORS
                                    <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                      </th>
                                      <th>
                                        EVENTS
                                    <img className="elementarrow" src="https://luluproject.s3-us-west-1.amazonaws.com/ARROW.svg" />
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Mindfulness Tools</td>
                                      <td>Global</td>
                                      <td>Festivals + Retreats</td>
                                    </tr>
                                    <tr>
                                      <td>Our Gear</td>
                                      <td>Store</td>
                                      <td>Local Classes + Events</td>
                                    </tr>
                                    <tr>
                                      <td>This Just In</td>
                                      <td>Learn More</td>
                                      <td>Online Classes</td>
                                      <td />
                                    </tr>
                                    <tr>
                                      <td>The SweatLife</td>
                                      <td />
                                      <td />
                                      <td />
                                    </tr>
                                  </tbody>
                                </Table>
                              </Container>
                            </Container>
                            <Container className="dropdownelements-bottomrow-container">
                              <Table>
                                <thead>
                                  <tr>
                                    <th>Activity</th>
                                    <th>Swim</th>
                                    <th>Dance</th>
                                    <th>Gymnastics</th>
                                    <th>Gym</th>
                                    <th>Tennis</th>
                                    <th />
                                    <th>SHOP ALL GIRLS</th>
                                  </tr>
                                </thead>
                              </Table>
                            </Container>
                          </Container>
                        </Container>
                      </Container>
                    </NavDropdown>
                    <Nav.Link href="#mother'sdaygift">MOTHER'S DAY GIFTS</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>

              <Container fluid className="rightsidecontainer">
                <Row>
                  <Col>

                    <Nav.Link className="signinborder" href="#signin">SIGN IN</Nav.Link>
                  </Col>
                  <Container fluid className="searchcontainer">

                    <Container fluid className="searchbarlogo-container">
                      <img className="searchbarlogo" src="https://luluproject.s3-us-west-1.amazonaws.com/searchicon.svg" />
                    </Container>
                    <Container fluid className="searchbar-container">

                      <FormControl custom="true" type="text" placeholder=" Search" className="mr-sm-2" />
                      <Form inline />
                    </Container>
                  </Container>
                  <Col xs={1}>
                    <Container fluid className="cartcontainer">
                      <p className="cartNumber">1</p>
                      <img className="shoppingcartlogo" src="https://luluproject.s3-us-west-1.amazonaws.com/athletic+apparel+%2B+technical+clothing+_+lululemon-2.svg" />
                    </Container>
                  </Col>

                </Row>

              </Container>


            </Navbar>

          </div>
        </div>
      </div>

      <div className={classnames('product-nav-container', { 'product-nav-hidden': visible })}>
        <Navbar
          bg="light"
          variant="light"
          sticky="top"
          expand="lg"
        >
          <Container fluid className="product-nav">
            <Navbar.Brand href="#home">{title}</Navbar.Brand>
            <Container fluid>
              <Container fluid className="product-nav-description-container">
                <Nav.Item>Colour:</Nav.Item>
                <Nav.Item>Size:</Nav.Item>
                <Nav.Item>Inseam:</Nav.Item>
              </Container>
            </Container>

            <Button variant="danger" size="sm">SELECT SIZE</Button>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navheader;
