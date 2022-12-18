export const actions = {
  add: 'ADD_ITEM',
  remove: 'REMOVE_ITEM',
}

// Action Creator
export function addItem(item) {
  return {
    type: actions.add,
    payload: item,
  }
}

export function removeItem(item) {
  return {
    type: actions.remove,
    payload: item,
  }
}
