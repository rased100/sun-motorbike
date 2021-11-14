import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PurchaseProduct from './Pages/PurchaseProduct/PurchaseProduct';
import Products from './Pages/Products/Products';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Payment from './Pages/Payment/Payment';
import Review from './Pages/Review/Review';
import MyOrders from './Pages/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Navigation></Navigation> */}
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/about">
              <About />
            </PrivateRoute>
            <PrivateRoute path="/product/:Id">
              <PurchaseProduct></PurchaseProduct>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/myorders">
              <MyOrders />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
