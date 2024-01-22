import React from 'react'
import Maxsulotlar from '../../../static/Maxsulotlar';
import './Card-6.css'

function Card6() {
    let maxLength = 70;
    return (
        <>
            <div className=''>
                <div className='card6'>
                    <h1>Sneklar</h1>
                    <div className="card6_grid">
                        {
                            Maxsulotlar.map((value, inx) => {
                                return (
                                    <>{
                                        value.type === "sneklar" &&

                                        <div className="card6_item">
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

export default Card6
