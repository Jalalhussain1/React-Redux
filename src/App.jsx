import { useState } from 'react';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';  // Correct import
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardsDetails />} />  {/* Use a different path for CardsDetails */}
      </Routes>
    </>
  );
}

export default App;

