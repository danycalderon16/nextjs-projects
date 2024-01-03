"use client"
import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { TodoItem } from './todo-item';
import * as todosApi from '@/todos/helpers/todos';
import { toggleTodo } from '../actions/todo-actions';

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {

  const router = useRouter();

  // const toggleTodo = async(id: string, complete: boolean) => {
  //   const updatedTodo = await todosApi.updateTodo( id, complete );
  //   router.refresh();
  // }

  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} />
      ))}
    </div>
  )
}