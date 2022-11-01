import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import categSlice from '../../redux/categSlice';
import { fetchcateg } from "../../redux/categSlice";
function Headercateg() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const loading = products.fetch.loading;
  useEffect(() => {
    // dispatch(fetchcateg('/product'));
    dispatch(fetchcateg('/categories'));
  }, []);
  const data = products?.categ?.categ?.data;
  // console.log(data.allData);
  return (
    <div className="header-categ">
      {data?.allData &&
        data?.allData.map((el, ind) => {
          if(el?.parent_id===null){
            return (
              <div key={ind} className='h-cont'>
                <Link key={ind} to={`/products/${el.slug}`} className="h-categ">
                  <p>{el.name} </p>
                </Link>
                {/* <div id="hide">
                    {(Array.isArray(el.children) && el.children.length>0)  &&
                      el.children.map((child,ind)=>{
                        return(<p key={ind}>{child.name}</p>)
                      })
                    }
                </div> */}
              </div>
            );
          }
        })}
    </div>
  );
}

export default Headercateg;
