import React from "react";

import CollectionItem from "../../components/collection-item/CollectionItem";

import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemContainer,
} from "./CollectionPage.styles";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const urlParams = useParams();
  const collection = useSelector(selectCollection(urlParams.collectionName));

  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
