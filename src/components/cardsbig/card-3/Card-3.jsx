import React from 'react'
import Maxsulotlar from '../../../static/Maxsulotlar';
import './Card-3.css'

function Card3() {
    let maxLength = 70;
    return (
        <>
            <div className=''>
                <div className='card2'>
                    <h1>Burgerlar</h1>
                    <div className="card2_grid">
                        {
                            Maxsulotlar.map((value, inx) => {
                                return (
                                    <>{
                                        value.type === "gamburger" &&

                                        <div className="card2_item">
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

export default Card3
