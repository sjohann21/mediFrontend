import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./mediCartHelpers";

const MediCard = ({
  clinicUser,
  showViewClinicUserButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveClinicUserButton = false,
  setRun = f => f,
  run = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(clinicUser.count);

  const showViewButton = showViewClinicUserButton => {
    return (
      showViewClinicUserButton && (
        <Link to={`/clinic-users/${clinicUser._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
            View clinic user
          </button>
        </Link>
      )
    );
  };

  const addToCart = () => {
    // console.log('added');
    addItem(clinicUser, setRedirect(true));
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <button
          onClick={addToCart}
          className="btn btn-outline-warning mt-2 mb-2 card-btn-1  "
        >
          Add to cart
        </button>
      )
    );
  };

  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock </span>
    );
  };

  const handleChange = clinicUserId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(clinicUserId, event.target.value);
    }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input
              type="number"
              className="form-control"
              value={count}
              onChange={handleChange(clinicUser._id)}
            />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = showRemoveClinicUserButton => {
    return (
      showRemoveClinicUserButton && (
        <button
          onClick={() => {
            removeItem(clinicUser._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove clinic user
        </button>
      )
    );
  };
  return (
    <div className="card ">
      <div className="card-header card-header-1 ">{clinicUser.lname}</div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage item={clinicUser} url="clinicUser" />
        <p className="card-p  mt-2">
          {clinicUser.description.substring(0, 100)}{" "}
        </p>
        <p className="card-p black-10">$ {clinicUser.email}</p>
        <p className="black-9">
          Category: {clinicUser.clinic && clinicUser.clinic.name}
        </p>
        <p className="black-8">
          Added on {moment(clinicUser.createdAt).fromNow()}
        </p>
        {showStock(clinicUser.quantity)}
        <br />
        {showViewButton(showViewClinicUserButton)}
        {showAddToCartBtn(showAddToCartButton)}
        {showRemoveButton(showRemoveClinicUserButton)}
        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div>
  );
};

export default MediCard;
