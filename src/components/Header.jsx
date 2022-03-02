import React, { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import '@styles/Header.scss'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'

import { Menu } from "./Menu";
import { AppContext } from "../context/AppContext";
import { MyOrder } from '../containers/MyOrder';


const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false)
  const {state} = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return(
    <nav>
      <img src={menu} alt="menu" className="menu"/>
        <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo"/>
            <ul>
              <li>
                <NavLink to={"/"}>All</NavLink>
              </li>
              <li>
                <NavLink to={"/clothes"}>Clothes</NavLink>
              </li>
              <li>
                <NavLink to={"/electronics"}>Electronics</NavLink>
              </li>
              <li>
                <NavLink to={"/furnitures"}>Furnitures</NavLink>
              </li>
              <li>
                <NavLink to={"/toys"}>Toys</NavLink>
              </li>
              <li>
                <NavLink to={"/others"}>Others</NavLink>
              </li>
            </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email"
            onClick={handleToggle}
            onBlur={() => setToggle(false)}>
              platzi@example.com
            <ul className="navbar-email-menu">
              <li>
                {toggle && <Menu />}
              </li>
            </ul>
            </li>
            <li className="navbar-shopping-cart"
                onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoppingCart} alt="shopping cart"/>
            {
              state.cart.length > 0 ? <div>{state.cart.length}</div> : null
            }
            </li>
          </ul>
        </div>
        {
          toggleOrders && <MyOrder/>
        }
    </nav>
  )
}

export {Header}