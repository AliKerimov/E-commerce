import { Carousel } from "react-carousel-minimal";

import ImageGallery from "react-image-gallery";
function Productgalery({ data, imgindex }) {
  const imgs = data?.product?.images;
  const arr=[]
  if (imgs) {
    // console.log(...[...imgs]);
    imgs.map(el=>{
      // console.log(el[0].secure_url);
      arr.push({original:el[0].secure_url});
      
    })
  }
  // console.log(arr);
  // const data = [];
  // console.log(data[4]);
  // let variantAssets = product?.variant_groups?.[1]?.options?.[
  //   imgindex
  // ]?.assets.map((id) => product?.assets?.find((el) => el.id === id));
  // if (product?.variant_groups.length === 1) {
  //   variantAssets = product?.variant_groups?.[0]?.options?.[
  //     imgindex
  //   ]?.assets.map((id) => product?.assets?.find((el) => el.id === id));
  // }

  // if (variantAssets) {
  //   variantAssets.map((url, ind) => {
  //     data.push({
  //       original: `${url.url}`,
  //     });
  //   });
  // }

  return (
    <div>
      <div>
        <div className="img-galery">
          {/* {imgs &&
            imgs.map((elem) =>
              elem.map((item) => {
                return (
                  <div >
                    <img src={`${item.secure_url}`} alt="" />
                  </div>
                );
              })
            )} */}
            { arr &&
                <ImageGallery
                radius="10px"
                automatic={true}
                // dots={true}
                // thumbnails={true}
                // thumbnailWidth="100px"
                // style={{
                //   textAlign: "center",
                //   maxWidth: "650px",
                //   maxHeight: "500px",
                //   margin: "40px auto",
              // }}
              id='galery'
              items={arr}
            />
            }
        </div>
      </div>
    </div>
  );
}

export default Productgalery;
