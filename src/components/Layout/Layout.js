import React, {Component} from 'react'
import Aux from "../../hoc/Auxiliary";
import Navbar from "./Navbar/Navbar";

import classes from './Layout.module.css'

class Layout extends Component {

  render() {
    return (
      <Aux>
        <Navbar/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
};

export default Layout;
