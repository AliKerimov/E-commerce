import React from "react";
import { Routes, Route } from "react-router-dom";
import Credit from "../credit/Credit";
import Hswiper from "../Swiper/Hswiper";
import Newacces from "../newAcces/Newacces";
import Allproducts from "../Allproducts/Allproducts";
import Sponsors from "../sponsors/Sponsors";
import Adds from "../adds/Adds";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//USE THIS FOR CATEGORIES!!!!!!
// import { fetchcateg } from "../../redux/categSlice";
import { fetchProducts } from "../../redux/productsSlice";
import Loader from "../loader/Loader";
function Home() {
  // const { loading, data, error } = useSelector((state) => state.fetch);
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const loading = products.fetch.loading;
  useEffect(() => {
    dispatch(fetchProducts('/product'));
    // dispatch(fetchcateg('/categories'));
  }, []);
  const data = products.fetch;
    

  
  return (
    <div className="home">
      {!data.products.data ? (
        <div className="load">
          <Loader />
        </div>
      ) : (
        <div>
          <Hswiper />
          <Newacces categ={"Yeni gələn Məhsullar"} data={data.products.data.allData} />
          <Newacces categ={"Ən çox satılanlar"} data={data.products.data.allData} />
          <Adds />
          <Newacces categ={"Aksesuar"} data={data.products.data.allData} />
          <Allproducts />
          <Routes>
            <Route></Route>
          </Routes>
          <Credit />
          <Sponsors />
        </div>
      )}
    </div>
  );
}

export default Home;
