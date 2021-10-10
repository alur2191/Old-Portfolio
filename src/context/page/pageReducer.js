import { CHANGE_PAGE } from '../types';

const pageReducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: payload,
        transition: true,
      };
    default:
      return state;
  }
};

export default pageReducer;
