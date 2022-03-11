import { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import Header from "./components/header/Header";

import SignInandSignUpPage from "./pages/SignInandSignUpPage/SignInandSignUpPage";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { Redirect } from "react-router-dom";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInandSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
