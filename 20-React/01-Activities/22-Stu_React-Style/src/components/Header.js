import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  header: {
    fontSize: '1.2 rem',
    background: 'red'
  },
  h1: {
    color: 'blue'
  }
}

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={styles.header} className="header">
      <h1 style={styles.h1}>Welcome</h1>
    </header>
  );
}

export default Header;
