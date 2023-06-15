import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div>HomePage</div>
      <ul>
        <li>
          <Link to="users">Users list</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
