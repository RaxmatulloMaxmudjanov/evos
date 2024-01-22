import React from 'react'
import Maxsulotlar from '../../../static/Maxsulotlar';
import './Card-4.css'

function Card4() {
    let maxLength = 70;
    return (
        <>
            <div className=''>
                <div className='card4'>
                    <h1>Xot Dog</h1>
                    <div className="card4_grid">
                        {
                            Maxsulotlar.map((value, inx) => {
                                return (
                                    <>{
                                        value.type === "hot-dog" &&

                                        <div className="card4_item">
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

export default Card4
