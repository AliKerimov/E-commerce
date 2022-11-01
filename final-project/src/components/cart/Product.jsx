import React from "react";
import Productgalery from "./Productgalery";
import Productinf from "./Productinf";
import Technicalinf from "./Technicalinf";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import Loader from "../loader/Loader";
import {useEffect,useState} from 'react';
import { useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import { useDispatch } from "react-redux";
function Cart() {
  const dispatch = useDispatch();
  const param=useParams();
  const products = useSelector((state) => state);
  // console.log(param.id);
  // const loading = products?.fetch?.loading;
  useEffect(() => {
    dispatch(fetchProducts(`/product/${param.id}`));
    // dispatch(fetchcateg('/categories'));
  }, []);
  const data = products.fetch.products.data;
  // console.log(data);  
  const [imgindex, setImgindex] = useState(0);
  const [sizeindex, setSizeindex] = useState(0);
  const values = [
    { id: 1, text: "Texniki xüsusiyyətləri" },
    { id: 2, text: "Rəylər" },
  ];
  const [activeId, setActiveId] = useState(1);
  return (
    <div>
      {data ? (
          
          <div >     
              <div>
                <div className="product-cont" >
                  <Productgalery data={data} imgindex={imgindex} />
                  <Productinf
                    data={data}
                    imgindex={imgindex}
                    setSizeindex={setSizeindex}
                    sizeindex={sizeindex}
                    setImgindex={setImgindex}
                  />
                </div>
                <div className="product-det">
                  {values.map((val, ind) => (
                    <p
                      style={{ cursor: "pointer" }}
                      key={ind}
                      onClick={() => setActiveId(val.id)}
                      className={
                        activeId === val.id ? "focused-categories" : ""
                      }
                    >
                      {val.text}
                    </p>
                  ))}
                </div>
                {activeId === 1 ? <Technicalinf /> : <Comments />}
              </div>   
          </div>
        
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Cart;
