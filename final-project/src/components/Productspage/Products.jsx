import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "../loader/Loader";
import {
  Link,
  useNavigate,
  useParams,
  createSearchParams,
} from "react-router-dom";
import Filters from "./Filters";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/productsSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function Products() {
  const navigate = useNavigate();
  const categ = useParams();
  const [filter, setfilter] = useState(false);
  // const [data, setAllData] = useState([]);
  const [select, setSelect] = useState("+");
  const [arr, setArr] = useState([`${categ.id}`]);
  const [min, setMin] = useState(0);
  // const [filter, setfilter] = useState(false);
  const [max, setMax] = useState(10000);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state);
  const loading = products.fetch.loading;
  const cateqori = ["Ən çox satılanlar", "Yeni gələn Məhsullar", "Telefon","Saat"];
 

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
  }
  // console.log(arr);
  useEffect(() => {
    // &price[gt]=${values.min}&price[lt]=${values.max}
    dispatch(
      fetchProducts(
        `/product?categories=${arr[0]}&price[gt]=${min}&price[lt]=${max}&sort=${select}price`
      )
    );
    // dispatch(fetchcateg('/categories'));
  }, [categ.id, min, max, select, checked]);
  const data = products?.fetch?.products?.data?.allData;

  function handleSelect(e) {
    setSelect(e.target.value);
  }
  // console.log(data);
  // console.log);
  return (
    <div>
      <div className="products-cont">
        <div>
          <div className="products-filt">
            <div className="order-products">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.00038 3.99998L5.00038 17C5.00038 17.552 4.55338 18 4.00038 18C3.44738 18 3.00038 17.552 3.00038 17L3.00038 3.91798L1.79038 5.47598C1.45138 5.91198 0.822384 5.99098 0.387384 5.65198C-0.0496164 5.31298 -0.128616 4.68398 0.210384 4.24898L3.21038 0.386978C3.40138 0.139978 3.69638 -0.00202195 4.00938 -2.11561e-05C4.32038 0.00197964 4.61338 0.149978 4.80038 0.399978L7.80038 4.39998C7.93538 4.57998 8.00038 4.79098 8.00038 4.99898C8.00038 5.30298 7.86238 5.60398 7.60038 5.79998C7.15838 6.13098 6.53138 6.04198 6.20038 5.59998L5.00038 3.99998ZM12.0004 14L12.0004 0.999978C12.0004 0.447978 12.4474 -2.15249e-05 13.0004 -2.15491e-05C13.5534 -2.15733e-05 14.0004 0.447978 14.0004 0.999978L14.0004 14.082L15.2104 12.524C15.5494 12.088 16.1784 12.009 16.6134 12.348C16.8674 12.545 17.0004 12.84 17.0004 13.138C17.0004 13.353 16.9324 13.569 16.7904 13.751L13.7904 17.613C13.5994 17.86 13.3044 18.002 12.9914 18C12.6804 17.998 12.3874 17.85 12.2004 17.6L9.20038 13.6C8.86938 13.157 8.95838 12.531 9.40038 12.2C9.84238 11.869 10.4694 11.958 10.8004 12.4L12.0004 14Z"
                  fill="#303030"
                />
              </svg>
              <p>Sıralama</p>
            </div>
            <div className="filter-products">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.67006 1.02562H18.4087C18.5941 1.09065 18.7622 1.19727 18.9001 1.3373C19.0379 1.47733 19.1419 1.64705 19.2041 1.83348C19.2662 2.0199 19.2848 2.21808 19.2586 2.41282C19.2323 2.60756 19.1618 2.79371 19.0525 2.957L12.6145 10.0387V19.0518L7.46419 15.1891V10.0387L1.02626 2.957C0.916936 2.79371 0.846434 2.60756 0.820157 2.41282C0.793881 2.21808 0.812527 2.0199 0.874668 1.83348C0.93681 1.64705 1.0408 1.47733 1.17866 1.3373C1.31653 1.19727 1.48462 1.09065 1.67006 1.02562Z"
                  stroke="#303030"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Filterləmələr</p>
            </div>
          </div>
          <div className="filters">
            {/* <Filters
                title="Brend"
                categ={["Iphone", "Samsung", "Xiaomi", "Huawei"]}
              /> */}
            <div className="brand-filters">
              <div
                className="filters-btn"
                onClick={() => {
                  !filter ? setfilter(true) : setfilter(false);
                }}
              >
                <p>Kateqori</p>
                {filter ? (
                  <p className="ftoggle-btn">-</p>
                ) : (
                  <p className="ftoggle-btn">+</p>
                )}
              </div>
              {filter ? (
                <form action="">
                  <div id="filt-modal">
                    {cateqori.map((el, key) => {
                      return (
                        <div id="categ" key={key}>
                          <input
                            onChange={(e) => {
                              inputHandler(e, el);
                              // setArr(`${e.target.value}`)
                              setChecked(!checked)
                            }}
                            key={key + 1}
                            type="radio"
                            value={el}
                            name="sy"
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
            {/* <Filters title="Qiymət" categ={["1-1000", "1000-2000","3000-4000"]} setValues={setValues} /> */}
            <div className="brand-filters">
              <div
                className="filters-btn"
                onClick={() => {
                  !filter ? setfilter(true) : setfilter(false);
                }}
              >
                <p>Qiymət</p>
                {filter ? (
                  <p className="ftoggle-btn">-</p>
                ) : (
                  <p className="ftoggle-btn">+</p>
                )}
              </div>
              {filter ? (
                <div id="filt-modal">
                  <div id="categ" style={{ margin: "5px" }}>
                    <input
                      onChange={(e) => {
                        // inputHandler(e, el);
                        setMin(e.target.value);
                        // setInfoData((prevState) => ({
                        //   ...prevState,
                        //   major: {
                        //     ...prevState.major,
                        //     name: "Tan Long",
                        //   },
                        //   minor: {
                        //     ...prevState.minor,
                        //     collegeRegion: "northEast"

                        // }));
                      }}
                      type="number"
                      name="inp"
                      value={min}
                      placeholder="min"
                    />
                    <div></div>
                    <p></p>
                  </div>
                  <div id="categ" style={{ margin: "5px" }}>
                    <input
                      onChange={(e) => {
                        // inputHandler(e, el);
                        setMax(e.target.value);
                      }}
                      type="number"
                      value={max}
                      name="inp"
                      placeholder="max"
                    />
                    <div></div>
                    <p></p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        {
          <div>
            <div className="pcard-info">
              <p style={{ margin: "6% 6%" }}> Məhsul tapıldı</p>

              <select onChange={handleSelect} name="" id="">
                <option value="+">Azalandan artana</option>
                <option value="-">Artandan azalana</option>
              </select>
            </div>
            <div className="products-cards">
              {data ? (
                data.map((el, i) => {
                  return (
                    <Link to={`/product/${el?._id}`} key={i}>
                      <Product el={el} />
                      {/* hi */}
                    </Link>
                  );

                  // return (
                  //   <Link to={`/cart/${el._id}`} key={ind}>
                  //     <Product el={el} />
                  //   </Link>
                  // );
                })
              ) : (
                <Loader />
              )}
            </div>
            <Stack spacing={2} className="pagination">
              <Pagination count={1} shape="rounded" />
            </Stack>
          </div>
        }
      </div>
    </div>
  );
}

export default Products;
