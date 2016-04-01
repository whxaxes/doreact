// 管理todo列表的reducer
export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        {
          id: +(new Date()) + ~~(10000 * Math.random()),
          text: action.value,
          finished: false,
          publicTime: +new Date(),
          finishedTime: 0
        },
        ...state
      ];

    case 'REMOVE_ITEM':
      return state.filter(item => item.id != action.id);

    case 'FINISH_ITEM':
      return state.map(item =>
        item.id === action.id
          ? Object.assign({}, item, {finished: true, finishedTime: +new Date()})
          : item
      );

    case 'REOPEN_ITEM':
      return state.map(item =>
        item.id === action.id
          ? Object.assign({}, item, {finished: false, finishedTime: 0})
          : item
      );

    default:
      return state;
  }
}
