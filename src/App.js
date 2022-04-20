import './App.css';
import {
  BrowserRouter as Router,
  Routes,
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
          <Routes>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>}>
            </Route>
            <Route path="/product/:Id" element={<PrivateRoute><PurchaseProduct></PurchaseProduct></PrivateRoute>}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/myorders" element={<MyOrders />}>
            </Route>
            <Route path="/payment" element={<Payment />}>
            </Route>
            <Route path="/review" element={<Review />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
<<<<<<< HEAD
            <Route path="/products" element={<Products />}>
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
            </Route>
            <Route path="/" element={<Home />}>
=======
            <Route path="/products" element={<Products></Products>}>
            </Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            </Route>
            <Route exact path="/" element={<Home />}>

>>>>>>> 07ad035572c614b4e2019b0fbfa3f92842842fac
            </Route>
          </Routes>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
