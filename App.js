import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Courses from './Courses';
import Header from './Header';

function App() {
  const [themeColor, setThemeColor] = useState('#0077b6');

  const toggleTheme = () => {
    setThemeColor(prevColor => (prevColor === '#0077b6' ? '#00b4d8' : '#0077b6'));
  };

  return (
    <Router>
      <Header themeColor={themeColor} />
      <button onClick={toggleTheme}>Toggle Theme</button> {/* Added button */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
