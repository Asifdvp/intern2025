import{ useState,useRef  } from "react";

const initialTodos = [
  { id: 1, createdAt: new Date().toISOString() },
  { id: 2, createdAt: new Date().toISOString() }
];

function KeyIssue() {
  const [todos, setTodos] = useState(initialTodos);

  const reverseOrder = () => {
    const reversed = [...todos].reverse();
    setTodos(reversed);
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse Order</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            //  Problemli versiya: key={index}
            // İnputa dəyərlər yazıb Reverse Order düyməsinə basdıqda,
            // inputların dəyərləri itəcək.
            //  Bu, React-in key propunu düzgün istifadə etməməyimizdən irəli gəlir.
            //  Düzgün versiya: key={todo.id}
             <Todo key={index} id={todo.id} createdAt={todo.createdAt} />

            //  Düzgün versiya: key={todo.id}
            // <Todo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KeyIssue;


function Todo({ id, createdAt }: { id: number; createdAt: string }) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <tr>
      <td>ID: {id}</td>
      <td>
        <input type="text" ref={inputRef} placeholder="Enter task..." />
      </td>
      <td>Created At: {new Date(createdAt).toLocaleTimeString()}</td>
    </tr>
  );
}