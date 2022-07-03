import { React, useState, useEffect } from 'react';
import '../assets/WorldCase.css'

const AllCaseInfo = () => {

    const [worldInfo, setWorldInfo] = useState({});

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
            .then(res => res.json())
            .then(data => setWorldInfo(data))
    })

    return (
        <>
            <div className="container-md">
                <div className="row my-5 text-center">
                    <div className="col-4">
                        <div className="card box-shadow text-bg-success mb-3 mx-4" style={{ "max-width": "23rem" }}>
                            <div className="card-header fs-3 fw-bolder">Updated World News</div>
                            <div className="card-body text-dark">
                                <h5 className="card-title fs-4 fw-bold">{worldInfo.updated}</h5>
                                <p className="card-text fw-bold text-warning">Updated news collected from WHO & disease.sh</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card box-shadow mb-3 mx-4" style={{ "max-width": "23rem" }}>
                            <div className="card-header fs-3 fw-bolder">Total Cases</div>
                            <div className="card-body">
                                <h5 className="card-title text-warning fs-4 fw-bold">{worldInfo.cases}</h5>
                                <p className="card-text fw-bold text-success">Total cases collected from WHO & disease.sh!!!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card box-shadow text-bg-primary mb-3 mx-4" style={{ "max-width": "23rem" }}>
                            <div className="card-header fs-3 fw-bolder text-warning">Total Deaths</div>
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold">{worldInfo.deaths}</h5>
                                <p className="card-text fw-bolder text-dark">Total deaths report collected from WHO & disease.sh!!!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card box-shadow text-bg-warning mb-3 mx-4" style={{ "max-width": "23rem" }}>
                            <div className="card-header fs-3 fw-bolder">Today Cases</div>
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold">{worldInfo.todayCases}</h5>
                                <p className="card-text fw-bolder text-dark">Today's affected report collected from WHO & disease.sh!!!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card box-shadow text-bg-success mb-3 mx-4" style={{ "max-width": "23rem" }}>
                            <div className="card-header fs-3 fw-bolder">Today Recovered</div>
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold">{worldInfo.todayRecovered}</h5>
                                <p className="card-text fw-bolder text-dark">Today's receoverd news collected from WHO & disease.sh!!!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card box-shadow text-bg-danger mb-3 mx-4" style={{ "max-width": "23rem" }}>
                            <div className="card-header fs-3 fw-bolder">Today Deaths</div>
                            <div className="card-body">
                                <h5 className="card-title fs-4 fw-bold">{worldInfo.todayDeaths}</h5>
                                <p className="card-text fw-bolder text-dark">Today's deaths report collected from WHO & disease.sh!!!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCaseInfo;