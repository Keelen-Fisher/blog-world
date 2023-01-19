import Footer from './Components/Footer/footer';
import HeaderHome from './Components/Home/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderHome />
        <Routes>
          <Route path="/" />
          <Route path="/settings" />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
