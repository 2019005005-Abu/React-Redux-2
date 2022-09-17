import GET_TODOS_REQUEST from "../3.Const_Folder/Todos_CONST"
import GET_TODOS_SUCCESS from '../3.Const_Folder/Todos_CONST';
import GET_TODOS_FAILED from '../3.Const_Folder/Todos_CONST';

const initialState={
   isLoading: false,
   todos:[],
   error:null
}

export const todoReducer=(state=initialState,action)=>{
 switch(action.type){
    case GET_TODOS_REQUEST:
        return{
         ...state,
         isLoading:true
        }
        break;
    case GET_TODOS_SUCCESS:
        return{
            ...state,
            isLoading:false,
            todos:action.payload,
            error:null,
        }
        break;
    case GET_TODOS_FAILED:
        return{
            ...state,
            isLoading:false,
            todos:[],
            error:action.payload
        }
    default:return state;
 }
}