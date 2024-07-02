import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import PageLayout from './components/pageLayout';
import ProductsPage from './pages/productsPage';
import IndividualProductsPage from './pages/IndividualProductsPage';

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path="/product/:name" element={<IndividualProductsPage />} />
      </Routes>
    </PageLayout>
  )
}

export default App;
