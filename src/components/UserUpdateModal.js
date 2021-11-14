import React, { useEffect } from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { transformData } from "../helpers/transformData";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/userSlice";

const UserUpdateModal = ({ id, setId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const handleValidSubmit = (event, values) => {
    const user = {
      ...values,
      full_name: `${values.first_name} ${values.last_name}`,
    };
    dispatch(updateUser({ user, id }));
    setId("");
  };

  const user = transformData(users).find((item) => item.key === id);
  const defaultValues = {
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.email,
    address: user?.address,
    tel: user?.tel,
  };

  return (
    <>
      <div className="backdrop" onClick={() => setId("")}></div>
      <div className="user-update-modal">
        {user && (
          <AvForm onValidSubmit={handleValidSubmit} model={defaultValues}>
            <AvField
              name="first_name"
              label="First Name"
              type="text"
              required
            />
            <AvField name="last_name" label="Last Name" type="text" required />
            <AvField name="email" label="Email" type="email" required />
            <AvField name="address" label="Address" type="text" required />
            <AvField name="tel" label="Tel" type="text" required />
            <div>
              <Button color="primary">Update</Button>
            </div>
          </AvForm>
        )}
      </div>
    </>
  );
};

export default UserUpdateModal;
