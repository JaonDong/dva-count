import key from 'keymaster';
export default {

  namespace: 'example',

  state: { record: 0, current: 0 },

  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('ctrl+up', () => { dispatch({ type: 'add' }) });
    },
  },

  effects: {
    *add(action, { call, put }) {
      yield call(function delay(timeout) {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }, 1000);
      yield put({ type: 'minus' });
    },
  },

  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },
    minus(state) {
      return { ...state, current: state.current - 1 };
    }
  },

};
