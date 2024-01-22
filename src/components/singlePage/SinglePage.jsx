import React from 'react'
import { useParams } from 'react-router'
import './SinglePage.css'
import data from '../../static/Maxsulotlar'

function SinglePage() {
  const { id } = useParams()

  const result = data.find(item => item.id === parseInt(id));

  console.log(result);

  return (
    <div className='singlepage'>
      {result ? (
        <>
          <img src={result.img[0]} alt="" />
          <h1>{result.title}</h1>
          <p>{result.fullInfo}</p>
          <button>Savatga qo'shish {result.price}</button>
        </>
      ) : (
        <h1>Maxsulot topilmadi</h1>
      )
       }
    </div>
  )
}

export default SinglePage
