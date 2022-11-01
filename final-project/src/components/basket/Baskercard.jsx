import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  incrementCardQuan, decrementcardQuan,removeBasket } from "../../redux/basketSlice";
import { ToastContainer, toast } from 'react-toastify';
function Baskercard({ el,ind }) {
  const notify = () => toast("Silindi!",{position:'bottom-right'});
  const dispatch = useDispatch();
  const price =
  el?.product?.price?.raw +
  el?.product?.variant_groups?.[0]?.options?.[el.imgindex]?.price?.raw +
  el?.product?.variant_groups?.[0]?.options?.[el.sizeindex]?.price?.raw;
  const count = useSelector((state) => state.basket.products[ind].cartQuantity);
  
  return (
    <div className="fbasket-cards">
      <div className="fbasket-img">
        <img src={el?.product?.assets[el.imgindex]?.url} alt="" />
      </div>
      <div>
        <p className="fbasket-info">
          {el?.product?.name}{" "}
          {el.product?.variant_groups[0]?.options[el.sizeindex]?.name}{" "}
          {el.product?.variant_groups[1]?.options[el.imgindex]?.name}
        </p>
        <p className="fbasket-details">
          <p>
            Rəng: {el.product?.variant_groups[1]?.options[el.imgindex]?.name}
          </p>
          <span className="cost">{price}</span>
          <span className="sale fbasket-sale">2089</span>
        </p>
      </div>
      <div className="fbasket-counter">
        <span style={{ cursor: "pointer" }} onClick={()=>{dispatch(decrementcardQuan(el))}}>-</span>
        <span>{count}</span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(incrementCardQuan(el));
          }}
        >
          +
        </span>
      </div>
      <div onClick={()=>{dispatch(removeBasket(el));notify()}} style={{ cursor: "pointer" }} className="del-basket">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.900391 4.54541H2.70039H17.1004"
            stroke="#DB2C66"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.39922 4.54542V2.72724C5.39922 2.24503 5.58886 1.78257 5.92643 1.44159C6.26399 1.10062 6.72183 0.909058 7.19922 0.909058H10.7992C11.2766 0.909058 11.7344 1.10062 12.072 1.44159C12.4096 1.78257 12.5992 2.24503 12.5992 2.72724V4.54542M15.2992 4.54542V17.2727C15.2992 17.7549 15.1096 18.2174 14.772 18.5583C14.4344 18.8993 13.9766 19.0909 13.4992 19.0909H4.49922C4.02183 19.0909 3.56399 18.8993 3.22643 18.5583C2.88886 18.2174 2.69922 17.7549 2.69922 17.2727V4.54542H15.2992Z"
            stroke="#DB2C66"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.19922 9.09094V14.5455"
            stroke="#DB2C66"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8008 9.09094V14.5455"
            stroke="#DB2C66"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
    </div>
  );
}

export default Baskercard;