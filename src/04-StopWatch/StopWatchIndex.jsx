import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header.jsx';
import StopWatch from './components/stopwatch/Stopwatch';
import Timer from './components/timer/Timer.jsx';

const StopWatchIndex = () => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<StopWatch />} />
              <Route path="/timer" element={<Timer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default StopWatchIndex;
