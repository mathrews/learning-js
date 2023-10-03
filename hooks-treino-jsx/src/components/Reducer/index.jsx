import { useEffect, useReducer, useRef, useState } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "atribuir": {
            return {
                nome: action.payload1,
                email: action.payload2,
            };
        }
        default:
            return state;
    }
};

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, { nome: "", email: "" });

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    const renders = useRef(0);

    useEffect(() => {
        renders.current += 1;
    });

    return (
        <>
            <form style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <label htmlFor="nome">
                    Nome:{" "}
                    <input
                        onChange={(e) => setNome(e.target.value)}
                        type="text"
                    />
                </label>
                <label htmlFor="email">
                    Email:{" "}
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                </label>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch({ type: "atribuir", payload1: nome, payload2: email });
                    }}>
                    Submit
                </button>
            </form>
            <div>
                <h1>Meu nome é: {state.nome}</h1>
                <h2>Meu email é: {state.email}</h2>
                <p>Renders: {renders.current}</p>
            </div>
        </>
    );
};

export default Reducer;
