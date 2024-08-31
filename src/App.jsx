import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import PostCreate from "./pages/PostCreate"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="create" element={<PostCreate />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App