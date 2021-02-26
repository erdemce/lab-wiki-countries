import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <div className="row">
        <CountriesList />
        <div className="col-7">
          <Route path="/:countryId" component={CountryDetails} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
