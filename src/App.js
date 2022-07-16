import { BrowserRouter, Routes, Route, } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // (I think this is for version react-router-dom v5)
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
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
