import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import { storage } from "../../firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import ChatPanel from "./ChatPanel";
import ChatWindow from "./ChatWindow";

function Home() {
  // const setIsLoggedIn = props.setIsLoggedIn;
  // const navigate = useNavigate();
  // const handleLogout = async () => {
  //   await signOut(auth);
  //   setIsLoggedIn(false);
  //   // alert("Logout");
  //   navigate("/login");
  // };
  // const handleChange = (e) => {
  //   console.log("Change Event");
  //   const img = e.target.files[0];
  //   //address
  //   const storageRef = ref(storage, "/profile" + Math.random());
  //   //storage task
  //   const uploadTask = uploadBytesResumable(storageRef, img);
  //   uploadTask.on("state_changed", progressCB, errorCB, finishedCB);
  //   //upload
  //   function progressCB(data) {
  //     console.log("data", data);
  //   }
  //   //if error
  //   function errorCB(err) {
  //     console.log("error", err);
  //   }
  //   //on success
  //   function finishedCB() {
  //     console.log("File uploaded successfully");
  //     getDownloadURL(uploadTask.snapshot.ref).then(function (url) {
  //       console.log("url", url);
  //     });
  //   }
  // };
  return (
    <main className="relative w-full h-screen bg-[#E3E1DB]">
      {/* <input type='file'
        accept='image/png image/jpeg image/webp'
        onChange={handleChange}
      ></input> */}
      <div className="absolute top-0 h-[130px] bg-primary  w-full" />

      <div className="absolute p-5 top-0 h-screen w-full">
        <div className="bg-background w-full h-full shadow-md flex">
          {/* conditonal rehne waale hai -> chat list , profile */}
          <ChatPanel></ChatPanel>
          {/* <div>Empty Chat</div>:<div>Individual CHat</div> */}
          <ChatWindow></ChatWindow>
        </div>
      </div>
    </main>
  );
}

export default Home;
