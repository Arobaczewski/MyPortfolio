import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './Components/Layout/Navigation';
import { HomePage } from './Pages/HomePage';
import { ProjectsPage } from './Pages/ProjectsPage';
import { PlayPage } from './Pages/PlayPage';
import { AboutPage } from './Pages/AboutPage';
import { CaseStudyPage } from './Pages/CaseStudyPage';
import { NotFoundPage } from './Pages/NotFoundPage';

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navigation />
      <AnimatePresence mode="sync" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<ProjectsPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;