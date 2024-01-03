"use server"
import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const sleep = async( seconds: number = 0 ) => {
  return new Promise( resolve => {
    setTimeout(() => {
      resolve(true);
    },  seconds * 1000 );
  });
}

export const toggleTodo =async (id:string, complete: boolean): Promise<Todo> => {
  await sleep(3)
  const todo = await prisma.todo.findFirst({where:{id}});

  if(!todo) throw new Error(`Todo con id ${id} no encontrado`);

  const updatedTodo = await prisma.todo.update({
    where:{id},
    data:{ complete: complete }
  })
  revalidatePath("/dasboard/server-todo")
  return updatedTodo;
}

export const addTodo = async (description: string) => {
  try {
    // const { complete, description } = await postSchema.validate( await request.json() );

    const todo = await prisma.todo.create({ data: { description } })    
    revalidatePath("/dasboard/server-todo")
    return todo;    
  } catch (error) {
    return {
      message: 'Error al crear la tarea'
    }
  }
}

export const deleteTodos = async () => {
  try {
    await prisma.todo.deleteMany({where:{complete:true}});
    revalidatePath("/dasboard/server-todo")
    return true
  } catch (error) {
    throw new Error(`There was something wrong`)
  }
}