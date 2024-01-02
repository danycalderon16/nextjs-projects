import React from 'react'
import prisma from '@/lib/prisma';
import { TodosGrid } from '@/todos/components';

export const metadata = {
  title: 'Listado de Todos',
  description: 'SEO Title',
 };
 

export default async function PagesYodos() {
  
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <TodosGrid todos={todos} />
  )
}
