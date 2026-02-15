import { useState } from 'react'
import { Routes ,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage'
import Header from './components/Header'
import PrivateRoute from './utils/PrivateRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
      <Routes>
        <Route path="/" element={<PrivateRoute> <Homepage /> </PrivateRoute>}/>
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </>
  )
}

export default App
