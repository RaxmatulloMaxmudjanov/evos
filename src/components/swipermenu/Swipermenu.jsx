import React from 'react';
import './Swipermenu.css';
import menu_img_1 from '../../imgs/menu_img_1.png';
import menu_img_2 from '../../imgs/menu_img_2.png';
import menu_img_3 from '../../imgs/menu_img_3.png';
import menu_img_4 from '../../imgs/menu_img_4.png';
import menu_img_5 from '../../imgs/menu_img_5.png';
import menu_img_6 from '../../imgs/menu_img_6.png';


function Swipermenu() {
  return (
    <div className='menu'>
      <h1>Sotuv xitlari</h1>
      <div className="menu_item">
        <div className="menu_items">
          <div className="menu_items_img">
          <img src={menu_img_1} alt="" />
          </div>
          <div className="menu_items_nomi">
            <h2>Sub tovuq go'shtidan</h2>
          </div>
          <div className="menu_items_batafsil">
            <p>Tovuq go'shti-gril, yangi, qizil piyoz halqasi, cho'zinchoq bo'rsildoq </p>
          </div>
          <div className="menu_items_narxi">
            <b>18 000 so'm</b>
          </div>
          <button>Savatga qo'shish</button>
        </div>
        <div className="menu_items">
          <div className="menu_items_img">
          <img src={menu_img_2} alt="" />
          </div>
          <div className="menu_items_nomi">
          <h2>Sub mol go'shtidan</h2>
          </div>
          <div className="menu_items_batafsil">
            <p>Shirali gril mol go'shti, yangi, qizil piyoz halqasi, cho'zinchoq,</p>
          </div>
          <div className="menu_items_narxi">
            <b>20 000 so'm</b>
          </div>
          <button>Savatga qo'shish</button>
        </div>
        <div className="menu_items">
          <div className="menu_items_img">
          <img src={menu_img_3} alt="" />
          </div>
          <div className="menu_items_nomi">
            <h2>Donar mol go'shtidan </h2>
          </div>
          <div className="menu_items_batafsil">
            <p>Kombinatsiyali idishda shirali gril mol go'shti bo'lakchalari, tillarang</p>
          </div>
          <div className="menu_items_narxi">
            <b>45 000 so'm</b>
          </div>
          <button>Savatga qo'shish</button>
        </div>
        <div className="menu_items">
          <div className="menu_items_img">
          <img src={menu_img_4} alt="" />
          </div>
          <div className="menu_items_nomi">
            <h2>Kids combo</h2>
          </div>
          <div className="menu_items_batafsil">
            <p>Bolalar uchun mo'ljallangan mazali xot-dog, bolalar uchun mo'ljallangan</p>
          </div>
          <div className="menu_items_narxi">
            <b>18 000 so'm</b>
          </div>
          <button>Savatga qo'shish</button>
        </div>
        <div className="menu_items">
          <div className="menu_items_img">
          <img src={menu_img_5} alt="" />
          </div>
          <div className="menu_items_nomi">
            <h2>Tovuq go'shtidan<br/> shaurma</h2>
          </div>
          <div className="menu_items_batafsil">
            <p>Qizarib pishgan tovuq go'shti-gril, yangi bodring va shirali pomidor </p>
          </div>
          <div className="menu_items_narxi">
            <b>24 000 so'm</b>
          </div>
          <button>Savatga qo'shish</button>
        </div>
        <div className="menu_items">
          <div className="menu_items_img">
          <img src={menu_img_6} alt="" />
          </div>
          <div className="menu_items_nomi">
            <h2>Tovuq go'shtidan <br/>qalampir shaurma</h2>
          </div>
          <div className="menu_items_batafsil">
            <p>Qizarib pishgan tovuq go'shti-gril, yangi bodring va shirali pomidor </p>
          </div>
          <div className="menu_items_narxi">
          <b>24 000 so'm</b>
          </div>
          <button>Savatga qo'shish</button>
        </div>
      </div>
    </div>
  )
}

export default Swipermenu
