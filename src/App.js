import './App.css';
import {Routes, Route} from 'react-router-dom'
import Signup from './components/SignupForm'
import Home from './components/Home'
const App=()=>{
  return(
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}
export default App;
