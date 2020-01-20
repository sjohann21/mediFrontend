import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Signup from './user/Signup'
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from "./auth/AdminRoute";
import Dashboard from './user/UserDashboard'
import AdminDashboard from "./user/AdminDashboard";
// import AddClinic from "./admin/AddClinic";
import AddClinic from "./core/AddClinic";
import AddClinicUser from "./core/AddClinicUser";
import AddVendorUser from "./core/AddVendorUser";
import AddJane from "./core/AddJane2";
import AddCategory from './admin/AddCategory'
import AddCapacity from './admin/AddCapacity'
import AddProduct from "./admin/AddProduct";
import AddVendor from "./admin/AddVendor";
import UpdateProduct from "./admin/UpdateProduct";
import Shop from './core/Shop'
import Clinic from "./core/Clinic";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/product/:productId" exact component={Product} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/create/jane" exact component={AddJane} />
          <Route path="/create/clinic" exact component={AddClinic} />
          <Route path="/create/clinic/user" exact component={AddClinicUser} />
          <Route path="/create/vendor/user" exact component={AddVendorUser} />
          <Route path="/clinic" exact component={Clinic} />
          <Route path="/" exact component={Home} />
          
          <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/profile/:userId" exact component={Profile} />
          <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct}/>
          <AdminRoute path="/admin/products" exact component={ManageProducts} />
          <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>

          <AdminRoute path="/create/category" exact component={AddCategory} />
          <AdminRoute path="/create/capacity" exact component={AddCapacity} />
          <AdminRoute path="/create/product" exact component={AddProduct} />
          <AdminRoute path="/create/vendor" exact component={AddVendor} />
          <AdminRoute path="/admin/orders" exact component={Orders} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    );
}

export default Routes