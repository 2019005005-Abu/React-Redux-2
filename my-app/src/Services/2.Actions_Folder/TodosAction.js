import axios from "axios";
import GET_TODOS_REQUEST from '../3.Const_Folder/Todos_CONST';
import GET_TODOS_SUCCESS from '../3.Const_Folder/Todos_CONST';
import GET_TODOS_FAILED from '../3.Const_Folder/Todos_CONST';

export const getAllTodos=()=>async(dispatch)=>{
    dispatch({type:GET_TODOS_REQUEST});
try{
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts'); 
    dispatch({type:GET_TODOS_SUCCESS,
    payload:response.data
    })
}catch(err){
 dispatch({
    type:GET_TODOS_FAILED,
    payload:err.message
   })
  }

}



