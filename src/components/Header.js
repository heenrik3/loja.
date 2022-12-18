import { useState } from 'react'
import { connect } from 'react-redux'
import Cart from './Cart'

function Header(props) {
  const { cart } = props

  const [cartIsOpen, setCartIsOpen] = useState(false)

  const toggleCart = (e) => {
    setCartIsOpen(!cartIsOpen)
  }

  return (
    <div className="header">
      <h1 className="logo">
        <span>L</span>oja.
      </h1>

      <div className="personal">
        <button className="cart" onClick={toggleCart}>
          <i className="cart__icon fa-solid fa-cart-shopping"></i>
          <span className="cart__badge">{cart}</span>
        </button>

        <div className="user">
          <picture className="user__pic">
            <img
              className="user__img"
              src="avatar.jpg"
              alt="profile avatar"
            ></img>
          </picture>
        </div>
      </div>

      {cartIsOpen && <Cart />}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart.length,
  }
}

export default connect(mapStateToProps)(Header)
