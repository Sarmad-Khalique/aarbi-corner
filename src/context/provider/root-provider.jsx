import { createContext } from "react";
import CartProvider from "./cart/cart.provider";
import DirectoryProvider from "./directory/directory.provider";
import ShopProvider from "./shop/shop.provider";
import UserProvider from "./user/user.provider";

const RootContext = createContext();

const RootProider = ({ children }) => {
  return (
    <RootContext.Provider>
      <ShopProvider>
        <CartProvider>
          <DirectoryProvider>
            <UserProvider>{children}</UserProvider>
          </DirectoryProvider>
        </CartProvider>
      </ShopProvider>
    </RootContext.Provider>
  );
};

export default RootProider;