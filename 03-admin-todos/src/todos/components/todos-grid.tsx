"use client"
import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props {
  todos?: Todo[];
}



export const TodosGrid = ({ todos = [] }: Props) => {

  const router = useRouter();

  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map(todo => (
        <p>{todo.description}</p>
      ))}
    </div>
  )
}