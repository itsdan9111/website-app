import NavBar from './components/NavBar';
import MovieContent from './components/MovieContent/MovieContent';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const handlePage = (pagetype) => {
    setPage(pagetype);
  }

  if (page === 'home') {
    return (
      <div>
        <MovieContent pageContent='home'/>
        <NavBar onPage={handlePage} />
      </div>
    );
  }
  return (
    <div>
      <MovieContent/>
      <NavBar onPage={handlePage} />
    </div>
  );
}

export default App;
