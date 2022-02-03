import './App.css';
import HomePage from './components/HomePage'
import PrincipalButtons from './components/PrincipalButtons'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Playing from './components/Playing'
import GameOver from './components/Gameover'
import Winner from './components/Winner'

function App() {
  return (
    <BrowserRouter>
    <h1>Hola</h1>
      <Routes>
        {/* <Route path="/" element={[<HomePage key='hp'/>, <PrincipalButtons key='pb'/>]} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/playing" element={<Playing />} />
        <Route path="/gameover" element={<GameOver />} />
        <Route path="/winner" element={<Winner />} />
        Winner
      </Routes>
    </BrowserRouter>
  );
}

export default App;
