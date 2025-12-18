import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";
import Home from "./Components/Home";
import { useState } from "react";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/:chatid"
          element={
            <ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
