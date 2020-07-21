import React from "react";
import Card from "./Card";

const Hand = (props) => (
  <div className="hand">
    {props.showDeck ? <Card hidden={true} /> : ""}

    {props.hand.map(function (card, i) {
      return <Card face={card.f} value={card.v} key={i} />;
    })}
  </div>
);
Hand.defaultProps = { hand: [] };

export default Hand;
