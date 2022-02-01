import './App.css';
import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css"
import "bootstrap/dist/js/bootstrap.js";
import NavHeader from "./components/NavHeader";
// import SideNav from "./components/sidenav";
import ViewCourse from "./pages/courses/view"
import Viewer from "./pages/courses/viewer"
import ViewSingleCourse from "./pages/courses/view/[slug]"
import ViewCourseResult from "./pages/results/index.js"
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer 
    position="top-center"
    autoclose={5000}
    draggable
    />
    {/* <SideNav /> */}
    <BrowserRouter>
    <div>
    <NavHeader/>
      <Routes>
        <Route path='add-course' element={<ViewCourse />}></Route>
        <Route path='courses' element={<Viewer/>}></Route>
        <Route path='/courses/view/:slug' element={<ViewSingleCourse/>}></Route>
        <Route path='/results/:slug/:item.session' element={<ViewCourseResult/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
