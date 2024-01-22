import React from 'react'
import './Cards.css'
import Maxsulotlar from '../../static/Maxsulotlar'

function Cards() {
  let maxLength = 70;
  return (
    <>
      <div className=''>
        <div className="cards">
          <h1>Lavash</h1>
          <div className="card_grid">
            {
              Maxsulotlar.map((value, inx) => {
                return (
                  <>{
                    value.type ==="lavash" &&
                
                    <div className="card_item">
                      <img src={value.img} alt="" />
                      <h2>{value.title.slice(0, 24)}...</h2>
                      <p>{value.fullInfo.length > maxLength ? value.fullInfo.slice(0, maxLength - 3) : ""}</p>
                      <b>{value.price}</b>
                      <button>Savatga qo'shish</button>
                    </div>  
                    }
                  </>
                )

              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
