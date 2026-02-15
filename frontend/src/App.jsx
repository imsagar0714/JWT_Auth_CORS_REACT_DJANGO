import { useState } from 'react'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import Header from './components/Header'
import PrivateRoute from './utils/PrivateRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
      <Routes>
        <Route path="/" element={<PrivateRoute> <Homepage /> </PrivateRoute>}/>
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
