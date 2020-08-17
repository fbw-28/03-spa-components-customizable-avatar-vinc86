import React from "react";
import avatar from "./avatar.jpg";
import "./avatar.css";

const Avatar = ({ width, height, type, size }) => {
  return (
    <div className="avatar-container">
      <img className={`avatar-${size} ${type}`} alt="avatar" src={avatar}></img>
      <p>
        size <strong>{size.toUpperCase()}</strong> with {width}x{height}
      </p>
      <p>
        type <strong>{type}</strong>
      </p>
    </div>
  );
};

export default Avatar;
