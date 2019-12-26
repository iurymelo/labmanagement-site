import React, {Component} from 'react'

import Aux from "../Auxiliary";
import Navbar from "../../components/Layout/Navbar/Navbar";

import classes from './Layout.module.css'

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar/>
        <main>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;
