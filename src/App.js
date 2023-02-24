import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    {/* <Route  path='/' element={<Join />} /> */}
                    <Route  path='https://nilesh516.github.io/WhishperNet' element={<Join />} />
                    <Route  path='/chat' element={<Chat />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
