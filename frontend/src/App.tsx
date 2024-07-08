import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import PageLayout from './components/pageLayout';
import ProductsPage from './pages/productsPage';
import ItemPage from './pages/itemPage';

function App() {

  return (
      <PageLayout>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/products/:itemId' element={<ItemPage/>}/>
        </Routes>
      </PageLayout>
  )
}

export default App;
