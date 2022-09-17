import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { getAllTodos } from '../Services/2.Actions_Folder/TodosAction';
export const Todos = () => {
const {isLoading,todos,error}=useSelector((state=>state));
const dispatch=useDispatch();

  useEffect(()=>{
  dispatch(getAllTodos())
  },[])
  return (
    <div>
        {isLoading && <h3>Loading...</h3>}
        {error && <h4>Error:{error.message}</h4>}
        <section>
        {
        todos && todos.map((todo)=>{
            return(
                <article key={todo.id}>
                <h4>{todo.id}</h4>
                <p>{todo.title}</p>
                </article>
            )
        })
        } 
        </section>
    </div>
  )
}
