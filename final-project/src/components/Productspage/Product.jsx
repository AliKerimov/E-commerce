import React from "react";

function Product({el}) {
  return (
    <div className="products-card">
      <div className="products-phone">
        {/* <img src={el?.assets[0]?.url} alt="" /> */}
        <img src={`${el?.images[0][0]?.secure_url} `} alt="" />
      </div>
      <p>
        {" "}
        {el?.name} {el?.size[0]}
        <br /> {el?.color[0]}
      </p>
      <div>
        <span className="cost">{el?.price}</span>{" "}
        <span className="sale">2089</span>
      </div>
    </div>
  );
}

export default Product;
