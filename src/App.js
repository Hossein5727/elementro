// pakejes 
import { Route, Routes } from 'react-router-dom';
// files 
import { HomePage, Services } from './pages';
import Layout from './layout/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Layout>
  );
}

export default App;
