import { useState } from 'react'

function Modal(props) {
  const [quantity, setQuantity] = useState(1)

  const confirmHandler = (e) => {
    props.onConfirm({ quantity })
  }
  const cancelHandler = (e) => {
    props.onCancel()
  }

  const addQuantityHandler = (e) => {
    setQuantity(quantity + 1)
  }

  const removeQuantityHandler = (e) => {
    const newQuantity = quantity - 1 > 0 ? quantity - 1 : quantity

    setQuantity(newQuantity)
  }
  return (
    <div className="modal">
      <div className="modal__bg" onClick={cancelHandler}>
        &nbsp;
      </div>
      <div className="modal__content">
        <div className="modal__header">
          <h3>Quantidade</h3>
          <button onClick={cancelHandler}>
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
        </div>
        <div className="quantity">
          <div className="quantity__input">
            <button className="btn" onClick={removeQuantityHandler}>
              -
            </button>
            <label className="quantity__display">{quantity}</label>
            <button className="btn" onClick={addQuantityHandler}>
              +
            </button>
          </div>
        </div>
        <div className="modal__actions">
          <button className="btn" onClick={confirmHandler}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
