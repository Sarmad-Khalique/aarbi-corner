import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.styles.css";

const MenuItem = ({ title, imageURL, size, linkUrl, history, match }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className="menu-item"
      style={size?{height:"18rem"}:null}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
