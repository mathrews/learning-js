import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/publicPages/LoginPage";
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";
import LoggedPage from "../../pages/authpages/LoggedPage";

const WaysLogin = () => {
    const { state } = useContext(LoginContext);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {state.isLogged ? (
                        <Route
                            path="logged"
                            element={<LoggedPage />}
                        />
                    ) : (
                        <Route
                            index
                            element={<LoginPage />}
                        />
                    )}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default WaysLogin;
