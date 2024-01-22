import React from 'react'
import './Card-1.css'
import Maxsulotlar from '../../../static/Maxsulotlar'
import { Link } from 'react-router-dom';



function Card1() {
    let maxLength = 65;
    return (
        <>
            <div className=''>
                <div className='card1' >
                    <h1>Trindwich</h1>
                    <div className="card1_grid">
                        {
                            Maxsulotlar.map((value, inx) => {
                                return (
                                    <>{
                                        value.type === "trindwich" &&
                                        <div className="card1_item" key={inx}>
                                            <Link to={`/singlePage/${value.id}`}>
                                                <img src={value.img} alt="" />
                                            </Link>
                                            <h2>{value.title.slice(0, 22)}...</h2>
                                            <p>{value.fullInfo.length > maxLength ? value.fullInfo.slice(0, maxLength - 3) : ""}</p>
                                            <b>{value.price}</b>
                                            <button>Savatga qo'shish </button>
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

export default Card1
