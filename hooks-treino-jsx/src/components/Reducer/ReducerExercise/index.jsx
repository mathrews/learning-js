import { useReducer, useState } from "react";
import "./index.css";

const reducer = (state, action) => {
 switch (action.type) {
  case "new-task": {
   return {
    ...state,
    tasks: action.payload ? [...state.tasks, { nome: action.payload, isCompleted: false }] : [...state.tasks],
    taskCount: state.taskCount + 1,
   };
  }
  case "toggle": {
   return {
    ...state,
    tasks: state.tasks.map((item, index) =>
     index == action.payload ? { ...item, isCompleted: !item.isCompleted } : item
    ),
   };
  }
  default: {
   return state;
  }
 }
};

const ReducerExercise = () => {
 const [state, dispatch] = useReducer(reducer, { tasks: [], taskCount: 0 });

 const [inputValueTask, setInputValue] = useState("");

 return (
  <>
   <form>
    <label htmlFor="task">
     Digite a task:
     <input
      onChange={(e) => setInputValue(e.target.value)}
      type="text"
      value={inputValueTask}
     />
     <button
      type="submit"
      onClick={(e) => {
       e.preventDefault();
       dispatch({ type: "new-task", payload: inputValueTask });
       setInputValue("")
      }}>
      Adicionar task
     </button>
     {state.tasks.map((item, index) => (
      <li
       key={index}
       onClick={() => dispatch({ type: "toggle", payload: index })}
       style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}>
       {item.nome}
      </li>
     ))}
    </label>
   </form>
  </>
 );
};

export default ReducerExercise;
