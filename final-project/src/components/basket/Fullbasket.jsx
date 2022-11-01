import React from "react";
import iphone from "../../images/Rectangle 158.jpg";
import Baskercard from "./Baskercard";
function Fullbasket({ basketel }) {
  return (
    <div className="fbasket">
      {basketel && (
        <div>
          <p className="fbasket-header">
            Səbət ({basketel.products.length} məhsul)
          </p>
          <div className="fbasket-cont">
            <div>
              {basketel.products.map((el, ind) => {
                // console.log(el);
                if(el){
                  return (
                    <Baskercard el={el} ind={ind} key={ind}/>
                  );
                }
              })}
            </div>
            <div className="fbassm-none">
              <p>Ümumi</p>
              <p>
                <span>Məbləğ </span> <span>{basketel.amount}</span>
              </p>
              <p>
                <span>Çatdırılma </span> <span>00.00</span>
              </p>
              <p>
                <span>Hədiyyə paketi </span> <span>00.00</span>
              </p>
              <p>
                <span>Promo kod </span> <span>00.00</span>
              </p>
              
              <p className="fbass-total">
                <span>Cəmi</span> <span className="sale">{basketel.amount}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fullbasket;