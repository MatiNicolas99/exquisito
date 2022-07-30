import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom" 
import Searched from "./Searched";
import Recipe from "./Recipe";
import Contacto from "./Contacto";


const Pages = () => {
  return (
    
     <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/contacto/" element={<Contacto/>} />
        <Route path="/cuisine/:type" element={<Cuisine/> } />
        <Route path="/searched/:search" element={<Searched /> } />
        <Route path="/recipe/:name" element={<Recipe /> } />
      </Routes> 
  )
}

export default Pages