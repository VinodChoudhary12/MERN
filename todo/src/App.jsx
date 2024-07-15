
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from './components/Login'
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/index" element={<MainComponent />} />
      </Routes>


    </>
  );
}

export default App;
