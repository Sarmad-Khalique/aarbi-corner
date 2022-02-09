import React from "react";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title font-bold text-3xl my-4 p-2">{title.toUpperCase()}</div>
      <div className="preview">
        {
          items.map(({id,title})=><div key={id}>{title.toUpperCase()}</div>)
        }
      </div>
    </div>
  );
};

export default CollectionPreview;
