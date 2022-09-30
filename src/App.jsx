import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Book from './pages/Book/Book';
import Home from './pages/home/Home';
import NewBook from './pages/newBook/NewBook';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newBook' element={<NewBook/>}/>
          <Route path='/book/:idBook' element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
