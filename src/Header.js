import React from 'react';
import img from './pngimg.com - amazon_PNG1.png';
import  "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { useStateValue } from './Stateprovider';
import { Link } from "react-router-dom";
import {auth} from "./firebase"
import { Storefront } from '@mui/icons-material';


function Header() {
   const [{ basket, user }, dispatch] = useStateValue();
   const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }

  return (
    <div className="header">
      <Link to="/">
      
      <img className="logo" src={img} />
      </Link>
      <div className="header_search">
         <input className="header_searchinput" type="search"/>
         <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
      <Link to={!user && '/login'}>

        <div onClick={handleAuthenticaton} className="header_options">

         <span className="header_optionLineOne">
            Hello  {!user ? 'Guest' : user.email}
         </span>
         <span className="header_optionLineTwo">
         {user ? 'Sign Out' : 'Sign In'}
         </span>

        </div>
        </Link>
        <Link to='/orders'>
        <div className="header_options">
        <span className="header_optionLineOne">
            Return
         </span>
         <span className="header_optionLineTwo">
            Orders
         </span>
        </div>
        </Link>
        <div className="header_options">
        <span className="header_optionLineOne">
            Your
         </span>
         <span className="header_optionLineTwo">
            Prime
         </span>
        </div>

        <Link to="/checkout">
<div className="header_backetIcon">
    <ShoppingBasket />
    <span className="header_optionLineTwo header_basketCount" >
    {basket?.length}
    </span>
</div>
</Link>
      </div>
    </div>
  )
}

export default Header
