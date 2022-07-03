import './App.css';
import Header from './component/Header';
import WorldCaseInfo from './component/WorldCaseInfo';
import Footer from './component/Footer';
import CountryList from './component/CountryList';
import SingleCountryInfo from './component/SingleCountryInfo';
import { useState } from 'react';
import Message from './component/Message';

function App() {

  const [country, setCountry] = useState([]);

  let len;

  const handleClick = (selectCountry) => {
    setCountry(selectCountry);
    // len = selectCountry.length();
  }


  return (
    <div className="container-fluid app-bg">
      <Header />
      <WorldCaseInfo />
      <div className="container-md">
        <div className="row">
          <div className="col-3"><CountryList handleClick={handleClick} /></div>
          <div className="col-9">
            {/* {
              len < 0 ? <Message /> : <SingleCountryInfo cn={country} />
            } */}
            <SingleCountryInfo cn={country} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
