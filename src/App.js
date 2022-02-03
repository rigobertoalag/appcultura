import './App.css';
import HomePage from './components/HomePage'
import PrincipalButtons from './components/PrincipalButtons'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Playing from './components/Playing'
import GameOver from './components/Gameover'
import Winner from './components/Winner'
import Rules from './components/Rules'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/appcultura/" element={[<HomePage key='hp'/>, <PrincipalButtons key='pb'/>]} />
        <Route path="/appcultura/playing" element={<Playing />} />
        <Route path="/appcultura/gameover" element={<GameOver />} />
        <Route path="/appcultura/winner" element={<Winner />} />
        <Route path="/appcultura/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
