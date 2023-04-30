import './App.css'
import Layout from "./layouts/layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App;
