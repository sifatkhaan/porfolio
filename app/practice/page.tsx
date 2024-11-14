'use client';
import React, { useEffect, useReducer, useRef, useState } from 'react'
import Todo from '../component/test/Todo';
export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO:'toggle-todo',
    DELETE_TODO:'delete-todo',
}

function reducer(todos:any, action:any) {
   switch (action.type){
    case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
        return todos.map(todo=>{
            if(todo.id=== action.payload.id){
                return {...todo, complete: !todo.complete}
            }
            return todo
        })
    case ACTIONS.DELETE_TODO:
        return todos.filter(todo=> todo.id !== action.payload.id)
    default:
        return todos;
   }

}

function newTodo(name){
    return {id: Date.now(), name:name, complete:false}
}

export default function Practice() {


    const countValue = useRef<any>(0);
    const divRefElement = useRef<any>();
    const inputRef = useRef<any>();

    useEffect(() => {
        const divReference = divRefElement.current;
        divReference.style.color = 'red'
        setTimeout(() => {
            divReference.style.color = 'blue'
            setTimeout(() => {
                divReference.style.color = 'green'
            }, 2000);
        }, 2000)
        inputRef.current.focus()
    }, []);

    function handleClick() {
        countValue.current++
    }
    //use reducer
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {name:name}})
        setName('')
    }
    

    console.log(todos, 'to dos')
    return (
        <div className='h-screen bg-gray-200 p-10'>
            <div>
                <h1>Use Ref Hook</h1>
                <button onClick={handleClick}>Click It</button>
                <div className='' ref={divRefElement}>
                    <h2>Some Random Text</h2>
                    <input type="text" name='name' placeholder='Enter your name' ref={inputRef} className='p-2 outline-pink-500 border-purple-400' />
                </div>
            </div>
            <div className='text-xl py-10'>
               <form action="" onSubmit={handleSubmit}>
                <input type="text" name='name' value={name} onChange={e => setName(e.target.value)}/>
               </form>
            </div>
            <div>
                {todos.map((todo=>(
                    <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                )))}
            </div>
        </div>
    )
}
