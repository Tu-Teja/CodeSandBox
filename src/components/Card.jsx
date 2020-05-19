import React from "react";
import Avatar from "./Avatar";
import CustomDetails from "./CustomDetails";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <CustomDetails detailinfo={props.tel} />
        <CustomDetails detailinfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
