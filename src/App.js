import { BrowserRouter, Routes, Route, } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // (I think this is for version react-router-dom v5)
import Login from './components/Login';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Password from './components/Password';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';

function App() {
  // var pathname = window.location.pathname;
  // console.log(pathname);
  
  return (    
    <div className="App">      
      <BrowserRouter>                
        {/* {pathname.includes("login")===false ? <Header />: null} */}
        <Routes>
          <Route
            path="/brogrammer-video-streaming"
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
