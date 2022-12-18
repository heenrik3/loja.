function CartItem(props) {
  const handleClick = () => {
    props.onClick(props.cartItem.product.id)
  }

  const { product } = props.cartItem

  return (
    <div className="cart__item">
      <picture className="cart__item__pic">
        <img
          className="cart__item__img"
          src={product.img}
          alt="product pic"
        ></img>
      </picture>
      <div className="cart__item__detail">
        <b>
          <span>{product.title}</span>
        </b>

        <span>x{props.cartItem.quantity}</span>
      </div>

      <button onClick={handleClick}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}

export default CartItem
