import CollectionItem from "../../components/collection-item/CollectionItem";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./CollectionPage.styles.css"

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="title">
        {title}
      </div>
      <div className="items-container">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionName)(state),
});

export default connect(mapStateToProps)(CollectionPage);
