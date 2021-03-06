
import './App.css';
import AnotherPage from './pages/anotherPage/AnotherPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/login/Login';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Login />
            </React.Fragment>
          )} />
          <Route path="/another" component={AnotherPage} />
        </div>
      </Router>
    </GlobalProvider>


  );
}

export default App;
