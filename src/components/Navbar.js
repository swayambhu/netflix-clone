/** @format */

import classes from "./Navbar.module.css";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [handleShow, setHandleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setHandleShow(true)
            }else{
                setHandleShow(false)
            }
        })
    },[])
  return (
    <div className={`${classes.nav} ${handleShow && classes.nav__black}`}>
      <img
        className={`${classes.nav__logo}`}
        src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        alt='Netflix Logo'
      />

      <img
        className={classes.nav__avatar}
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix avatar'
      />
    </div>
  );
};

export default Navbar;
