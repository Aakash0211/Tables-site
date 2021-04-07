import {UPLOAD} from './Actions'


const initialState={
    file:null
}
export default(state=initialState,action)=>{
 switch(action.type){
    case UPLOAD:{
     return{
      file:action.load
     }
 }
    default:{
    return state
 }
 }
}