import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Error from "../pages/Error/Error"
import Logement from "../pages/Logement/Logement"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="logement/:id" element={<Logement/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
