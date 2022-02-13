import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/CustomButton";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item flex flex-col items-center h-96 border-2 shadow-lg relative justify-center">
      <div
        className="image mb-2 w-full h-[95%] overflow-hidden"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item-footer w-full h-[5%] flex justify-between items-center mb-2">
        <span className="collection-item-name font-bold text-xl">
          {name.length > 50
            ? name.slice(0, 50).toUpperCase() + "..."
            : name.toUpperCase()}
        </span>
        <span className="collection-item-price font-bold text-xl">
          ${price}
        </span>
      </div>
      <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
