
import React from 'react';
import { ACTIONS } from '../../practice/page';

interface TodoType {
  id: number;
  name: string;
  complete: boolean;
}

interface TodoProps {
  todo: TodoType;
  dispatch: React.Dispatch<{ type: string, payload: any }>;
}

export default function Todo({ todo, dispatch }: TodoProps) {
  return (
    <div>
      <span style={{ color: todo.complete ? '#AAA' : '#000' }}>{todo.name}</span>
      <button className="px-10" onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
    </div>
  );
}
