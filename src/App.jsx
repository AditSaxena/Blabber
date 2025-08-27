import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Chat from "./Components/Chat";
import PageNotFound from "./Components/PageNotFound";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <h1>Blabber</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/chat/:uniqueId" element={<Chat></Chat>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
