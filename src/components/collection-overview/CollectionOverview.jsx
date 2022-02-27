import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/CollectionPreview";

import { selectCollectionPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

import "./CollectionOverview.styles.css";

const CollectionOverview = ({ collections }) => {
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

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
