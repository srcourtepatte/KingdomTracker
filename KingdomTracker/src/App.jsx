import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Homepage, MyKingdom } from './Views'
import { NavBar } from './Components';

function App() {
  
  document.body.style = 'background: rgb(3, 40, 25)';

  return (
    <div id="Page">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="mykingdom" element={<MyKingdom />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
