import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Homepage, MyKingdom, Login, UserDash, NewKingdom } from './Views'
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
          <Route path="/mykingdom/:kingdomName/:id" element={<MyKingdom />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<UserDash />} />
          <Route path="/newKingdom" element={<NewKingdom />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
