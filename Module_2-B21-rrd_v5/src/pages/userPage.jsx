import React from "react";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>UserPage</h1>
      <ul>
        <li>
          <Link to="/users">usersList</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}>UserEditPage</Link>
        </li>
      </ul>
      UserId:{userId}
    </div>
  );
};

export default UserPage;
