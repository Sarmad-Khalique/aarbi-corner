import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";

import { ShopPageContainer } from "./Shop.styles";
const Shop = ({ match }) => {
  return (
    <ShopPageContainer>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        path={`${match.path}/:collectionName`}
        component={CollectionPage}
      />
    </ShopPageContainer>
  );
};

export default Shop;
