import React from 'react'
import { useEffect } from "react";
import { Route } from "react-router-dom";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";

import { ShopPageContainer } from "./Shop.styles";

import { useDispatch } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/CollecionOverview.container";
import CollectionPageContainer from "../collection/CollectionPage.container";

const Shop = ({ match }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <ShopPageContainer>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionName`}
        component={CollectionPageContainer}
      />
    </ShopPageContainer>
  );
};

export default Shop;
