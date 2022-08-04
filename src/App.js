import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Login from './pages/Login';
import Password from './pages/Password';
import Home from './pages/Home';
import Detail from './pages/Detail';
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
            path="/"
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
