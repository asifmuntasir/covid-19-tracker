import { React, useState, useEffect } from 'react';

const AllCaseInfo = () => {

    const [worldInfo, setWorldInfo] = useState({});

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
            .then(res => res.json())
            .then(data => setWorldInfo(data))
    })

    return (
        <>
            <div className="container-sm my-5 card-group">
                <div className="card border-dark mb-3 mx-5" style={{ "max-width": "23rem" }}>
                    <div className="card-header fs-3 fw-bolder">Updated World News</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title text-success fs-4 fw-bold">{worldInfo.updated}</h5>
                        <p className="card-text fw-bold text-danger">Updated news collected from WHO & disease.sh</p>
                    </div>
                </div>
                <div className="card text-bg-success mb-3 mx-5" style={{ "max-width": "23rem" }}>
                    <div className="card-header fs-3 fw-bolder">Total Cases</div>
                    <div className="card-body">
                        <h5 className="card-title text-warning fs-4 fw-bold">{worldInfo.cases}</h5>
                        <p className="card-text fw-bold text-dark">Total cases collected from WHO & disease.sh!!!</p>
                    </div>
                </div>
                <div className="card text-bg-primary mb-3 mx-5" style={{ "max-width": "23rem" }}>
                    <div className="card-header fs-3 fw-bolder text-warning">Total Deaths</div>
                    <div className="card-body">
                        <h5 className="card-title fs-4 fw-bold">{worldInfo.deaths}</h5>
                        <p className="card-text fw-bolder">Total deaths report collected from WHO & disease.sh!!!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllCaseInfo;