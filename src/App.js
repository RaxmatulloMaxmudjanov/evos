import { Route, Routes } from 'react-router';
import './App.css';
import Home from './router/home/Home';
import Filiallar from './components/filialllar/Filiallar';
import Vakantlar from './components/vakantlar/Vakantlar';
import Yangiliklar from './components/yangiliklar/Yangiliklar';
import Bizhaqimizda from './components/bizhaqimizda/Bizhaqiizda';
import Kontaktlar from './components/kontaktlar/Kontaktlar'
import Header from './components/header/Header';
import Yetgazish from './components/yetgazish/Yetgazish';
import SinglePage from './components/singlePage/SinglePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/Filliallar' element={<Filiallar/>} />
        <Route path='/Vakantlar' element={<Vakantlar/>} />
        <Route path='/Yangiliklar' element={<Yangiliklar/>} />
        <Route path='/Bizhaqimizda' element={<Bizhaqimizda/>} />
        <Route path='/Kontaktlar' element={<Kontaktlar/>} />
        <Route path='/yetgazish' element={<Yetgazish/>}/>
        <Route path='/singlePage/:_id' element={<SinglePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
