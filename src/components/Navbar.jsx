import React from 'react'
import user from "../assets/svg/user.svg"
import need from "../assets/svg/need.svg"

export default function Navbar() {
  return (
    <nav>
      <div className="text">
        <p>Welcome!</p>
        <img src={user} alt="" />
      </div>
      <div className="need">
        <div className="ong">
        <h1>Need help?</h1>
        <span>Make an appointment or chat with us.</span>
        </div>
        <div className="chap">
            <img src={need} alt="" />
        </div>
      </div>
      </nav>
  )
}
