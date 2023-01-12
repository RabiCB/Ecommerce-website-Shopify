import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "react-use-cart";
import ShoppingCard from "./ShoppingCard";
import { Link, useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import LandingPage from "./LandingPage";
import {UserAuth} from './AuthContext'
import Footer from "./Footer";


const Navbar = ({ themetoggler, theme }) => {
  const [nav, setNav] = useState(false);
  const { totalUniqueItems } = useCart();
  const [search, setSearch] = useState("");
  const [logoutbtn, setlogout] = useState(false);
  const {logout,currentUser}=UserAuth();
  return (
    <>
      <div className="navbar  relative">
        <div>
          <h4 className="text-xl font-bold">Shopify</h4>
        </div>
        <input
          className=" searchbar border-none h-7  rounded-sm outline-none pl-2 text-black max-sm:hidden"
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className={nav ? "itemsExpanded" : "items"}>
          <li>
            <ReactSwitch onChange={themetoggler} checked={theme === "dark"} />
          </li>
          <div onClick={() => setlogout(!logoutbtn)} className=" profile relative">
            {currentUser ? (
              <p className="cursor-pointer">{currentUser.displayName?currentUser.displayName:currentUser.email}</p>
            ) : (
              "no user"
            )}
            {logoutbtn ? (
              <div className="gap-6 pt-4 flex flex-col items-center  absolute rounded-md top-12 w-36 h-36 bg-slate-300">
              <p className="text-black text-xs p-1 ">{currentUser.email}</p>
              <button
                onClick={logout}
                className="border-none   rounded-md bg-blue-600 text-md hover:bg-blue-400 w-20 flex items-center justify-center h-9 "
              >
                logout
              </button>

              </div>
            ) : (
              ""
            )}
          </div>

          <Link style={{ textDecoration: "none" }} to="/cart">
            <AiOutlineShoppingCart className="w-10 cursor-pointer hover:color-slate-300" />
          </Link>
          <span className="absolute  right-1 mb-7 max-md:hidden">
            {totalUniqueItems}
          </span>
          <GiCancel onClick={() => setNav(false)} className="cancel" />
        </ul>

        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setNav(!nav)} />
        </div>
      </div>
      <LandingPage/>
      <ShoppingCard search={search} />
      <Footer/>
    </>
  );
};

export default Navbar;
