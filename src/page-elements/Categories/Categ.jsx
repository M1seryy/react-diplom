import React from "react";
import "./Categ.css";

const Categ = ({ title, filtType, set, data }) => {
  console.log(data);
  return (
    <button
      onClick={() => filtType(data, title)}
      className="button-69"
      role="button"
    >
      {title}
    </button>
  );
};

export default Categ;
