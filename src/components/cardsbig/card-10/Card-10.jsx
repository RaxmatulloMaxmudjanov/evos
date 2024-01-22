import React from 'react'
import Maxsulotlar from '../../../static/Maxsulotlar';
import './Card-10.css'

function Card10() {
    let maxLength = 50;
    return (
        <>
            <div className=''>
                <div className='card10'>
                    <h1>Souslar</h1>
                    <div className="card10_grid">
                        {
                            Maxsulotlar.map((value, inx) => {
                                return (
                                    <>{
                                        value.type === "sous" &&

                                        <div className="card10_item">
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

export default Card10
