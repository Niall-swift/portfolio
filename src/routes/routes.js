import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboadr from "../pages/Dashboadr";


function AppRoute(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Dashboardr" element={<Dashboadr/>}/>
    </Routes>
  )
}

export default AppRoute