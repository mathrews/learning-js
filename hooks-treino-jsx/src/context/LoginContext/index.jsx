import { createContext, useReducer, useState } from "react";

export const LoginContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "atribuir": {
            return {
                email: action.payload1,
                pass: action.payload2,
            };
        }
        default:
            return state;
    }
};

export const LoginProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { email: "", pass: "" });

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const setState = () => {
        dispatch({type: "log", payload1: email, payload2: pass})
    }

    return(
        <>
            <LoginContext.Provider value={{state, email, pass, dispatch, setEmail, setPass, setState}}>{children}</LoginContext.Provider>
        </>
    )
}