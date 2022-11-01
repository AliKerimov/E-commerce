import React from "react";

function Comments() {
  return (
    <div>
      <div>
        <div className="comment">
          <div>
            <h2>4</h2>
            <div>
              <svg
                id="smborder-none"
                width="156"
                height="26"
                viewBox="0 0 156 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7932 1.6803L16.2364 9.01513L23.9361 10.1985L18.3647 15.9047L19.6795 23.966L12.7932 20.158L5.90696 23.966L7.22182 15.9047L1.65039 10.1985L9.3501 9.01513L12.7932 1.6803Z"
                  fill="#F2994A"
                />
                <path
                  d="M45.2932 1.6803L48.7364 9.01513L56.4361 10.1985L50.8647 15.9047L52.1795 23.966L45.2932 20.158L38.407 23.966L39.7218 15.9047L34.1504 10.1985L41.8501 9.01513L45.2932 1.6803Z"
                  fill="#F2994A"
                />
                <path
                  d="M77.7932 1.6803L81.2364 9.01513L88.9361 10.1985L83.3647 15.9047L84.6795 23.966L77.7932 20.158L70.907 23.966L72.2218 15.9047L66.6504 10.1985L74.3501 9.01513L77.7932 1.6803Z"
                  fill="#F2994A"
                />
                <path
                  d="M110.293 1.6803L113.736 9.01513L121.436 10.1985L115.865 15.9047L117.18 23.966L110.293 20.158L103.407 23.966L104.722 15.9047L99.1504 10.1985L106.85 9.01513L110.293 1.6803Z"
                  fill="#F2994A"
                />
                <path
                  d="M142.793 1.6803L146.236 9.01513L153.936 10.1985L148.365 15.9047L149.68 23.966L142.793 20.158L135.907 23.966L137.222 15.9047L131.65 10.1985L139.35 9.01513L142.793 1.6803Z"
                  fill="white"
                  stroke="#F2994A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <p id="cmnt-name">Gunel Mammadova</p>
            <p id="cmnt-det">Yaddaş - 64, Rəng - Qara</p>
            <p id="cmnt-inf">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit nibh
              tortor sit. Consectetur sit auctor odio quis suspendisse tincidunt
              quis. Et tristique amet aenean nibh porttitor quis aliquam
              integer. Consectetur lacus, volutpat malesuada libero.
              Sollicitudin libero pharetra a.
            </p>
          </div>
        </div>
        <div className="comment">
          <div>
            <h2>4</h2>
            <div>
              <svg
                id="smborder-none"
                width="156"
                height="26"
                viewBox="0 0 156 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7932 1.6803L16.2364 9.01513L23.9361 10.1985L18.3647 15.9047L19.6795 23.966L12.7932 20.158L5.90696 23.966L7.22182 15.9047L1.65039 10.1985L9.3501 9.01513L12.7932 1.6803Z"
                  fill="#F2994A"
                />
                <path
                  d="M45.2932 1.6803L48.7364 9.01513L56.4361 10.1985L50.8647 15.9047L52.1795 23.966L45.2932 20.158L38.407 23.966L39.7218 15.9047L34.1504 10.1985L41.8501 9.01513L45.2932 1.6803Z"
                  fill="#F2994A"
                />
                <path
                  d="M77.7932 1.6803L81.2364 9.01513L88.9361 10.1985L83.3647 15.9047L84.6795 23.966L77.7932 20.158L70.907 23.966L72.2218 15.9047L66.6504 10.1985L74.3501 9.01513L77.7932 1.6803Z"
                  fill="#F2994A"
                />
                <path
                  d="M110.293 1.6803L113.736 9.01513L121.436 10.1985L115.865 15.9047L117.18 23.966L110.293 20.158L103.407 23.966L104.722 15.9047L99.1504 10.1985L106.85 9.01513L110.293 1.6803Z"
                  fill="#F2994A"
                />
                <path
                  d="M142.793 1.6803L146.236 9.01513L153.936 10.1985L148.365 15.9047L149.68 23.966L142.793 20.158L135.907 23.966L137.222 15.9047L131.65 10.1985L139.35 9.01513L142.793 1.6803Z"
                  fill="white"
                  stroke="#F2994A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <p id="cmnt-name">Gunel Mammadova</p>
            <p id="cmnt-det">Yaddaş - 64, Rəng - Qara</p>
            <p id="cmnt-inf">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit nibh
              tortor sit. Consectetur sit auctor odio quis suspendisse tincidunt
              quis. Et tristique amet aenean nibh porttitor quis aliquam
              integer. Consectetur lacus, volutpat malesuada libero.
              Sollicitudin libero pharetra a.
            </p>
          </div>
        </div>
       
      </div>
      <div className="send-comment">
        <p>Rəy Bildir</p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <div>
              <label htmlFor="">Ad</label>
              <input type="text" placeholder="Adınızı daxil edin" />
            </div>
            <div>
              <label htmlFor="">Soyad</label>
              <input type="text" placeholder="Soyadınızı daxil edin" />
            </div>
          </div>
          <div>
            <label htmlFor="">Rəy bildirdiyiniz məhsulu seçin</label>
            <select name="" id="">
              <option value="">Məhsulu seçin</option>
              <option value="">Məhsulu seçin</option>
              <option value="">Məhsulu seçin</option>
            </select>
          </div>
          <div>
            <p>Rəyinizi yazın</p>
            <textarea
              placeholder="Rəyinizi buraya yazın"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="comments-btn">
            <p>Rəyini bildir</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comments;
