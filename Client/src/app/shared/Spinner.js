import React, { Component } from 'react';

export class Spinner extends Component {
    render() {
        return (
            <div>
                <div className="spinner-wrapper w-100">
                    <div className="donut"></div>
                </div>
            </div>
        );
    }
}

export default Spinner;
