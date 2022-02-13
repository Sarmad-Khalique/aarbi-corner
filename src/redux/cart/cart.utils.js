const addItemToCart = (cartItems, newItem) => {
  const isExist = cartItems.find((cartItem) => cartItem.id === newItem.id);

  if (isExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export default addItemToCart;
