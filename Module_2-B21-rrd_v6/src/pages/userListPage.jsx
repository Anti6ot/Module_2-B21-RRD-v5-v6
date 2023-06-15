import React from "react";
import { Link } from "react-router-dom";

const UsersListPage = () => {
  const users = [
    {
      id: 1,
      user: "user 1",
    },
    {
      id: 2,
      user: "user 2",
    },
    {
      id: 3,
      user: "user 3",
    },
    {
      id: 4,
      user: "user 4",
    },
  ];
  return (
    <div>
      <div>UserListPage</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link to={`${u.id}`}>{u.user}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersListPage;
