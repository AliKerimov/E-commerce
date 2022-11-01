import React from "react";
import Myorders from "./Myorders";
import Profile from "./Profile";
function Myprofile() {
  return (
    <div className="myp-cont">
      <div className="my-prof">
        <Profile />
        <Myorders />
      </div>
    </div>
  );
}

export default Myprofile;
