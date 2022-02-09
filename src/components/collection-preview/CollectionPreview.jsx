import React from "react";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title font-bold text-3xl my-4 py-2">{title.toUpperCase()}</div>
      <div className="preview grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {
          items.map(({id, ...otherItemProps})=><CollectionItem key={id} {...otherItemProps}/>)
        }
      </div>
    </div>
  );
};

export default CollectionPreview;
