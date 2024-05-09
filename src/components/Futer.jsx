import React from 'react'
import home from "../assets/svg/home.svg"
import book from "../assets/svg/book.svg"
import chat from "../assets/svg/chat.svg"
import shop from "../assets/svg/shop.svg"
import { useNavigate } from 'react-router-dom'

function Futer() {

  const navigate = useNavigate()

  return (
    <div className='foter'>
      <div className="divlar">
        <div className="card-f">
          <img src={home} alt="" onClick={() => navigate("/")}/>
          <p>Home</p>
        </div>
        <div className="card-f">
          <img src={book} alt="" onClick={() => navigate("/catalog")}/>
          <p>Catalog</p>
        </div>
        <div className="card-f">
          <img src={chat} alt="" />
          <p>Chat</p>
        </div>
        <div className="card-f">
          <img src={shop} alt="" onClick={() => navigate("/modal")}/>
          <p>Cart</p>
        </div>
        
      </div>
    </div>
  )
}

export default Futer
