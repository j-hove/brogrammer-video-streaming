// main imports
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';

// imports for components
import Header from './components/Header';

// imports for Pages
import Home from './pages/Home';
import Detail from './pages/Detail';
import Main from './pages/Main';
import Login from './pages/Login';
import Password from './pages/Password';


function App() {
  return (    
    <div className="App">      
      <BrowserRouter>                
        <Routes>
          <Route
            path="/main"
            element={
              <>                
                <Header />
                <Main /> 
              </>       
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login /> 
              </>       
            }
          />
          <Route
            path="/login/password"
            element={
              <>
                <Password /> 
              </>       
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home /> 
              </>       
            }
          />
          <Route
            path="/detail/:id"
            element={
              <>
                <Header />
                <Detail />
              </>       
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
