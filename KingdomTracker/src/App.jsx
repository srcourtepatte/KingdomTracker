import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Homepage, MyKingdom, Login } from './Views'
import { NavBar } from './Components';
import Registration from './Views/Registration';


function App() {
  
  document.body.style = 'background: rgb(3, 40, 25)';

  return (
    <div id="Page">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mykingdom" element={<MyKingdom />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
