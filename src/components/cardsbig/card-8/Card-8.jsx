import React from 'react'
import Maxsulotlar from '../../../static/Maxsulotlar';
import './Card-8.css'

function Card8() {
    let maxLength = 65;
    return (
        <>
            <div className=''>
                <div className='card8'>
                    <h1>COMBO</h1>
                    <div className="card8_grid">
                        {
                            Maxsulotlar.map((value, inx) => {
                                return (
                                    <>{
                                        value.type === "COMBO" &&

                                        <div className="card8_item">
                                            <img src={value.img} alt="" />
                                            <h2>{value.title.slice(0, 22)}...</h2>
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

export default Card8
