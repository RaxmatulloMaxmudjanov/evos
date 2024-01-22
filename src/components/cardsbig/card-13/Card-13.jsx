import React from 'react'
import Maxsulotlar from '../../../static/Maxsulotlar';
import './Card-13.css'

function Card13() {
    let maxLength = 70;
    return (
        <>
            <div className=''>
                <div className='card13'>
                    <h1>Sharbatlar</h1>
                    <div className="card13_grid">
                        {
                            Maxsulotlar.map((value, inx) => {
                                return (
                                    <>{
                                        value.type === "sharbatlar" &&

                                        <div className="card13_item">
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

export default Card13
