import React, { Component } from 'react';

import Graph from '../Components/Graph';
import Table from '../Components/Table';
import VaccinationGraph from '../Components/VaccinationGraph';
import StateBarInfo from '../Components/StateBarInfo';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="d-sm-flex justify-content-between align-items-start">
                        <h2 className="text-dark font-weight-bold mb-2 mx-4 ">
                            Overview
                        </h2>
                    </div>
                    <div className="d-flex justify-content-between align-items-start mt-4 p-3">
                        <StateBarInfo />
                    </div>
                    <Graph />
                    <Table />
                    <VaccinationGraph />
                </div>
            </div>
        );
    }
}
export default Dashboard;
