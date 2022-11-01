import React from "react";
import { useState } from "react";

function Filters({ title, categ, setValues,arr,setArr }) {
  const [filter, setfilter] = useState(false);
 

  const [d, setD] = useState([]);
  function inputHandler(e, el) {
    const currentIndex = arr.indexOf(e.target.value);
    arr.push(e.target.value);
    if(arr.length==2){
      arr.splice(0, 1);
    }
    // if (currentIndex === -1) {
    //   arr.push(e.target.value);
    // } else {
    //   arr.splice(currentIndex, 1);
    // }
    // dataHandler(alldata,arr);
    console.log(arr);
  }
  console.log(arr);
  return (
    <div className="brand-filters">
      <div
        className="filters-btn"
        onClick={() => {
          !filter ? setfilter(true) : setfilter(false);
        }}
      >
        <p>{title}</p>
        {filter ? (
          <p className="ftoggle-btn">-</p>
        ) : (
          <p className="ftoggle-btn">+</p>
        )}
      </div>
      {filter ? (
        <form action="">
          <div id="filt-modal">
            {categ.map((el, key) => {
              return (
                <div id="categ" key={key}>
                  <input
                    onChange={(e) => {
                      inputHandler(e, el);
                    }}
                    key={key + 1}
                    type="radio"
                    value={el}
                    name='sy'
                  />
                  <p key={key - 1}>{el}</p>
                </div>
              );
            })}
          </div>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Filters;
