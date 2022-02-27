import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/CollectionItem";

import "./CollectionPreview.styles.css";

const CollectionPreview = ({ title, items, routeName }) => {
  items = items.length > 4 ? items.slice(1, 5) : items;
  return (
    <div className="collection-preview-group">
      <div className="collection-title">
        <Link to={`/${routeName}`}>{title.toUpperCase()}</Link>
      </div>
      <div className="collection-preview">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
