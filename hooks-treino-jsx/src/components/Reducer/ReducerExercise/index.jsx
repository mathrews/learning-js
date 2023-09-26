import { useEffect, useReducer, useRef, useState } from "react";
import "./index.css";

const reducer = (state, action) => {
    switch (action.type) {
        case "new-task": {
            return {
                ...state,
                tasks: action.payload
                    ? [...state.tasks, { nome: action.payload, isCompleted: false }]
                    : [...state.tasks],
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
        case "remove": {
            return{
                ...state,
                tasks: state.tasks.filter((item, index) => index != action.payload) // O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida. Retorna um novo array com os elements que passaram no teste. Elementos do array que não passaram no teste do callback são simplesmente ignorados, e não são incluídos no novo array.
            }
        }
        default: {
            return state;
        }
    }
};

const ReducerExercise = () => {
    const [state, dispatch] = useReducer(reducer, { tasks: [], taskCount: 0 });

    const [inputValueTask, setInputValue] = useState("");

    const renders = useRef(0);

    useEffect(() => {
        renders.current += 1;
    }, [state]);

    // const removeTask = (indexTask) => {
    //     let aux = []
    //     state.tasks.map((item, index) => {
    //         if (index != indexTask) {
    //             aux.push(item)
    //         }
    //     })
    //     state.tasks = aux
    // }

    return (
        <>
            <form>
                <label htmlFor="task">
                    Digite a task:
                    <input
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                        value={inputValueTask}
                        id="task"
                    />
                </label>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch({ type: "new-task", payload: inputValueTask });
                        setInputValue("");
                    }}>
                    Adicionar task
                </button>
            </form>

            <ul>
                {state.tasks.map((item, index) => (
                    <>
                        <li
                            key={index}
                            style={{
                                textDecoration: item.isCompleted ? "line-through" : "none",
                                display: "flex",
                                flexDirection: "column",
                                width: 100,
                                gap: 6,
                                margin: 6
                            }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                {item.nome}{" "}
                                <button onClick={() => dispatch({ type: "toggle", payload: index })}>toggle</button>
                                <button onClick={() => dispatch({ type: "remove", payload: index })}>Remove</button>
                            </div>
                        </li>
                    </>
                ))}
            </ul>

            <h2>{renders.current}</h2>
        </>
    );
};

export default ReducerExercise;
