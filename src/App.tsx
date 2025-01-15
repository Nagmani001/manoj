import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Landing from "./pages/landing.tsx";
import Signup from "./pages/signup.tsx";
import Signin from "./pages/signin.tsx";
export default function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  </div>
}

