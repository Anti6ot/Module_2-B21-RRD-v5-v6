import React from "react";
import { Link, useParams } from "react-router-dom";

const UserEditPage = () => {
  const { userId } = useParams();
  console.log(userId);
  return (
    <div>
      <h1>UserEditPage</h1>
      <ul>
        <li>
          <Link to={`/users/${userId}`}>userPage</Link>
        </li>
        <li>
          <Link to="/users">usersList</Link>
        </li>
        <li>
          <Link to={`/users/${+userId + 1}`}>another user page</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserEditPage;
