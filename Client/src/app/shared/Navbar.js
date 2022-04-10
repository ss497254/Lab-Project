import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal';

const Navbar = () => {
    const [search, setsearch] = useState('');
    const [showModal, setshowModal] = useState(false);
    return (
        <div>
            <nav
                className="navbar default-layout-navbar fixed-top d-flex flex-row w-100"
                style={{
                    justifyContent: 'center',
                    padding: 0,
                    borderBottom: '0.1px solid #ddd'
                }}
            >
                <div className="navbar-menu-wrapper d-flex align-items-center w-100">
                    <div
                        className="text-center  justify-content-center mx-4"
                        style={{
                            fontSize: 28,
                            p: 0
                        }}
                    >
                        <Logo />
                    </div>
                    <div className="w-50">
                        <ul className="navbar-nav">
                            <li className="pr-4 nav-item-link">
                                <Link
                                    to="/"
                                    style={{ fontSize: 16, color: '#000000' }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="pr-4 nav-item-link">
                                <Link
                                    to="/documentation"
                                    style={{ fontSize: 16, color: '#000000' }}
                                >
                                    Documentation
                                </Link>
                            </li>
                            <li className="pr-4 nav-item-link">
                                <Link
                                    to="/About"
                                    style={{ fontSize: 16, color: '#000000' }}
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="search-field d-none  w-100 d-md-block mx-2 mr-4">
                        <div className="d-flex align-items-center h-100 w-100">
                            <div className="input-group d-flex align-items-center flex-row w-100">
                                <div className="input-group-prepend bg-transparent">
                                    <i className="input-group-text border-0 mdi mdi-magnify"></i>
                                </div>
                                <input
                                    type="text"
                                    className="bg-transparent border-0 flex-grow"
                                    placeholder="Search State"
                                    onChange={(e) => setsearch(e.target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-info ml-4"
                                onClick={() => {
                                    setshowModal(true);
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <Modal lgShow={showModal} setLgShow={setshowModal} data={search} />
        </div>
    );
};

const Logo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="120"
            viewBox="0 0 192.756 192.756"
        >
            <g fillRule="evenodd" clipRule="evenodd">
                {/* <path fill="#fff" d="M0 0h192.756v192.756H0V0z" /> */}
                <path
                    d="M36.627 101.754c0-3.072-.307-4.914-1.536-6.144-1.229-1.536-3.072-2.15-7.066-2.15-2.15 0-3.687-.307-4.301-.307H12.665c-1.229-.308-1.844-.922-1.844-2.15 0-1.536.922-2.15 2.765-2.458h7.68c5.529 0 6.144.308 6.144 2.765h8.294c0-4.916-.922-6.759-3.687-7.68-2.15-.922-4.301-.922-12.288-.922-5.223 0-7.68 0-10.138.308-5.223.614-6.759 3.072-6.759 8.294 0 4.3.922 6.45 3.994 7.372 1.229.615 3.687.615 7.68.615h7.373c3.379 0 3.687.307 4.301.307 1.536 0 2.457.922 2.457 2.15 0 2.459-1.228 2.766-10.751 2.766-2.15 0-4.608 0-5.222-.307-1.229-.309-1.536-.922-1.536-2.766H2.834v1.535c0 3.994 1.229 5.838 4.301 6.76 2.15.307 4.916.613 11.06.613 5.837 0 7.987 0 11.367-.613 5.222-.306 7.065-2.765 7.065-7.988zM81.171 110.049L66.426 82.708h-11.06l-15.36 27.341h9.216l2.765-4.916h17.51l2.765 4.916h8.909zM66.733 99.604H55.059l5.53-11.059 6.144 11.059z"
                    fill="#0c0e0f"
                />
                <path
                    d="M83.629 96.531c0-15.052 12.288-27.34 27.341-27.34 11.98 0 22.117 7.987 25.805 18.739 3.686-10.752 13.824-18.739 25.805-18.739 15.053 0 27.342 12.288 27.342 27.34 0 15.053-12.289 27.035-27.342 27.035-11.98 0-22.119-7.682-25.805-18.434-3.688 10.752-13.824 18.434-25.805 18.434-15.053 0-27.341-11.982-27.341-27.035z"
                    fill="#305da2"
                />
                <path
                    d="M127.867 101.754c0-3.072-.615-4.914-1.537-6.144-1.535-1.536-3.072-2.15-7.064-2.15-2.15 0-3.994-.307-4.303-.307h-11.058c-1.229-.308-1.844-.922-1.844-2.15 0-1.536.615-2.15 2.766-2.458h7.373c5.529 0 6.451.308 6.451 2.765h7.986c0-4.916-.92-6.759-3.686-7.68-1.844-.922-3.994-.922-11.98-.922-5.223 0-7.68 0-10.445.308-4.916.614-6.759 3.072-6.759 8.294 0 4.3 1.229 6.45 3.993 7.372 1.537.615 3.688.615 7.682.615h7.68c3.379 0 3.686.307 3.994.307 1.842 0 2.457.922 2.457 2.15 0 2.459-.922 2.766-10.752 2.766-2.15 0-4.301 0-5.223-.307-1.229-.309-1.537-.922-1.537-2.766h-7.987c-.307.615-.307 1.229-.307 1.535 0 3.994 1.536 5.838 4.608 6.76 1.844.307 4.607.613 10.752.613 5.836 0 8.295 0 11.674-.613 5.222-.306 7.066-2.765 7.066-7.988zM183.162 110.049l-14.744-27.341h-11.367l-15.053 27.341h9.215l2.766-4.916h17.509l2.766 4.916h8.908z"
                    fill="#fff"
                />
                <path
                    fill="#305da2"
                    d="M168.418 99.604h-11.674l5.836-11.06 5.838 11.06z"
                />
            </g>
        </svg>
    );
};

export default Navbar;
