import { Portfolio, Home, Contact, Services, About, Support } from "../routing/routing"
import {Routes, Route, Navigate} from "react-router-dom"
export const App = () => {
  return(
    <>
      <div>
      <Portfolio />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/support" element={<Support/>}/>

          {/* Redirect to home if no route matches */}
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* Redirect to home if no route matches */}
        </Routes>

      </div>
    </>
  )
}