import React from "react";
import { Link } from "react-router-dom";
function Aksesuar({ el }) {
  // console.log(el);
  // console.log(el?.images[0][0]?.secure_url);
  return (
    <Link to={`/product/${el?._id}`}>
      <div className="acces-card">
        <div className="acces-phone">
          <img src={`${el?.images[0][0]?.secure_url} `} alt="" />
          
        </div>
        <p style={{margin:"10px 4px 0px 10px"}}>
          {el?.name}, {el?.size[0]},
          {el?.color[0]}
        </p>
        <div>
          <span className="cost">{el?.price}</span>{" "}
          <span className="sale">2089</span>
        </div>
      </div>
    </Link>
  );
}

export default Aksesuar;
