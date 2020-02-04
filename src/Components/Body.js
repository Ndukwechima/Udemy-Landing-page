import React, { Components } from "react";
import cat from "./UdemyImages/background.jpg";
import bodyStyle from "./styles/Body.module.css";

class Body extends Components {
  reender() {
    return (
      <div>
        <img src={cat} className={bodyStyle.backg} />
      </div>
    );
  }
}

export default Body;
