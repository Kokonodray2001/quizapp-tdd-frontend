import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import GamePage from "./components/GamePage";
import { QuizProvider } from "./context/quizContext";

function App() {
  return (
    <div className='App'>
      {" "}
      <QuizProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/landing' element={<LandingPage />} />
            <Route path='/playQuiz' element={<GamePage />} />
          </Routes>
        </Router>
      </QuizProvider>
    </div>
  );
}

export default App;
