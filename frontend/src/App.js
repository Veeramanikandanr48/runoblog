import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Home from './Pages/Home';
import BlogForm from './Pages/BlogPost';
import ArticleDetail from './Pages/ArticleDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail/>} />
        <Route path="/test" element={<BlogForm />} />
      </Routes>
    </Router>
  );
}

export default App;
