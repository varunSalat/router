// import { BrowserRouter,Routes,Route, Link,NavLink } from "react-router-dom";
import { createBrowserRouter,Route, NavLink, createRoutesFromElements, RouterProvider,useParams } from "react-router-dom";
import { useState } from "react";
 


// *LAYOUTS
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareerLayout from "./layouts/CareerLayout"

// *PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";
import CareerDetail from "./pages/careers/CareerDetail";


// !LOADER FUNCTION
const careerLoader = async()=>{
    const response = await fetch(`http://localhost:4000/careers/`);
    return response.json();
}

// !FETCH DATA

const careerData =async (id)=>{
  const response = await fetch(`http://localhost:4000/careers/${id}`);
  return response.json();
}

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout NavLink={NavLink}/>} >
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="help" element={<HelpLayout/>}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="contact" element={<Contact/>} />
      </Route>
      <Route path="career" element={<CareerLayout/>}>
        <Route index element={<Careers/>} loader={careerLoader} />
        <Route path=":id" element={<CareerDetail careerData={careerData} />}  />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

function App() {
  
  
  return (

  //!NEW WAY
  
<RouterProvider router={router} />

  // !OLD WAY
  // <BrowserRouter>
  // <header>
  //   <nav className="flex" id="nav_bar">
  //     <h1>Varun</h1>
  //     <ul className="link_container">
  //       <NavLink to='/'>Home</NavLink>
  //       <NavLink to='/about'>About Us</NavLink>
  //     </ul>
  //   </nav>
  // </header>
  //   <main>
  //     <Routes>
  //       <Route index element={<Home/>}/>
  //       <Route path="/about" element={<About/>}/>
  //     </Routes>
  //   </main>
  // </BrowserRouter>
  );
}

export default App;
