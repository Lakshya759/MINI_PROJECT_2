import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage.jsx'
import Login from './LoginSignup/Login.jsx'
import Dashboard from "./HomePage/Dashboard.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App