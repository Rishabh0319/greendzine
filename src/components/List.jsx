import React from "react";
import "./list.css";
import Card from "./Card";

const List = ({ datalist }) => {
  return (
    <div>
      <h1 className="list-title">List View</h1>
      <div className="list-frame">
        {datalist.map((user) => (
          <Card
            key={user.id}
            user_id={user.id}
            first_name={user.first_name}
            avatar={user.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
