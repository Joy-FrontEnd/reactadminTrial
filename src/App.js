// in src/App.js
import * as React from "react";
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./Components/UserList"
import { PostList } from "./Components/PostList"
import { EditPost } from "./Components/EditPost"
import { PostCreate} from "./Components/PostCreate"
import { Dashboard } from "./Components/Dashboard"


const dataProvider = jsonServerProvider
 (
'https://jsonplaceholder.typicode.com'
 );
const App = () => ( <Admin dashboard= {Dashboard} dataProvider={dataProvider}>
  <Resource name="users" list={UserList}  />
  <Resource name="posts" list={PostList} edit={EditPost} />
   <Resource name="create" list={PostCreate} create={PostCreate} />
</Admin>

);




export default App;
