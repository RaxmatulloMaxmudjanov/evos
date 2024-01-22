import React from 'react'
import Maxsulotlar from '../../../static/Maxsulotlar';
import './Card-16.css'

function Card16() {
    let maxLength = 39;
    return (
        <>
            <div className=''>
                <div className='card16'>
                    <h1>Qahva</h1>
                    <div className="card16_grid">
                        {
                            Maxsulotlar.map((value, inx) => {
                                return (
                                    <>{
                                        value.type === "qahva" &&

                                        <div className="card16_item">
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

export default Card16
