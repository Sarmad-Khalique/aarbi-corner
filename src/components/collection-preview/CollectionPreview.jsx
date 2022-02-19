import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items, routeName }) => {
  items = items.length > 4 ? items.slice(1, 4) : items;
  return (
    <div className="collection-preview">
      <div className="collection-title font-bold text-3xl my-4 py-2 hover:opacity-70 hover:underline">
        <Link to={`/${routeName}`}>{title.toUpperCase()}</Link>
      </div>
      <div className="collection-preview grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
