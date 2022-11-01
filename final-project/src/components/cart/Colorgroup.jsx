import React from 'react'

function Colorgroup({el}) {
  return (
    <div className="pr-color">
            <p>Rəng:</p>
            {el.map((elem, ind) => {
              const color = elem;
              return (
                <div
                  key={ind}
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
              );
            })}
          </div>
  )
}

export default Colorgroup