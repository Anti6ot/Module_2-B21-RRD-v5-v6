import React from "react";
import { Link } from "react-router-dom";

const UsersListPage = ({ users }) => {
  return (
    <>
      <h1>UsersListPage</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`users/${u.id}`}>{u.user}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersListPage;
