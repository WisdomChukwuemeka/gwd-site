import {Portfolio} from "../pages/portfolio"
import { Home } from "../pages/home.jsx"
import { Contact } from "../pages/contact"
import { Services } from "../pages/services"
import { About } from "../pages/about"
import { Support } from "../pages/support"
import {Routes, Route} from "react-router-dom"
export const App = () => {
  return(
    <>
      <div>
        <Portfolio />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<Support />} />
        </Routes>

      </div>
    </>
  )
}