import React from "react";
import { Link } from "react-router-dom";
import "./PageCard.css";

const PageCard = ({ title, youtube }) => {
  return (
    <>
      {title === "YouTube" ? (
        <a className="pageCard-btn link" href={youtube}>{title}</a>
      ) : (
        <Link to={`links`} className="pageCard-btn link">
          {title}
        </Link>
      )}
    </>
  );
};

export default PageCard;
