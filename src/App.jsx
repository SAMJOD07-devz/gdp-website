import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreasPage from './pages/PracticeAreasPage';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="practice-areas" element={<PracticeAreasPage />} />
          <Route path="team" element={<Team />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<InsightDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
