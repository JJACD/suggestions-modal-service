import React, {useState} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

import { MOCK_CATEGORIES } from "./categories";

import { ReactMegaMenu } from "react-mega-menu"

const values = ["LEFT", "RIGHT"];

 const Navigationheader = (props) => {

  const [direction, setDirection] = useState(values[1])


  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: `${
            direction !== "LEFT" ? "row" : "row-reverse"
          }`
        }}
      >
        <img className="headerlogo" src="https://luluproject.s3-us-west-1.amazonaws.com/1200px-Lululemon_Athletica_logo.svg.png"/>

        <ReactMegaMenu
          styleConfig={{
            menuProps: {
              style: {
                display: "contents",
                border: "2px solid red",
                width: "100%",
                padding: "2px",
                margin: "auto",
                position: "relative",
                textalign: "center"

              }
            },
            contentProps: {
              style: {
                display: "inline",
                width: "10em",
                border: "2px solid yellow",
                padding: "2px",
                position: "relative"
              }
            },
            menuItemProps: {
              style: {
                display: "inline",
                float: "left",
                border: "2px solid green",
                padding: "1em",
                height: "1em",
                margin: "auto",
              }
            },
            menuItemSelectedProps: {
              style: {
                border: "2px solid purple",
                padding: "1em",
                height: "1em",
                backgroundColor: "grey"
              }
            },
            containerProps: {
              style: {
                position: "static",
                border: "2px solid blue",
                padding: "2px",
                margin: "auto",
                height: "flex",
                width: "100%"
              }
            }
          }}
          direction={direction}
          data={MOCK_CATEGORIES}
        />
      </div>

    </div>
  );
}

export default Navigationheader;