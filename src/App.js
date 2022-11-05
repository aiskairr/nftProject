import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NFTinfo from './pages/NFTinfo/NFTinfo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/asset/:address/:token_id' element={<NFTinfo />}/>
    </Routes>
  );
}

export default App;
