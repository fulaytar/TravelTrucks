import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../Layout/Layout';
import MiniLoader from '../MiniLoader/MiniLoader'; // Assuming you have a MiniLoader component
import Trucks from '../../pages/DetailTruck/DetailTruck';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

// Lazy load the pages
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const Favorite = lazy(() => import('../../pages/Favorite/Favorite'));
/* const Features = lazy(() => import('../../pages/Features/Features')); // Ensure Features component exists
const Reviews = lazy(() => import('../../pages/Reviews/Reviews')); // Ensure Reviews component exists
 */
export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<MiniLoader />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalog' element={<CatalogPage />} />
            <Route path='/catalog/:id' element={<Trucks />}>
              <Route path='features' element={<Features />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
            <Route path='/favorite' element={<Favorite />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
