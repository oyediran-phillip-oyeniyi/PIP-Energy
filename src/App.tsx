import { Route, Routes } from "react-router-dom"
import SunfoldLanding from "./pages/solar"

const App = () => {
  

  return (
    <Routes>
      <Route path="/" element={<SunfoldLanding/>}/>
    </Routes>

  )
}

export default App
