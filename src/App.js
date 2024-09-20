import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/login';
import SignUp from './Pages/Signup';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Signup" element={<SignUp />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
