import { Component } from "react";
import { Route } from "react-router-dom";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";

import { ShopPageContainer } from "./Shop.styles";

import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/CollecionOverview.container";
import CollectionPageContainer from "../collection/CollectionPage.container";

class Shop extends Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;

    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
