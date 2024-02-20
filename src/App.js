import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Header';
import About from './About';
import SearchBooks from './SearchBooks';
import Library from './OpenLibrary';
import GenreList from './Genres';
import ReadingRoom from './ReadingRoom';

const LandingPage = () => (
  <>
    <Header />
    <About />
    <GenreList/>
  </>
);

const SecondPage = () => (
  <>
    <Header />
    <GenreList/>
    <ReadingRoom />
  </>
);

// Main App component using React Router
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
