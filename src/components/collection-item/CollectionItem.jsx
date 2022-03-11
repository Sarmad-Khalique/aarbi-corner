import React from 'react'
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  FooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  AddButton,
} from "./CollectionItem.styles";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <FooterContainer>
        <NameContainer>
          {name.length > 50
            ? name.slice(0, 50).toUpperCase() + "..."
            : name.toUpperCase()}
        </NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </FooterContainer>
      <AddButton inverted onClick={() => dispatch(addItem(item))}>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
