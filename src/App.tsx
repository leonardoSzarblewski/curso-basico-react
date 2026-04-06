import { BrowserRouter, Route, Routes, Navigate } from "react-router";

import { About } from "./pages/about";
import { Home } from "./pages/home";
import { AppLayout } from "./shared/layout/AppLayout";


export function App() {

    return (
      <BrowserRouter>
      
        <AppLayout>
          <Routes>

            <Route path="/" element={ <Home/> }/>
            <Route path="/sobre" element={ <About/> }/>

            <Route path="*" element={ <Navigate to='/'/> }/>

          </Routes>
        </AppLayout>
      
      </BrowserRouter>
    )
  } 
