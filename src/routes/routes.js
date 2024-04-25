import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";


function AppRoute(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
  )
}

export default AppRoute