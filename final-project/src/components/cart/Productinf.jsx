import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBasket, decrement, increment } from "../../redux/basketSlice";
import Colorgroup from "./Colorgroup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
function Productinf({ data, setImgindex, imgindex, sizeindex, setSizeindex }) {
  const notify = () =>
    toast("Səbətə əlavə olundu!", { position: "bottom-right" });
  // console.log(data);
  let test=[];
  if(data){
    test=data
  }
  // console.log(test);
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  async function basketHandler() {
    const user = JSON.parse(localStorage.getItem("auth"));
    // console.log(user.user);
    const cart = {
      user: user.user._id,
      products: [],
    };
    const quantity = {
      quantity: counter,
      // id:user?.user?._id
    };
    const check = await axios.get("http://localhost:5000/orders");
    // console.log(check.data.data.orders);
    check?.data?.data?.orders.map(async (el) => {
      if (el?.user === user?.user?._id) {
        let url=`http://localhost:5000/orders/add/${test.product._id}`
        console.log(url); 
        const { add } = await axios.patch(
          `${url}`,
          quantity
        );
      } else {
        const { data } = await axios.post(
          "http://localhost:5000/orders/",
          cart
        );
        // console.log(data);
        const { add } = await axios.post(
          `http://localhost:5000/orders/add/${test.product._id}`,
          quantity
        );

        // console.log(data);
      }
    });
  }
  return (
    <div>
      <div className="productinf">
        <p>
          {/* iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden 5 G 8690604083886 0212042 */}
          {data?.product?.name},{data?.product?.color[0]},
          {data?.product?.size[0]}
        </p>
        <div>
          <svg
            width="106"
            height="18"
            viewBox="0 0 106 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.85686 1.16327L11.2406 6.24123L16.5712 7.06052L12.714 11.0109L13.6243 16.5918L8.85686 13.9555L4.08944 16.5918L4.99972 11.0109L1.14258 7.06052L6.47315 6.24123L8.85686 1.16327Z"
              fill="#F2994A"
            />
            <path
              d="M30.8569 1.16327L33.2406 6.24123L38.5712 7.06052L34.714 11.0109L35.6243 16.5918L30.8569 13.9555L26.0894 16.5918L26.9997 11.0109L23.1426 7.06052L28.4732 6.24123L30.8569 1.16327Z"
              fill="#F2994A"
            />
            <path
              d="M52.8569 1.16327L55.2406 6.24123L60.5712 7.06052L56.714 11.0109L57.6243 16.5918L52.8569 13.9555L48.0894 16.5918L48.9997 11.0109L45.1426 7.06052L50.4732 6.24123L52.8569 1.16327Z"
              fill="#F2994A"
            />
            <path
              d="M74.8569 1.16327L77.2406 6.24123L82.5712 7.06052L78.714 11.0109L79.6243 16.5918L74.8569 13.9555L70.0894 16.5918L70.9997 11.0109L67.1426 7.06052L72.4732 6.24123L74.8569 1.16327Z"
              fill="#F2994A"
            />
            <path
              d="M96.8569 1.16327L99.2406 6.24123L104.571 7.06052L100.714 11.0109L101.624 16.5918L96.8569 13.9555L92.0894 16.5918L92.9997 11.0109L89.1426 7.06052L94.4732 6.24123L96.8569 1.16327Z"
              fill="white"
              stroke="#F2994A"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>(226)</span>
          <span>57 rəy</span>
        </div>
        <div>
          <p style={{ fontSize: "28px" }}>{data?.product?.price} ₼</p>
          {/* <p className="endirim">2089</p> */}
        </div>
        {data?.product?.color && <Colorgroup el={data?.product?.color} />}

        {data?.product?.size && (
          <div className="pr-memory">
            <p>Yaddaş:</p>
            {data?.product?.size.map((size, i) => {
              return (
                <div
                  onClick={() => {
                    setSizeindex(i);
                  }}
                  key={i}
                >
                  {size}
                </div>
              );
            })}
          </div>
        )}
        <div className="pr-count">
          <p>Miqdar:</p>
          <p className="pr-counter">
            <span
              onClick={() => {
                if (counter > 1) {
                  decrementCounter()
                }
              }}
            >
              -
            </span>{" "}
            <span>{counter}</span>{" "}
            <span
              onClick={() => {
                incrementCounter()
              }}
            >
              +
            </span>
          </p>
        </div>
        <div className="pr-info">
          <span className="prodinf-txt">Məhsul haqqında</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            lobortis mi blandit aliquet sed placerat. Gravida nunc adipiscing
            donec aliquet sit. Arcu diam eget sit nunc ac quisque morbi.{" "}
          </p>
        </div>
        <div
          className="addp-basket"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            notify();
            basketHandler();
          }}
        >
          <svg
            className="addp-svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.22293 18.7514C8.67936 18.7514 9.04938 18.376 9.04938 17.9128C9.04938 17.4497 8.67936 17.0742 8.22293 17.0742C7.7665 17.0742 7.39648 17.4497 7.39648 17.9128C7.39648 18.376 7.7665 18.7514 8.22293 18.7514Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.3138 18.7514C17.7702 18.7514 18.1402 18.376 18.1402 17.9128C18.1402 17.4497 17.7702 17.0742 17.3138 17.0742C16.8573 17.0742 16.4873 17.4497 16.4873 17.9128C16.4873 18.376 16.8573 18.7514 17.3138 18.7514Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.61133 1.14082H4.91711L7.13199 12.3697C7.20756 12.7558 7.41456 13.1026 7.71674 13.3494C8.01892 13.5962 8.39703 13.7274 8.78488 13.7198H16.8179C17.2058 13.7274 17.5839 13.5962 17.8861 13.3494C18.1883 13.1026 18.3953 12.7558 18.4708 12.3697L19.7931 5.33382H5.74356"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Səbətə at</p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Productinf;
