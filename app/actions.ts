"use server";

import { revalidatePath } from "next/cache";
import { addTodo, completeTodo, deleteTodo, Todo } from "./(data)/lib";

export async function handleAddTodo(formData: FormData) {
  const title = formData.get("title");
  if (typeof title !== "string") {
    throw new Error("Invalid title");
  }

  const newTodo: Todo = {
    id: Date.now().toString(),
    title,
    isCompleted: false,
  };

  await addTodo(newTodo);

  revalidatePath("/");
}

export async function handleDeleteTodo(formData: FormData) {
  const id = formData.get("id");
  if (typeof id !== "string") {
    throw new Error("Invalid id");
  }

  await deleteTodo(id);
  revalidatePath("/");
}

export async function handleCompleteTodo(formData: FormData) {
  const id = formData.get("id");
  if (typeof id !== "string") {
    throw new Error("Invalid id");
  }

  await completeTodo(id);
  revalidatePath("/");
}
