import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Homepage } from './Views'
import { NavBar } from './Components';

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
