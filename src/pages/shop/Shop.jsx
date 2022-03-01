import { Component } from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";

import {
  convertCollectionsToMap,
  firestore,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionPage from "../collection/CollectionPage";

import { ShopPageContainer } from "./Shop.styles";

import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromFirestore = null;
  componentDidMount() {
    const { updateCollection } = this.props;

    let CollectionRef = firestore.collection("collection");

    this.unsubscribeFromFirestore = CollectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMap = convertCollectionsToMap(snapshot);
        updateCollection(collectionMap);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <ShopPageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionName`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
