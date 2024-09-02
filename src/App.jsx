import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UserResponse from './components/UserResponse';
import Form from './components/Form';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                
                    <Route path="/" element={<Form />} />
                    <Route path="/userResponse" element={<UserResponse />} />
                    
                </Routes>
            </div>
        </Router>
    );
}

export default App;