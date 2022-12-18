import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'

import Modal from './Modal'
import ProductItem from './ProductItem'
import { addItem } from '../actions'

function ProductList(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [productId, setProductId] = useState('')

  function handleBuy(e) {
    setProductId(e.target.parentNode.parentNode.id)

    toggleModal()
  }

  function toggleModal() {
    setModalIsOpen(!modalIsOpen)
  }

  function addToCart(data) {
    const { quantity } = data

    toggleModal()

    props.addItem({ id: productId, quantity: quantity })
  }

  const { products } = props

  return (
    <Fragment>
      <div className="products">
        <div className="products__list">
          {products.map((prod, index) => (
            <ProductItem key={index} product={prod} onClick={handleBuy} />
          ))}
        </div>
      </div>
      {modalIsOpen && <Modal onConfirm={addToCart} onCancel={toggleModal} />}
    </Fragment>
  )
}

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = { addItem }

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
