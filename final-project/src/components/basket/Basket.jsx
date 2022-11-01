import React from "react";
import Emptybas from "./Emptybas";
import Fullbasket from "./Fullbasket";
import { useSelector } from "react-redux";
function Basket() {
  const elements = useSelector((state) => state);
  const basketel = elements.basket;
  // console.log(basketel);
  return <div>{basketel.products.length!==0 ? <Fullbasket basketel={basketel} /> : <Emptybas />}</div>;
}

export default Basket;