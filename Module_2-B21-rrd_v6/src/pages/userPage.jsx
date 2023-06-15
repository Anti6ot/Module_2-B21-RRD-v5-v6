import React from "react";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  return (
    <div>
      <div>UserPage</div>
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
