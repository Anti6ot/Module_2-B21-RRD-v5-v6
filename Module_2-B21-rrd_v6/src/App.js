import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import UsersListPage from "./pages/userListPage";
import UserPage from "./pages/userPage";
import UserEditPage from "./pages/userEditPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="users/:userId?/edit" element={<UserEditPage />} />
        <Route path="users/:userId" element={<UserPage />} />
        <Route path="users" element={<UsersListPage />} />
        <Route path="" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
