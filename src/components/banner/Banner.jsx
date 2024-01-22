import React from 'react'
import './Banner.css'
import img from '../../imgs/border.png'
import salt from '../../imgs/banner-left.png'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import lavash from '../../imgs/lavash.png'
import banner from '../../imgs/banner-4.png'
import hotdog from '../../imgs/hot-dog.png'
import danar from '../../imgs/donar.png'
import user1 from '../../imgs/user1.png'
import user2 from '../../imgs/user2.png'
import user3 from '../../imgs/user3.png'



function Banner() {
  return (
    <div className='banner'>
      <div className="banner_img_1">
      </div>
      <div className="banner_left">
        <h2>Mazali. Tez. Sifatli.</h2>
        <img src={salt} alt="" className='salt' />
        <p>Sevimli taomlar va sharqona mehmondo'stlik.</p>
        <div className="buttons">
          <button className='btn-1'>Bizning menyu</button>
          <Link to={"https://app.evos.uz"}>
            <button className='btn-2' >APP Evos<FaArrowRight className='arrow' /></button>
          </Link>
          <button className='btn-3'>Mahsulot tarkibi</button>
        </div>
        <div className="users">
          <img src={user1} alt=""  className='user1'/>
          <img src={user2} alt=""  className='user2'/>
          <img src={user3} alt=""  className='user3'/>
          <p className='user'>Har oyda <b>200K+ </b>ijobiy sharhlar</p>
        </div>
      </div>
      <div className="banner_right">
        <div className="imgs">
          <img src={lavash} alt="" className='lavash' />
          <img src={hotdog} alt=""  className='hotdog'/>
          <img src={danar} alt=""  className='danar'/>
          <img src={banner} alt="" className='banner_img' />
        </div>
      </div>
      <div className="slider_catalog">
        <div className="slider_catalog_item">
        <Link>Yangiliklar</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Lavash</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Trindwich</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Shaurma</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Burgerlar</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Kartoshka</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Sneklar</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Taom</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>COMBO</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Desertlar</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Souslar</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Salatlar</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Boshqalar</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Sharbatlar</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Ichimliklar</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Choy</Link>
        </div>
        <div className="slider_catalog_item">
        <Link>Qahvda</Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
