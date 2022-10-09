import './App.css';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { Home } from './component/Home';
import { Detail } from './component/Event';
import { WholeList } from './component/WholeList';
import { bsList } from './component/record';

function App() {
  return (
    <div className="App">

      <header>Bullshit Inventory</header>
      <Routes>
        <Route index element={<Home />} />
        <Route path='wholelist' element={<WholeList list={bsList} />} />
        <Route path='detail/:num' element={<Detail list={bsList} />} />
      </Routes>
    </div>
  );
}



export default App;
