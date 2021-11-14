import React from "react";
import { Link } from "react-router-dom";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <div className="main-container">
      <UserList />
      <div className="add-user-wrapper">
        <Link to="/add-user">
          <div className="add-usr-btn"></div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
