import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderNew from "./components/HeaderNew";
import Home from "./components/Home";

import AddPatient from './components/AddPatient';


import DoctorLoging from "./components/DoctorLogin";


import './header_home.css'
import './App.css'
import './JavaSc'
import './report.css';
import Login from "./components/Login";

import { useEffect, useState } from "react";

function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(localStorage.getItem('role') ? localStorage.getItem('role') : "");

    })

    return (
        <>
            <div className="App">
                <HeaderNew />
                {
                    user == "admin" ? (

                        <Router>
                        </Router>

                    ) : user == 'user' ? (

                        <Router>
                        </Router>


                    ) : null

                }
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<AddPatient />} />
                        <Route exact path="/doctorLogin" element={<DoctorLoging />} />
                        {/*<Route exact path="/*" element={<Navigate to={"/"} replace />} />*/}
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
