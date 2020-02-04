import React, { Component } from "react";
import udemyImage from "./UdemyImages/udemy.png";
import categories from "./UdemyImages/category.png";
import carts from "./UdemyImages/cart.png";
import headerStyle from "./styles/Header.module.css";
class Header extends Component {
  render() {
    return (
      <div className={headerStyle.container}>
        <div className={headerStyle.header}>
          <img src={udemyImage} className={headerStyle.logo} />
          <img src={categories} className={headerStyle.catego} />
          <input
            placeholder="search for anything"
            className={headerStyle.input}
          />

          <p className={headerStyle.business}> Udemy for Business </p>
          <p className={headerStyle.teach}>Teach on Udemy</p>
          <img src={carts} className={headerStyle.cart} />
          <button className={headerStyle.button}>Log In</button>
          <button className={headerStyle.button2}>Sign Up</button>
        </div>
        {/* <div className={headerStyle.main}></div> */}
      </div>
    );
  }
}
export default Header;
