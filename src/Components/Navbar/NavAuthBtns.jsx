import React from 'react'
import { NavLink } from 'react-router-dom'

const NavAuthBtns = ({ desktop, signOut }) => {
  return (
    <div className={`auth-btns-container ${desktop && 'btns-row'}`}>
      {localStorage.getItem('token') ? (
        <NavLink to="login">
          <button className="round-btns white-outline-btn" onClick={signOut}>
            Sign Out
          </button>
        </NavLink>
      ) : (
        <>
          <NavLink to="login">
            <button className="round-btns white-outline-btn">Log In</button>
          </NavLink>
          <NavLink to="signup">
            <button className="round-btns white-btn">Sign Up</button>
          </NavLink>
        </>
      )}
    </div>
  )
}

export default NavAuthBtns
