import React from "react";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos/components";

export const metadata = {
  title: "Listado de Todos",
  description: "SEO Title",
};

export default async function PagesYodos() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo  />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
