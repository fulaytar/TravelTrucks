import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import HomePage from '../../pages/HomePage/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Favorite from '../../pages/Favorite/Favorite';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<CatalogPage />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </Layout>
    </Router>
  );
}
