import { Todo } from "../(data)/lib";
import CheckIcon from "./CheckIcon";
import DeleteIcon from "./DeleteIcon";

type TodoListProps = {
  header: string;
  todos: Todo[];
  handleCompleteTodo?: (formData: FormData) => Promise<void>;
  handleDeleteTodo?: (formData: FormData) => Promise<void>;
};

export default function TodoList(props: TodoListProps) {
  return (
    <div>
      <h3 className="font-medium mb-2 text-lg">{props.header}</h3>
      <div className="space-y-4">
        {props.todos.map((todo) => (
          <div
            className="flex items-center gap-2 px-4 border border-gray-300 rounded hover:border-gray-400"
            key={todo.id}
          >
            <p className="w-full py-4 text-sm font-medium text-gray-900">
              {todo.title}
            </p>

            {props.handleCompleteTodo && (
              <form action={props.handleCompleteTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <button
                  type="submit"
                  className="p-2.5 bg-black hover:bg-gray-800 active:bg-black rounded font-medium text-white"
                >
                  <CheckIcon className="w-5 h-5" />
                  <span className="sr-only">Done</span>
                </button>
              </form>
            )}

            {props.handleDeleteTodo && (
              <form action={props.handleDeleteTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <button
                  type="submit"
                  className="p-2.5 bg-black hover:bg-gray-800 active:bg-black rounded font-medium text-white"
                >
                  <DeleteIcon className="w-5 h-5" />
                  <span className="sr-only">Delete</span>
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
