import React from 'react'
import Maxsulotlar from '../../../static/Maxsulotlar';
import './Card-15.css'

function Card15() {
    let maxLength = 30;
    return (
        <>
            <div className=''>
                <div className='card15'>
                    <h1>Choy</h1>
                    <div className="card15_grid">
                        {
                            Maxsulotlar.map((value, inx) => {
                                return (
                                    <>{
                                        value.type === "choy" &&

                                        <div className="card15_item">
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

export default Card15
