import { useEffect } from "react";
import { Route } from "react-router-dom";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";

import { ShopPageContainer } from "./Shop.styles";

import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/CollecionOverview.container";
import CollectionPageContainer from "../collection/CollectionPage.container";

const Shop = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

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

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
