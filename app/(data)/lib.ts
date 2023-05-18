import { readFile, writeFile } from "fs/promises";

export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export async function getAllTodos() {
  const data = await readFile("app/(data)/todos.json", "utf-8");
  const todos = JSON.parse(data) as Todo[];

  return todos;
}

export async function addTodo(todo: Todo) {
  const data = await readFile("app/(data)/todos.json", "utf-8");
  const todos = JSON.parse(data) as Todo[];

  todos.unshift(todo);

  await writeFile("app/(data)/todos.json", JSON.stringify(todos, null, 2));
}

export async function deleteTodo(id: string) {
  const data = await readFile("app/(data)/todos.json", "utf-8");
  const todos = JSON.parse(data) as Todo[];

  const newTodos = todos.filter((todo) => todo.id !== id);

  await writeFile("app/(data)/todos.json", JSON.stringify(newTodos, null, 2));
}

export async function completeTodo(id: string) {
  const data = await readFile("app/(data)/todos.json", "utf-8");
  const todos = JSON.parse(data) as Todo[];

  const newTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        isCompleted: true,
      };
    }

    return todo;
  });

  await writeFile("app/(data)/todos.json", JSON.stringify(newTodos, null, 2));
}
