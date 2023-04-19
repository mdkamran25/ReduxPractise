import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignupPage from './Component/UI/SignUpPageContainer/SignupPage';
import Home from './Component/UI/home/home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    {/* <SignupPage /> */}
    {/* <Home /> */}
    </div>
  );
}

export default App;
