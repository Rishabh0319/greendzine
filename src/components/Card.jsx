import React from "react";
import "./card.css";

const Card = ({ user_id, first_name, avatar }) => {
  return (
    <div className="card">
      <span className="user-id">{user_id}</span>
      <div className="avatar">
        <img src={avatar} alt={first_name} />
      </div>
      <h2>{first_name}</h2>
    </div>
  );
};

export default Card;
