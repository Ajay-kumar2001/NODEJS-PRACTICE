import {Link} from "react-router-dom"
import Search from "./navComponents/Search"
import UserDetaile from "./navComponents/UserDetaile"
import  "./CSSstyles/mainNavbar.css"
import BrandImg from "./navComponents/BrandgImg"
let AllLinks=()=>{
    return(<div className="mainNavbar">
        <BrandImg/>
        <Search/>
        <Link className="linkColor" to="/register">Register</Link>
        <Link className="linkColor"to ="/login"> Login</Link>
        <UserDetaile/>
        <Link className="linkColor" to="/cart">Cart</Link>
        

    </div>)
}
  export default AllLinks 
   