import React from "react";
import "./Links.css";

const Links = ({ links, youtube }) => {
  console.log("LINKS: " + links[0]);
  return (
    <div className="links-wrap">
      <div className="container">
        <ul className="links-list">
          {links.map((item, idx) => {
            return (
              <li>
                <a key={idx} href={item[1]}>
                  {item[0]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Links;
