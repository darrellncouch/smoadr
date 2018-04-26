import React, { Component } from 'react';

//components
import NavBar from "../components/front-facing/Nav-Bar.jsx";
import Heading from "../components/front-facing/Heading.jsx";

class Main extends Component {
  render () {
    return (
      <div>
          <NavBar/>
          <Heading/>
      </div>
    )
  }
}
export default Main;
