import { actions } from './actions'

const initialState = {
  products: [
    {
      id: 'prod1',
      title: 'Tênis Air',
      price: 215.8,
      img: '1.jpg',
      discount: '14%',
    },
    {
      id: 'prod2',
      title: 'Calça Jeans Básica',
      price: 96.0,
      img: '2.jpg',
    },
    {
      id: 'prod3',
      title: 'Blusa Crochê',
      price: 55.3,
      img: '3.jpg',
      discount: '35%',
    },
    {
      id: 'prod4',
      title: 'Óculos de Sol',
      price: 595.99,
      img: '4.jpg',
    },
    {
      id: 'prod5',
      title: 'Blusa Creme',
      price: 120.5,
      img: '5.jpg',
    },
    {
      id: 'prod6',
      title: 'Fone de Ouvido Estéreo',
      price: 99.99,
      img: '6.jpg',
      discount: '10%',
    },
    {
      id: 'prod7',
      title: 'Sapato Salto Alto',
      price: 210.49,
      img: '7.jpg',
    },
    {
      id: 'prod8',
      title: 'Boné Estiloso',
      price: 69.99,
      img: '8.jpg',
    },
    {
      id: 'prod9',
      title: 'Mochila de Couro',
      price: 415.39,
      img: '9.jpg',
      discount: '5%',
    },
  ],
  cart: [],
}

const filterCart = (state, action) => {
  // [...state.cart, action.payload]
  const cartContains = state.cart.some(
    (prod) => prod.product.id === action.payload.id
  )

  const cart = [...state.cart]

  if (!cartContains)
    cart.push({
      product: state.products.find((prod) => prod.id === action.payload.id),
      quantity: action.payload.quantity,
    })

  return cart
}

const deleteCart = (state, action) => {
  // console.log(action, state.cart)
  return state.cart.filter((item) => item.product.id !== action.payload)
}

// Reducer function
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.add:
      return {
        ...state,
        cart: filterCart(state, action),
      }
    case actions.remove:
      return { ...state, cart: deleteCart(state, action) }
    default:
      return state
  }
}
