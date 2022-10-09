import './App.css';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { Home } from './component/Home';
import { Detail } from './component/Event';
import { WholeList } from './component/WholeList';
import { bsList } from './component/record';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCS-8l0whqAOODU7US5ex1hZ4FfoE7WDDA",
  authDomain: "info270a1.firebaseapp.com",
  projectId: "info270a1",
  storageBucket: "info270a1.appspot.com",
  messagingSenderId: "114903139883",
  appId: "1:114903139883:web:2de94ffb7ea24283684c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
