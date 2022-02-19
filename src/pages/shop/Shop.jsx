import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";

const Shop = ({ match }) => {
  return (
    <div className="shop-page px-6">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        path={`${match.path}/:collectionName`}
        component={CollectionPage}
      />
    </div>
  );
};

export default Shop;
