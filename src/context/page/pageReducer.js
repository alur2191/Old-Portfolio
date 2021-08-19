import {CHANGE_PAGE,FINISH_TRANSITION} from '../types'

 const pageReducer = (state,{type,payload}) => {
  switch(type){
    case CHANGE_PAGE:
      return {
        ...state,
        page:payload,
        transition:true
      }
    case FINISH_TRANSITION:
      return {
        ...state,
        transition:false
      }
    default:
      return state
  }
}

export default pageReducer