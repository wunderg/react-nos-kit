import * as ACTIONS from '../actions/constants/actionTypes.js';

export default (state = { isFetching: true, students: [] }, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_REQUEST:
      return {...state, isFetching: true}
    case ACTIONS.FETCH_DATA_SUCCESS:
      return {...state, isFetching: false, data: action.data.data, source: action.data.data}
    case ACTIONS.FETCH_DATA_FAILURE:
      return {...state, isFetching: false, message: action.data.message}
    default:
      return state;
  }
};
