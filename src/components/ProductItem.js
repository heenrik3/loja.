function ProductItem(props) {
  const { product } = props

  return (
    <div className="product" id={product.id}>
      {product.discount ? <label className="product__tag">Promo!</label> : null}
      <picture className="product__pic">
        <img className="product__img" src={product.img} alt="product"></img>
      </picture>

      <div className="product__details">
        <span className="product__title">{product.title}</span>
        <span className="product__price">
          R$ {product.price.toFixed(2)}
          {'        '}
          {product.discount ? (
            <label className="product__discount">{product.discount} OFF</label>
          ) : null}
        </span>
      </div>

      <div className="product__actions">
        <button className="btn" onClick={props.onClick}>
          Comprar
        </button>
      </div>
    </div>
  )
}

export default ProductItem
