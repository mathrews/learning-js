import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Carro } from "./pages/Carro";
import { Moto } from "./pages/Moto";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/carro" element={<Carro/>}/>
                <Route path="/moto" element={<Moto/>}/>
            </Routes>
        </Router>
    )
}