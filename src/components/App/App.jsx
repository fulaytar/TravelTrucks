import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../Layout/Layout';
import MiniLoader from '../MiniLoader/MiniLoader'; // Assuming you have a MiniLoader component

// Lazy load the pages
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const Favorite = lazy(() => import('../../pages/Favorite/Favorite'));

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<MiniLoader />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/catalog/:id' element={<CatalogPage />} />
            <Route path='/favorite' element={<Favorite />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
