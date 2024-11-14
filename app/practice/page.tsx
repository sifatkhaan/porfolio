'use client';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import Todo from '../component/test/Todo';

// Define the action types as constants
export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
};

// Define the type for the Todo item
interface TodoType {
    id: number;
    name: string;
    complete: boolean;
}

// Define the reducer function with typed parameters
function reducer(todos: TodoType[], action: { type: string, payload: any }): TodoType[] {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

// Helper function to create a new Todo
function newTodo(name: string) {
    return { id: Date.now(), name: name, complete: false };
}

export default function Practice() {
    // Use refs for handling focus and dynamic styles
    const countValue = useRef<number>(0);
    const divRefElement = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const divReference = divRefElement.current;
        if (divReference) {
            divReference.style.color = 'red';
            setTimeout(() => {
                divReference.style.color = 'blue';
                setTimeout(() => {
                    divReference.style.color = 'green';
                }, 2000);
            }, 2000);
        }

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Reducer and state for todos
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState<string>('');

    // Handle form submission
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    }

    // Handle button click for count
    function handleClick() {
        countValue.current++;
    }

    return (
        <div className='h-screen bg-gray-200 p-10'>
            <div>
                <h1>Use Ref Hook</h1>
                <button onClick={handleClick}>Click It</button>
                <div className='' ref={divRefElement}>
                    <h2>Some Random Text</h2>
                    <input
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        ref={inputRef}
                        className='p-2 outline-pink-500 border-purple-400'
                    />
                </div>
            </div>
            <div className='text-xl py-10'>
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter a todo"
                        className="p-2 border rounded"
                    />
                </form>
            </div>
            <div>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </div>
        </div>
    );
}
