import React from "react";
import { useState } from "react";
import logo from "../../images/logo.jpg";
import Headercateg from "./Headercateg";
import Menu from "./Menu";
import Modal from "./Modal";
function Navbar({category}) {
  const [toggle, setToggle] = useState(true);
  function toggleHandler() {
    setToggle(!toggle);
  }
  
  if (toggle) {
    return (
      <div className="green-border">
        <Menu  toggleHandler={toggleHandler} logo={logo} />
      </div>
    );
  } else {
    return <Modal toggleHandler={toggleHandler} logo={logo} />;
  }
}

export default Navbar;
