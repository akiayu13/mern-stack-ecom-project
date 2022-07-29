import "./App.css";
import Header from "./component/layout/Navbar/Header.js";
import Footer from "./component/layout/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";
import React from "react";
import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./store";
import { loadUser } from "./actions/userAction";
//import { useSelector } from "react-redux";
import Cart from "./component/Cart/Cart";
import NewProduct from "./component/Admin/NewProduct";
import DeleteProduct from "./component/Admin/DeleteProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import Dashboard from "./component/Admin/Dashboard";
function App() {
  //const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Montserrat"],
      },
    });
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={withRouter(Home)} />
        <Route exact path="/" component={withRouter(Home)} />
        <Route exact path="/login" component={withRouter(LoginSignUp)} />
        <Route exact path="/admin" component={Dashboard} />
        <Route exact path="/admin/product" component={withRouter(NewProduct)} />
        <Route
          exact
          path="/admin/update"
          component={withRouter(UpdateProduct)}
        />
        <Route
          exact
          path="/admin/delete"
          component={withRouter(DeleteProduct)}
        />
        <Route exact path="/signin" component={withRouter(LoginSignUp)} />
        <Route exact path="/cart" component={withRouter(Cart)} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
