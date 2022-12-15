import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import ClubInfo from './pages/Club/Club';
import News from './pages/News/News';
import Fixture from './pages/Fixture/Fixture';
import Contact from './pages/Contact/Contact';
import Stats from './pages/Stats/Stats';
import Footer from './components/Footer/Footer';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import Copyright from './pages/Copyright/Copyright';

export default function App() {
  return (
    <>
    <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubinfo" element={<ClubInfo />} />
          <Route path="/news-events" element={<News />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/playerstats" element={<Stats />} />
          <Route path="/termsofservice" element={<Terms />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/copyrightpolicy" element={<Copyright />} />
        </Routes>
      <Footer />
    </Router>
    </>
  );
}