import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, EditGuesser } from "react-admin";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { UserList } from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./auth/provider";
import LoginPage from "./pages/Login";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    loginPage={LoginPage}
    dashboard={Dashboard}
    authProvider={AuthProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} edit={EditGuesser} icon={UserIcon} />
  </Admin>
);

export default App;
