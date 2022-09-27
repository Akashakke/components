import './App.css';
import Portal from './Portal';
import Dashboard from './Dashboard';
import Users from './Users';
import Products from './Products';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Userview from './Userview';
import Createuser from './Createuser';
import Login from './Login';
import EditUser from './EditUser';
import Demo from './Demo';
import { UserProvider } from './userContext';
import Profile from './Profile';



function App() {
  return (
    <BrowserRouter> 
<UserProvider>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/portal" element={<Portal/>}>
  <Route path="dashboard" element={<Dashboard/>}/> 
  <Route path="users" element={<Users/>}/>
  <Route path="profile" element={<Profile/>}/> 
  <Route path="products" element={<Products/>}/> 
  <Route path="create-user" element={<Createuser/>}/> 
  <Route path ="users/:id" element={<Userview/>}/> 
  <Route path ="user/edit/:id" element={<EditUser/>}/> 
  </Route>
</Routes>
</UserProvider>
</BrowserRouter>

  );
}

export default App;
