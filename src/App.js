import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
  );
};

export default App;
