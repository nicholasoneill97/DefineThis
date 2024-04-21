//import createBrowserRouter
import { createBrowserRouter } from "react-router-dom";

//import all three pages for defining router
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


//router declaration including all custom page components with corresponding paths

export const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/about', element: <About />},
    {path: '/contact', element: <Contact />}
])