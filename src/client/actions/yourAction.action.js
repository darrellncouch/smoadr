import { axios } from "axios";


//get all users
 export const exampleAction = ()=>{
   return async (dispatch)=>{
     dispatch({type: actionTypes.YOUR_ACTION_TYPE_HERE})
     let someVariable = await axios.get('someUrl')
     dispatch({
       type: actionTypes.YOUR_ACTION_TYPE_HERE},
       payload: somePayload
     })
   }
 }
