import React from "react";

const Card = ({ hidden, face }) => (
  <div
    className="card"
    style={{
      backgroundImage: hidden ? "url(img/hidden.png)" : `url(img/${face}.png)`,
    }}
  />
);

export default Card;
