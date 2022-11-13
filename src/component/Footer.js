import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container my-5">
                <footer className=" bg-dark text-center text-lg-start">
                    <div className="container d-flex justify-content-center py-5">
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                            <i class="bi bi-facebook"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                            <i class="bi bi-linkedin"></i>
                        </button>
                        <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                            <i class="bi bi-github"></i>
                        </button>
                    </div>


                    <div className="text-center text-white p-3">
                        © 2020 Made by:
                        <a className="text-white" href="https://asifmuntasir.github.io/">Asif Muntasir</a>
                    </div>

                </footer>
            </div>
        </div>
    );
};

export default Footer;