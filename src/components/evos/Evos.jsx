import React from 'react'
import './Evos.css'
import evos_1 from '../../imgs/evos-1.png'
import evos_2 from '../../imgs/evos-2.png'
import evos_3 from '../../imgs/evos-3.png'
import evos_4 from '../../imgs/evos-4.png'
import evos_5 from '../../imgs/evos-5.png'
import evos_6 from '../../imgs/evos-6.png'
import { Link } from 'react-router-dom'

function Evos() {
  return (
    <div className='evos'>
        <div className='a'></div>
        <div className='b'></div>
        <div className='c'></div>
        <h1>Nega Evos?</h1>
      <div className="evos_items">
        <div className="img">
            <img src={evos_1} alt="" />
        </div>
        <div className="evos_text">
            <h3>Oziq-ovqat sifatini nazorat qilish</h3>
            <p>Mehmonlar uchun oziq-ovqat xavfsizligi va lazzatlanishi bizning asosiy e'tiborimizdir. Biz HACCPni - ishlab chiqarishni tashkil etish qoidalari to'plamini joriy qildik, bu iste'molchi uchun yuqori sifatli va xavfsiz mahsulot bilan ta'minlashni kafolatlaydi. Oshxona va zallardagi jarayonlar avtomatlashtirilgan.</p>
        </div>
      </div>
      <div className="evos_items">
        <div className="img">
            <img src={evos_2} alt="" />
        </div>
        <div className="evos_text">
            <h3>Har doim yoningizda</h3>
            <p>Oʻzbekiston Respublikasi boʻylab 71 ta filial. Qaysi EVOS restorani uyingiz yoki ofisingizga yaqin? Bu yerda har bir filialning</p>
            <Link>joylashuvi</Link>
        </div>
      </div>
      <div className="evos_items">
        <div className="img">
            <img src={evos_3} alt="" />
        </div>
        <div className="evos_text">
            <h3>Sharqona mehmondo'stlik</h3>
            <p>Bizning mazzali taomlarimiz siri nimada? Hammasi juda oddiy. Biz sizga o’z yaqinlarimizga tayyorlagan kabi g'amxo'rlik va iliqlik bilan tayyorlanamiz!</p>
        </div>
      </div>
      <div className="evos_items">
        <div className="img">
            <img src={evos_4} alt="" />
        </div>
        <div className="evos_text">
            <h3>Tez, mazzali, tabiiy</h3>
            <p>Faqat tabiiy mahsulotlardan tayyorlangan sevimli taomlaringizni tez yetkazib berish</p>
        </div>
      </div>
      <div className="evos_items">
        <div className="img">
            <img src={evos_5} alt="" />
        </div>
        <div className="evos_text">
            <h3>Turli xil menyu</h3>
            <p>Ishonchimiz komil-ki, restoranning har bir tashrifchisi menyudan har qanday lazzat uchun o'zining sevimli taomlarini topadi va bizdan och qaytmaydi!</p>
        </div>
      </div>
      <div className="evos_items">
        <div className="img">
            <img src={evos_6} alt="" />
        </div>
        <div className="evos_text">
            <h3>Tez yetkazib berish xizmati</h3>
            <p>Toshkent shahrida o'rtacha yetkazib berish muddati odatda 15-20 daqiqadan oshmaydi!</p>
        </div>
      </div>
    </div>
  )
}

export default Evos
