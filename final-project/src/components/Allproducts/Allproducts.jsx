import React from "react";
import phone from "../../images/image 2 (1).svg";
import watch from "../../images/image 3(1).svg";
import acc from "../../images/image 6(1).svg";
function Allproducts() {
  return (
    <div className="all-products">
      <div className="phones">
        <div className="allp-texts">
          <p>Smart Saat</p>
          <p>Məhsul sayı: 322</p>
          <p>
            Məhsullara keçid{" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.05377 10.8784C5.92856 10.8784 5.80279 10.8363 5.69918 10.7498C5.46426 10.5542 5.43268 10.2046 5.62826 9.96972L8.10821 6.99389L5.71746 4.02306C5.52576 3.78481 5.56344 3.43576 5.80168 3.24406C6.04048 3.05235 6.38898 3.09003 6.58123 3.32827L9.25621 6.6526C9.42132 6.85815 9.4191 7.1518 9.25011 7.35458L6.47984 10.6789C6.37014 10.8102 6.21279 10.8784 6.05377 10.8784Z"
                fill="#3366FF"
              />
            </svg>
          </p>
        </div>
        <div className="allp-img">
          <img src={phone} alt="" />
        </div>
      </div>

      <div className="allp-component">
        <div className="watch">
          <div className="allp-texts">
            <p>Smart Saat</p>
            <p>Məhsul sayı: 322</p>
            <p>
              Məhsullara keçid{" "}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.05377 10.8784C5.92856 10.8784 5.80279 10.8363 5.69918 10.7498C5.46426 10.5542 5.43268 10.2046 5.62826 9.96972L8.10821 6.99389L5.71746 4.02306C5.52576 3.78481 5.56344 3.43576 5.80168 3.24406C6.04048 3.05235 6.38898 3.09003 6.58123 3.32827L9.25621 6.6526C9.42132 6.85815 9.4191 7.1518 9.25011 7.35458L6.47984 10.6789C6.37014 10.8102 6.21279 10.8784 6.05377 10.8784Z"
                  fill="#3366FF"
                />
              </svg>
            </p>
          </div>
          <div className="allp-img">
            <img src={watch} alt="" />
          </div>
        </div>
        <div className="all-acc">
          <div className="allp-texts">
            <p>Smart Saat</p>
            <p>Məhsul sayı: 322</p>
            <p>
              Məhsullara keçid{" "}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.05377 10.8784C5.92856 10.8784 5.80279 10.8363 5.69918 10.7498C5.46426 10.5542 5.43268 10.2046 5.62826 9.96972L8.10821 6.99389L5.71746 4.02306C5.52576 3.78481 5.56344 3.43576 5.80168 3.24406C6.04048 3.05235 6.38898 3.09003 6.58123 3.32827L9.25621 6.6526C9.42132 6.85815 9.4191 7.1518 9.25011 7.35458L6.47984 10.6789C6.37014 10.8102 6.21279 10.8784 6.05377 10.8784Z"
                  fill="#3366FF"
                />
              </svg>
            </p>
          </div>
          <div className="allp-img">
            <img src={acc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allproducts;
