import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import UsersListPage from "./pages/usersListPage";
import UserPage from "./pages/userPage";
import UserEditPage from "./pages/userEditPage";
function App() {
  const users = [
    {
      id: 1,
      user: "user 1", //s
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
      <Switch>
        <Route path="/users/:userId?/edit" component={UserEditPage} />
        <Route path="/users/:userId" component={UserPage} />
        <Route path="/users">
          <UsersListPage users={users} />
        </Route>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
