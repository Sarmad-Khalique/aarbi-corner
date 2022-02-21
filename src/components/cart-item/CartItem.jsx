import "./CartItem.styles.css"

const CartItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {price} x {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
