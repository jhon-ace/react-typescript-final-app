import { useState } from "react";
import "./App.css";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // === Regular login ===
  const handleLogin = async () => {
    const api = axios.create({
      baseURL: "http://localhost:4000",
      headers: { "Content-Type": "application/json" },
    });

    try {
      const { data } = await api.post("/login", { username, password });

      if (data.success) {
        localStorage.setItem("fullname", data.fullname);
        setMessage("Login successful!");
        window.location.href = "/dashboard";
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Server error");
    }
  };

  // === Google login ===
  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    try {
      if (!credentialResponse.credential) {
        setMessage("No Google credentials found");
        return;
      }

      const res = await axios.post("http://localhost:4000/google-login", {
        token: credentialResponse.credential,
      });

      if (res.data.success) {
        localStorage.setItem("fullname", res.data.fullname);
        setMessage("Google login successful!");
        window.location.href = "/dashboard";
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      console.error("Google login error:", err);
      setMessage("Google login failed");
    }
  };

  return (
    <GoogleOAuthProvider clientId="550501518917-htm8ija7iddhl3sbnb2aej9450bo3s0a.apps.googleusercontent.com">
      <div className="login">
        <h2>Login Using React + TypeScript + Express + MySQL</h2>

        {/* Regular login */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>

        <hr />

        {/* Google login option */}
        <h3>Or login with Google</h3>
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => setMessage("Google login failed")}
        />

        <p>{message}</p>
      </div>
    </GoogleOAuthProvider>
  );
}













// import  { useState } from "react";
// import "./App.css";
// import axios from "axios";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async () => {
//     const api = axios.create({
//       baseURL: "http://localhost:4000", // your backend server URL
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     try {
//       const { data } = await api.post("/login", { username, password });

//       if (data.success) {
//         localStorage.setItem("fullname", data.fullname);
//         setMessage("Login successful!");
//         window.location.href = "/dashboard";
//       } else {
//         setMessage(data.message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setMessage("Server error");
//     }
//   };

//   return (
//     <div className="login">
//       <h2>Login Using React Typescript + ExpressJS + MySQL + Axios</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={handleLogin}>Login</button>
//       <p>{message}</p>
//     </div>
//   );
// }















// import React, { useState } from "react";
// import './App.css';

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async () => {
//     const response = await fetch("http://localhost:4000/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });
//     const data = await response.json();
//     setMessage(data.message);
//   };

//   return (
//     <div className="login">
//       <h2>Login Using ExpressJS and NodeJS</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={handleLogin}>Login</button>
//       <p>{message}</p>
//     </div>
//   );
// }
