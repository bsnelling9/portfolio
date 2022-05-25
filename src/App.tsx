import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </div>
    </Router>
  );
}


