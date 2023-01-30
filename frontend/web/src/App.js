import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Layout from "./pages/Layout"
import Login from "./pages/Login"
import Dashboard from "./components/Dashboard"
import Comments from "./components/CommentContainer"
import Settings from "./components/Settings"
import Pharmacy from "./components/Pharmacy"
import PharmacyDetails from "./pages/PharmacyDetails"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<Layout />}>
                    <Route path="/Home" element={<Dashboard />} />
                    <Route path="/Pharmacy" element={<Pharmacy />} />
                    <Route path="/Pharmacy/:id" element={<PharmacyDetails />} />
                    <Route path="/Comments" element={<Comments />} />
                    <Route path="/Settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
