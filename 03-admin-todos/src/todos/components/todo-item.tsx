"use client";

import { Todo } from "@prisma/client";

import styles from "./todo-item.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { startTransition, useOptimistic } from "react";

interface Props {
  todo: Todo;
  // TODO: Acciones que quiero llamar
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const [todoOptimist, toggleTodoOptimist] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() =>toggleTodoOptimist(!todoOptimist.complete))
      await toggleTodo(todoOptimist.id, !todoOptimist.complete);
    } catch (error) {
      startTransition(() =>toggleTodoOptimist(!todoOptimist.complete))
    }
  };

  return (
    <div
      className={todoOptimist.complete ? styles.todoDone : styles.todoPending}
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          // onClick={() => toggleTodo(todoOptimist.id, !todoOptimist.complete)}
          onClick={onToggleTodo}
          className={`
            flex p-2 rounded-md cursor-pointer
            hover:bg-opacity-60
            ${todoOptimist.complete ? "bg-blue-100" : "bg-red-100"}
          `}
        >
          {todoOptimist.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>

        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
};
