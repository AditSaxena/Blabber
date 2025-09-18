import React from "react";
import logo from "../Assets/icons8-chat.gif";
import logo_name from "../Assets/name_logo.png";
import { IdCard, LogIn } from "lucide-react";

function Login() {
  return (
    <>
      <div className="h-[220px] bg-[#04a784] pt-10">
        <div className="flex ml-[100px] items-center gap-4 bg-white p-4 rounded-md shadow w-fit">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-md" />
          <img src={logo_name} alt="logo name" className="h-10" />
        </div>
      </div>

      <div className="bg-[#eff2f5] h-[calc(100vh-220px)] flex justify-center items-center relative">
        <div className="bg-white h-[80%] w-[50%] shadow-2xl flex flex-col  items-center justify-center absolute -top-[50px] rounded-xl">
          <IdCard className="h-30 w-30 text-[#04a784]" strokeWidth={1} />
          <div className="text-3xl">Sign In</div>
          <div className="gap-2 flex flex-col items-center justify-center pt-[75px]">
            <div className="text-xl">
              Sign in with your Google account to get started.
            </div>
            <button className="bg-[#04a784] p-4 flex gap-3 items-center justify-center text-white cursor-pointer text-xl rounded-lg hover:bg-[#028166]">
              <div className="flex gap-2">
                <div>Sign in with </div>
                <div>
                  <img
                    className="bg-white rounded-4xl h-7"
                    alt="svgImg"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiNGRkMxMDciIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0xLjY0OSw0LjY1Ny02LjA4LDgtMTEuMzAzLDhjLTYuNjI3LDAtMTItNS4zNzMtMTItMTJjMC02LjYyNyw1LjM3My0xMiwxMi0xMmMzLjA1OSwwLDUuODQyLDEuMTU0LDcuOTYxLDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0Niw2LjA1MywyOS4yNjgsNCwyNCw0QzEyLjk1NSw0LDQsMTIuOTU1LDQsMjRjMCwxMS4wNDUsOC45NTUsMjAsMjAsMjBjMTEuMDQ1LDAsMjAtOC45NTUsMjAtMjBDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiIvPjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Ik02LjMwNiwxNC42OTFsNi41NzEsNC44MTlDMTQuNjU1LDE1LjEwOCwxOC45NjEsMTIsMjQsMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxNi4zMTgsNCw5LjY1Niw4LjMzNyw2LjMwNiwxNC42OTF6Ii8+PHBhdGggZmlsbD0iIzRDQUY1MCIgZD0iTTI0LDQ0YzUuMTY2LDAsOS44Ni0xLjk3NywxMy40MDktNS4xOTJsLTYuMTktNS4yMzhDMjkuMjExLDM1LjA5MSwyNi43MTUsMzYsMjQsMzZjLTUuMjAyLDAtOS42MTktMy4zMTctMTEuMjgzLTcuOTQ2bC02LjUyMiw1LjAyNUM5LjUwNSwzOS41NTYsMTYuMjI3LDQ0LDI0LDQ0eiIvPjxwYXRoIGZpbGw9IiMxOTc2RDIiIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0wLjc5MiwyLjIzNy0yLjIzMSw0LjE2Ni00LjA4Nyw1LjU3MWMwLjAwMS0wLjAwMSwwLjAwMi0wLjAwMSwwLjAwMy0wLjAwMmw2LjE5LDUuMjM4QzM2Ljk3MSwzOS4yMDUsNDQsMzQsNDQsMjRDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiIvPjwvc3ZnPg=="
                  />{" "}
                </div>
              </div>
              <LogIn className="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
