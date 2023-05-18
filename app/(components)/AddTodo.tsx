import { handleAddTodo } from "../actions";

export default function AddTodo() {
  return (
    <div>
      <div className="text-4xl font-bold mb-4">Add todo</div>
      <form action={handleAddTodo} className="space-y-3">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-900 mb-1.5"
          >
            Title
          </label>
          <input
            className="border rounded shadow-sm px-3 py-2 w-full outline-black focus:outline-2 focus:outline"
            placeholder="Title..."
            id="title"
            name="title"
            type="text"
            autoComplete="off"
            required
          />
        </div>
        <button
          type="submit"
          className="px-3.5 py-2.5 bg-black hover:bg-gray-800 active:bg-black text-white rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
