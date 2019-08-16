import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";
import CusLinkField from "../components/CusLinkField";

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <CusLinkField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
