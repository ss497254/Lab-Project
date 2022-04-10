import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

function App() {
    const [width, setwidth] = useState(window.innerWidth);
    const handleResize = () => {
        setwidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    if (width < 900) {
        return (
            <div
                className="d-flex justify-content-center align-items-center p-4"
                style={{
                    minHeight: 'calc(100vh - 150px)'
                }}
            >
                <h2 className="text-danger">
                    Current Window is not suitable for viewing the page. <br />
                    Please switch to Desktop.
                </h2>
            </div>
        );
    }
    return (
        <div className="container-scroller">
            <Navbar />
            <div
                className="container-fluid content-wrapper h-100 mb-4"
                style={{
                    minHeight: 'calc(100vh - 150px)',
                    marginTop: 60
                }}
            >
                <AppRoutes />
            </div>
            <Footer />
        </div>
    );
}

export default withRouter(App);
