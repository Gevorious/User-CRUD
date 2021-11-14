import React from "react";
import { addUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch();
  const handleValidSubmit = (event, values) => {
    const userData = {
      ...values,
      full_name: `${values.first_name} ${values.last_name}`,
    };
    dispatch(addUser(userData));
  };
  const handleInvalidSubmit = () => {};

  return (
    <div className="add-user-page">
      <AvForm
        onValidSubmit={handleValidSubmit}
        onInvalidSubmit={handleInvalidSubmit}
      >
        <AvField name="first_name" label="First Name" type="text" required />
        <AvField name="last_name" label="Last Name" type="text" required />
        <AvField name="email" label="Email" type="email" required />
        <AvField name="address" label="Address" type="text" required />
        <AvField name="tel" label="Tel" type="text" required />
        <Button color="primary">ADD</Button>
      </AvForm>
      <Link to="/">Back</Link>
    </div>
  );
};

export default AddUser;
