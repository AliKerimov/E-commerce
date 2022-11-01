import React from "react";
import { Link } from "react-router-dom";
import Headercateg from "./Headercateg";
import { useSelector } from "react-redux";
function Menu({ toggleHandler, logo }) {
  const count = useSelector((state) => state.basket.count);
  const user = JSON.parse(localStorage.getItem("auth"));
  // console.log(user);
  // console.log(count );
  return (
    <div>
      <div className="navbar modal">
        <div className="menu">
          <div className="toggle" onClick={toggleHandler}>
            <svg
              className="lg-none"
              width="21"
              height="14"
              viewBox="0 0 21 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3 13.6H0.8C0.4 13.6 0 13.2 0 12.8C0 12.4 0.3 12 0.8 12H19.3C19.7 12 20.1 12.3 20.1 12.8C20.1 13.3 19.7 13.6 19.3 13.6Z"
                fill="#1D2123"
              />
              <path
                d="M19.3 1.6H0.8C0.4 1.6 0 1.2 0 0.8C0 0.4 0.3 0 0.8 0H19.3C19.7 0 20 0.4 20 0.8C20 1.2 19.7 1.6 19.3 1.6Z"
                fill="#1D2123"
              />
              <path
                d="M19.3 7.6H0.8C0.4 7.6 0 7.2 0 6.8C0 6.4 0.3 6 0.8 6H19.3C19.7 6.1 20 6.4 20 6.8C20 7.2 19.7 7.6 19.3 7.6Z"
                fill="#1D2123"
              />
            </svg>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="sm-none input-field">
          <div className="input-search">
            <svg
              className="search-ic"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C4.1 18 0 14 0 9C0 4.1 4 0 9 0C13.9 0 18 4 18 9C18 14 14 18 9 18ZM9 1.6C4.9 1.6 1.6 4.9 1.6 9C1.6 13.1 4.9 16.4 9 16.4C13.1 16.4 16.4 13.1 16.4 9C16.5 4.9 13.1 1.6 9 1.6Z"
                fill="#1D2123"
              />
              <path
                d="M19.3002 20C19.1002 20 18.9002 19.9 18.8002 19.8L14.3002 15.3C14.0002 15 14.0002 14.5 14.3002 14.2C14.6002 13.9 15.1002 13.9 15.4002 14.2L19.9002 18.7C20.2002 19 20.2002 19.5 19.9002 19.8C19.7002 20 19.5002 20 19.3002 20Z"
                fill="#1D2123"
              />
            </svg>
          </div>

          <input type="text" placeholder="Axtarış..." />
        </div>
        <div className="nav-infos">
          <div>
            {!user ? (
              <Link to="/signin">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z"
                    fill="#303030"
                  />
                </svg>
              </Link>
            ):(
              <Link to='/my-profile'>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z"
                  fill="#303030"
                />
              </svg>
            </Link>
            )}
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.2198 6C6.3558 6 5.5458 6.334 4.9398 6.941C3.6818 8.201 3.6818 10.252 4.9408 11.514L11.9998 18.585L19.0598 11.514C20.3188 10.252 20.3188 8.201 19.0598 6.941C17.8478 5.726 15.7118 5.728 14.4998 6.941L12.7078 8.736C12.3318 9.113 11.6678 9.113 11.2918 8.736L9.4998 6.94C8.8938 6.334 8.0848 6 7.2198 6ZM11.9998 21C11.7348 21 11.4798 20.895 11.2928 20.706L3.5248 12.926C1.4888 10.886 1.4888 7.567 3.5248 5.527C4.5088 4.543 5.8208 4 7.2198 4C8.6188 4 9.9318 4.543 10.9148 5.527L11.9998 6.614L13.0848 5.528C14.0688 4.543 15.3808 4 16.7808 4C18.1788 4 19.4918 4.543 20.4748 5.527C22.5118 7.567 22.5118 10.886 20.4758 12.926L12.7078 20.707C12.5198 20.895 12.2658 21 11.9998 21Z"
                fill="#303030"
              />
            </svg>
          </div>
          <div className="basket">
            <div>
              <Link to="/basket">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.3818 14H8.76376L7.12676 8H19.3818L16.3818 14ZM21.0828 6.948C20.7158 6.354 20.0798 6 19.3818 6H6.58176L5.96476 3.737C5.84576 3.302 5.45076 3 4.99976 3H2.99976C2.44676 3 1.99976 3.448 1.99976 4C1.99976 4.552 2.44676 5 2.99976 5H4.23576L7.03476 15.263C7.15376 15.698 7.54876 16 7.99976 16H16.9998C17.3788 16 17.7248 15.786 17.8948 15.447L21.1708 8.894C21.4838 8.269 21.4498 7.542 21.0828 6.948ZM7.49996 18C6.67196 18 5.99996 18.671 5.99996 19.5C5.99996 20.329 6.67196 21 7.49996 21C8.32796 21 8.99996 20.329 8.99996 19.5C8.99996 18.671 8.32796 18 7.49996 18ZM16 19.5C16 18.671 16.672 18 17.5 18C18.328 18 19 18.671 19 19.5C19 20.329 18.328 21 17.5 21C16.672 21 16 20.329 16 19.5Z"
                    fill="#303030"
                  />
                </svg>
              </Link>
            </div>
            <div className="basket-counter">{count}</div>
          </div>
        </div>
      </div>
      <div>
        <Headercateg />
      </div>
    </div>
  );
}

export default Menu;
