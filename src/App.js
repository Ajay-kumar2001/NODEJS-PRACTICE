import AllLinks from './AllLinks';
import './App.css';
import { BrowserRouter ,Route,Routes} from "react-router-dom"
import Register from './navComponents/Register';
import Login from './navComponents/Login';
import CartImg from './navComponents/CartImg';


function App() {
  return (
    <BrowserRouter>
    <AllLinks/>

    
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="login" element={<Login/>} />
      <Route path="/cart" element={< CartImg/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
