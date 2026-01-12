import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import SkillsPage from './components/SkillsPage';
import AchievementsPage from './components/AchievementsPage';
import EducationPage from './components/EducationPage';
import CPProfilesPage from './components/CPProfilesPage';
import Certifications from './components/Certifications';
import ResumePage from './components/ResumePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Listen for hash changes to update current page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial page
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
      case 'hero':
        return <Hero />;
      case 'projects':
        return <ProjectsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'skills':
        return <SkillsPage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'education':
        return <EducationPage />;
      case 'cp-profiles':
        return <CPProfilesPage />;
      case 'certifications':
        return <Certifications />;
      case 'resume':
        return <ResumePage />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="app">
      <Navbar />
      {renderCurrentPage()}
    </div>
  );
}

export default App;
