import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import SuggSlider from './components/SuggSlider.jsx'
import navigationheader from './components/navigationheader.jsx'

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      products: ''
    }
  };

//-------make this more dyanamic, temperat literal male/femal/ into the endpoints. Pulls only the data needed.
  getData() {
    axios
      .get('/api/products')
      .then((data) =>{
        this.setState ({
          products: data.data
        })
      })
      .catch()
  }

  render() {
    return (
      <div>
        <h1></h1>

        <div><SuggSlider /></div>

      </div>
    )
  };
};

ReactDom.render(<App />, document.getElementById('root'));
