import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/SingleCountry.css';
import LineGraph from './LineGraph';


const SingleCountryInfo = (props) => {

    const handleCountryName = props.cn;
    const [countryName, setCountryName] = useState([]);
    // const [countryCase, setCountryCase] = useState([]);

    useEffect(() => {
        fetch(`https://disease.sh/v3/covid-19/countries/${handleCountryName}`)
            .then(res => res.json())
            .then(data => setCountryName(data))
    });

    // useEffect(() => {
    //     fetch(`https://disease.sh/v3/covid-19/historical/${handleCountryName}?lastdays=30`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // };)

    return (

        <>
            <div className='container-md'>
                <div className="row">
                    <div className='mb-4 py-2 title-bg'>
                        <h1 className='fs-1 fw-bold text-white'>Selected Country: {countryName.country}</h1>
                    </div>
                    <div className="col-4">
                        <div class="card border-secondary mb-3 box-shadow">
                            <div class="card-header fs-3 fw-bolder">Total Cases</div>
                            <div class="card-body text-dark fw-bold">
                                <h5 class="card-title fs-3 fw-bolder">{countryName.cases}</h5>
                                <p class="card-text">Cases Per One Million: {countryName.casesPerOneMillion}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card border-danger mb-3 box-shadow">
                            <div class="card-header fs-3 fw-bolder">Total Deaths</div>
                            <div class="card-body text-danger">
                                <h5 class="card-title fs-3 fw-bolder">{countryName.deaths}</h5>
                                <p class="card-text">Deaths Per One Million: {countryName.deathsPerOneMillion}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div class="card border-success mb-3 box-shadow">
                            <div class="card-header fs-3 fw-bolder">Total Recovered</div>
                            <div class="card-body text-success">
                                <h5 class="card-title fs-3 fw-bolder">{countryName.recovered}</h5>
                                <p class="card-text">Recovered Per One Million: {countryName.recoveredPerOneMillion}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-bg-warning mb-3 box-shadow" style={{ "maxWidth": "23rem" }}>
                            <div className="card-header fs-3 fw-bolder">Today Cases</div>
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold">{countryName.todayCases}</h5>
                                <p className="card-text fw-bolder text-dark">One Case Per People: {countryName.oneCasePerPeople}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-bg-success mb-3 box-shadow" style={{ "maxWidth": "23rem" }}>
                            <div className="card-header fs-3 fw-bolder">Today Recovered</div>
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold">{countryName.todayRecovered}</h5>
                                <p className="card-text fw-bolder text-dark">One Test Per People: {countryName.oneTestPerPeople}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card text-bg-danger mb-3 box-shadow" style={{ "maxWidth": "23rem" }}>
                            <div className="card-header text-warning fs-3 fw-bolder">Today Deaths</div>
                            <div className="card-body">
                                <h5 className="card-title text-warning fs-4 fw-bold">{countryName.todayDeaths}</h5>
                                <p className="card-text fw-bolder text-dark">One Death Per People: {countryName.oneDeathPerPeople}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-12">
                        <LineGraph cc={countryCase} key={countryCase} />
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default SingleCountryInfo;