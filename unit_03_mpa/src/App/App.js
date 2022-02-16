import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Category from '../Category/Category';
import CategoryDescription from '../Category/CategoryDescription';
import Error from '../Error/Error';

function App() {
    const nav = [
        {
            href: '/',
            text: 'Главная',
        },
        {
            href: '/about',
            text: 'О сайте',
        },
        {
            href: '/cat',
            text: 'Категории',
        },
    ];

    const catList = [
        {
            href: '/notebook',
            text: 'Ноутбуки',
        },
        {
            href: '/monitor',
            text: 'Мониторы',
        },
        {
            href: '/cellphone',
            text: 'Мобильные телефоны',
        },
    ];

    return (
        <div className="App">
            <Header nav={nav}></Header>

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cat" element={<Category nav={catList} />} />
                    <Route path="/cat/:name" element={<CategoryDescription />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>


            <Footer></Footer>
        </div>
  );
}

export default App;
