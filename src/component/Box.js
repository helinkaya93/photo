import React from "react";
import "./Box.css";
export default function Box({ img, desc }) {
  return (
    <div className="box">
      <img src={img} className="img" alt={"img"} />
      <p className="desc">{desc}</p>
    </div>
  );
}
