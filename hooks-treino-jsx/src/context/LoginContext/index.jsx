import { createContext, useReducer, useState } from "react";

export const LoginContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "register": {
            return {
                ...state,
                email: action.payload1,
                pass: action.payload2,
            };
        }
        default:
            return state;
    }
};

export const LoginProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { email: "", pass: "", isLogged: false });

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [log, setLog] = useState(false);

    const setState = () => {
        dispatch({ type: "register", payload1: email, payload2: pass });
    };

    const verifyState = () => {
        dispatch({ type: "verify", payload1: email, payload2: pass });
    };

    return (
        <>
            <LoginContext.Provider
                value={{ state, email, pass, dispatch, setEmail, setPass, setState, log, setLog, verifyState }}>
                {children}
            </LoginContext.Provider>
        </>
    );
};
