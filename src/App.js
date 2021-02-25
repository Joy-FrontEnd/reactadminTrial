// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./Components/UserList"
import { PostList } from "./Components/PostList"
import { EditPost } from "./Components/EditPost"

const dataProvider = jsonServerProvider
 (
'https://jsonplaceholder.typicode.com'
 );
const App = () => ( <Admin dataProvider={dataProvider}>
  <Resource name="users" list={UserList}  />
  <Resource name="posts" list={PostList} edit={EditPost} />
</Admin>

);




export default App;
