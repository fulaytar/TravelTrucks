import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import HomePage from '../../pages/HomePage/HomePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<CatalogPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
