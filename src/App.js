import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Join />} />
                    <Route exact path='/chat' element={<Chat />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
