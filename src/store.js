// 액션
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = () => ({ type: 'DECREMENT' });

// 상태
const initstate = {
  username: '',
  num: 1,
};

// 리듀서
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { num: state.num + 1, username: action.payload };
    case 'DECREMENT':
      return { num: state.num - 1 };
    default:
      return state;
  }
};

export default reducer;
