import React, { useState } from 'react';
import './Header.css';
import img from '../../imgs/evos.png'
import { NavLink } from 'react-router-dom';
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import uzb from '../../imgs/uz.svg'
import { FaRegUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import user from '../../imgs/food.png'


function Header(props) {
    const [closemanzil, setClosemanzil] = useState(false)
    const [openyetgazish, setYetgazish] = useState(false)
    return (

        <div className='header' >
            <div className="header_left">
                <img src={img} alt="" />
                <NavLink activeClassName="active" to={"/"} >Asosiy</NavLink>
                <NavLink activeClassName="active" to={"/filiallar"}>Filiallar</NavLink>
                <NavLink activeClassName="active" to={"/vakantlar"}>Vakantlar</NavLink>
                <NavLink activeClassName="active" to={"/yangiliklar"}>Yangiliklar</NavLink>
                <NavLink activeClassName="active" to={"/biz haqimozda"}>Biz Haqimizda</NavLink>
                <NavLink activeClassName="active" to={"/kontaktlar"}>Kontaktlar</NavLink>
            </div>
            <div className="header_right">
                <p onClick={() => setClosemanzil(!closemanzil)}><FaLocationDot className='location' />Укажите ад...<FaAngleDown className='down' /></p>
                <button>АКЦИЯ</button>
                <p className='savat'><IoBagSharp className='bag' />Savat</p>
                <b><img src={uzb} alt="" /><FaAngleDown className='dovn_2' /></b>
                <h3><FaRegUser /></h3>
                <div className="user_hover">
                    <div className="user_1_hover">
                        <img src={user} alt="" />
                        <h4>Buyurtmalarim</h4>
                    </div>
                    <div className="user_2_hover">
                    <MdLogin className='login' />
                    <h4>Kirish</h4>
                    </div>
                </div>
            </div>
            {
                closemanzil && <div className="manzil">
                    <h5 onClick={() => setYetgazish(!openyetgazish)}>Yangi manzil kiritish<FaPlus className='plus' /></h5>
                </div>
            }
           

        </div>

    )
}

export default Header
