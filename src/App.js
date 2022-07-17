import { BrowserRouter, Routes, Route, } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // (I think this is for version react-router-dom v5)
import Login from './components/Login';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Password from './components/Password';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Login /> 
              </>       
            }
          />
          <Route
            path="/login"
            element={
              <>
                <LoginPage /> 
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
        </Routes>
      </BrowserRouter>
      {/* (I think this is for version react-router-dom v5) */}
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
