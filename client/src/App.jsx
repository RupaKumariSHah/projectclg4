import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Cart from "./pages/Cart";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  const user = true;
  // position="top-right" autoClose={1000}
  //     hideProgressBar={false}
  //     newestOnTop={false}
  //     closeOnClick rtl={false}
  //     pauseOnFocusLoss draggable pauseOnHover theme="dark"
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/success">
            <Success />
          </Route>

          {/*<Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>*/}
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
