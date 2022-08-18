import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Portal from './Portal';
import Dashboard from './dashboard';
import Users from './Users';
import Products from './Products';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Userview from './Userview';
import Createuser from './Createuser';
import Login from './Login';


function App() {
  return (
    <BrowserRouter>
    
    
<Routes>
  
  <Route path="dashboard" element={<Dashboard/>}/>
  <Route path="/portal" element={<Portal/>}/> 
  <Route path="/" element={<Login/>}/>
  <Route path="/users" element={<Users/>}/> 
  
  <Route path="products" element={<Products/>}/> 
  <Route path="create-user" element={<Createuser/>}/> 
  <Route path ="users/:userid" element={<Userview/>}/> 
</Routes>

</BrowserRouter>

  );
}

export default App;
