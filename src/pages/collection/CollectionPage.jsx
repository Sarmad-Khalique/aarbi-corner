import CollectionItem from "../../components/collection-item/CollectionItem";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <div className="text-center text-4xl font-bold uppercase mb-4">
        {title}
      </div>
      <div className="itmes-container gap-4 grid grid-cols-1 md:grid-cols-4">
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
