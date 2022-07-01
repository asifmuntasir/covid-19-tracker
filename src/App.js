import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import AllCaseInfo from './component/AllCaseInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <AllCaseInfo />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
