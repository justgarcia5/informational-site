import React from 'react';
import Logo from '../logo.svg'

import {
  Navbar,
  Nav,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons/'


export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" color="grey">
        <Navbar.Brand href="#home" className="pl-5">
          <img
            alt=""
            src={Logo}
            className="d-inline-block align-top"
            style={styles.font}
          />{' '}
          React Bootstrap
        </Navbar.Brand>
        <Nav className="ml-auto pr-5">
          <Nav.Link href="#coffee"><FontAwesomeIcon icon={faFacebook} style={styles.font} /></Nav.Link>
          <Nav.Link href="#coffee"><FontAwesomeIcon icon={faInstagram} style={styles.font} /></Nav.Link>
          <Nav.Link href="#coffee"><FontAwesomeIcon icon={faTwitter} style={styles.font} /></Nav.Link>
          <Nav.Link href="#home" style={styles.font}>Home</Nav.Link>
          <Nav.Link href="#features" style={styles.font}>About</Nav.Link>
          <Nav.Link href="#pricing" style={styles.font}>Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

const styles = {
  font: {
    color: "white",
  }
}
