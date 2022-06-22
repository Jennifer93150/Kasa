import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';

/** Components */
import Home from '../src/pages/Home'
import Location from '../src/pages/Location'
import About from '../src/pages/About'
import Error from '../src/pages/Error'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" index element={<Home />}/>
      <Route exact path="/location/:id" element={<Location />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="*" element={<Error />}/>
    </Routes>
  </BrowserRouter>
);

/**
 * ceci est deprecié apparement
 * ReactDOM.render n'est plus pris en charge dans React 18. 
 * Utilisez plutôt createRoot.(cô plus haut)
 */
// ReactDOM.render(
  
//   <BrowserRouter>
//     <Routes>
//       <Route exact path="/" index element={<Home />}/>
//     </Routes>
//   </BrowserRouter>,
// document.getElementById('root')
// )
