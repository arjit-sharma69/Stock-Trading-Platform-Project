import React, {useState} from "react";
import {Link} from 'react-router-dom';



const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const[isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) =>{
    setSelectedMenu(index);
  }

  const handleProfileClick = (index) =>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <Link to="/" className={selectedMenu ===0 ? activeMenuClass: menuClass} onClick={()=>handleMenuClick(0)} style={{cursor:"pointer"}}>
          <li>
            <p>Dashboard</p>
          </li>
          </Link>
          
         <Link to="/orders" className={selectedMenu ===0 ? activeMenuClass: menuClass} onClick={()=>handleMenuClick(1)}>
          <li>
            <p>Orders</p>
          </li>
          </Link>

          <Link to="/holdings" className={selectedMenu ===0 ? activeMenuClass: menuClass} onClick={()=>handleMenuClick(2)}>
          <li>
            <p>holdings</p>
          </li>
          </Link>
          <Link to="/positions" className={selectedMenu ===0 ? activeMenuClass: menuClass} onClick={()=>handleMenuClick(3)}>
          <li>
            <p>positions</p>
          </li>
          </Link>
          <Link to="/funds" className={selectedMenu ===0 ? activeMenuClass: menuClass} onClick={()=>handleMenuClick(4)}>
          <li>
            <p>funds</p>
          </li>
          </Link>
           <Link to="/apps" className={selectedMenu ===0 ? activeMenuClass: menuClass} onClick={()=>handleMenuClick(6)}>
          <li>
            <p>apps</p>
          </li>
          </Link>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
