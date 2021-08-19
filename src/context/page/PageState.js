import React,{useReducer} from 'react'
import PageReducer from './pageReducer'
import PageContext from './pageContext'
import {CHANGE_PAGE,FINISH_TRANSITION} from '../types'


const PageState = ({children}) => {
  const initialState = {
    transitioin: false,
    page:'logistics'
  }

  const [state,dispatch] = useReducer(PageReducer,initialState)

  const changePage = (data) => {
    dispatch({
      type:CHANGE_PAGE,
      payload:data
    })
    console.log(data);
    finishTransition()
  }

  const finishTransition = () => {
    dispatch({
      type:FINISH_TRANSITION
    })
  }

  return(
    <PageContext.Provider value={{
      transition:state.transition,
      page:state.page,
      changePage,
      finishTransition
    }}>
      {children}
    </PageContext.Provider>
  )
}

export default PageState;