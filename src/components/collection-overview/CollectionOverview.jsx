import React from 'react'

import CollectionPreview from "../collection-preview/CollectionPreview";

import { selectCollectionPreview } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";

import "./CollectionOverview.styles.css";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionPreview);

  return (
    <>
      <h1 className="collection">COLLECTIONS</h1>
      <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    </>
  );
};


export default CollectionOverview;
