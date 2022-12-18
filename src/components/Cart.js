import { Fragment } from 'react'
import { connect } from 'react-redux'
import { removeItem } from '../actions'
import CartItem from './CartItem'

function Cart(props) {
  const removeFromCart = (id) => {
    props.removeItem(id)
  }

  const { cart } = props

  const products = cart.map((item, index) => (
    <CartItem cartItem={item} key={index} onClick={removeFromCart} />
  ))

  const markup = products.length ? (
    <Fragment>
      <h3>Seu carrinho</h3>
      {products}
      <b>
        <span>
          Total: R${' '}
          {cart
            .map((item) => item.product.price * item.quantity.toFixed(2))
            .reduce((total, acc) => total + acc, 0)}
        </span>
      </b>
      {<button className="btn">Pagar</button>}
    </Fragment>
  ) : (
    <Fragment>
      <h3>Sem produtos!</h3>
    </Fragment>
  )
  return <div className="cart--menu">{markup}</div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = {
  removeItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
