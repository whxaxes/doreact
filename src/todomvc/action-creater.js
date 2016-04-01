export function addItem(value) {
  return {
  	type: 'ADD_ITEM',
  	value: value
  }
}

export function removeItem(id) {
  return {
    type: 'REMOVE_ITEM',
    id
  }
}

export function reopenItem(id) {
  return {
    type: 'REOPEN_ITEM',
    id
  }
}

export function finishItem(id) {
  return {
    type: 'FINISH_ITEM',
    id
  }
}