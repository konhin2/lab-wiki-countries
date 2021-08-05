// src/index.js
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList'
import CountriesDetails from './components/CountryDetails' 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <div className="row">
          <CountriesList />
          <Switch>
            <Route exact path="/:country" component={CountriesDetails} />
          </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
