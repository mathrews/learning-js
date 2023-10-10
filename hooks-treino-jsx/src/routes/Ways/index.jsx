import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../../layout/PageLayout";
import HomePage from "../../pages/publicPages/HomePage";
import ContactPage from "../../pages/publicPages/ContactPage";

const Ways = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<PageLayout />}>
                        <Route
                            index
                            element={<HomePage />}
                        />
                        <Route
                            path="/contact"
                            element={<ContactPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Ways;
