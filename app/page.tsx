import AddTodo from "./(components)/AddTodo";
import TodoList from "./(components)/TodoList";
import { getAllTodos } from "./(data)/lib";
import { handleCompleteTodo, handleDeleteTodo } from "./actions";

export default async function Home() {
  const todos = await getAllTodos();

  const inboxTodos = todos.filter((todo) => !todo.isCompleted);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <main className="p-6">
      <AddTodo />

      <hr className="my-4" />

      <div className="space-y-4">
        <TodoList
          header="Inbox"
          todos={inboxTodos}
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
        <TodoList
          header="Completed"
          todos={completedTodos}
          handleDeleteTodo={handleDeleteTodo}
        />
      </div>
    </main>
  );
}
