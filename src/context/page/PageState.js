import React, { useReducer } from 'react';
import PageReducer from './pageReducer';
import PageContext from './pageContext';
import { CHANGE_PAGE } from '../types';

const PageState = ({ children }) => {
  const initialState = {
    transitioin: false,
    page: '',
  };

  const [state, dispatch] = useReducer(PageReducer, initialState);

  const changePage = (data) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: data,
    });
  };

  return (
    <PageContext.Provider
      value={{
        transition: state.transition,
        page: state.page,
        changePage,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageState;
