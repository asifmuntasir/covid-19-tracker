import React from 'react';
import patienImg from '../images/disease-prevention.png';

const Header = () => {
    return (
        <>
            <div className="container-md my-3 shadow-lg bg-body rounded">
                <nav className="navbar border-5 border-success border-end border-start ">
                    <ul class="navbar-nav me-auto m-2">
                        <li class="nav-item fs-2 fw-bold text-success">
                            <img src={patienImg} width={42} height={42} alt="" /> COVID-19 Case Tracker
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;