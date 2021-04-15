import React from 'react'
import NavBar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
    </Router>
  );
}

export default App;
