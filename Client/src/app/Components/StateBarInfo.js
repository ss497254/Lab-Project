import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function StateBarInfo() {
    const deviceSaleData = {
        labels: ['Wave 1', 'Wave 2', 'Wave 3'],
        datasets: [
            {
                label: 'Infected',
                data: [110, 235, 90],
                backgroundColor: ['#a461d8', '#a461d8', '#a461d8'],
                borderColor: ['#a461d8', '#a461d8', '#a461d8'],
                borderWidth: 1,
                fill: false
            },
            {
                label: 'Recovered',
                data: [95, 195, 84],
                backgroundColor: ['#32CD32', '#32CD32', '#32CD32'],
                borderColor: ['#32CD32', '#32CD32', '#32CD32'],
                borderWidth: 1,
                fill: false
            },
            {
                label: 'Death',
                data: [15, 40, 6],
                backgroundColor: ['#fc5a5a', '#fc5a5a', '#fc5a5a'],
                borderColor: ['#fc5a5a', '#fc5a5a', '#fc5a5a'],
                borderWidth: 1,
                fill: false
            }
        ]
    };

    const deviceSaleOptions = {
        scales: {
            xAxes: [
                {
                    stacked: false,
                    barPercentage: 1,
                    categoryPercentage: 0.4,
                    position: 'bottom',
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false
                    },
                    ticks: {
                        display: true,
                        stepSize: 500,
                        fontColor: '#a7afb7',
                        fontSize: 14,
                        padding: 10
                    }
                }
            ],
            yAxes: [
                {
                    stacked: false,
                    display: true,
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        color: '#eef0fa',
                        drawTicks: false,
                        zeroLineColor: 'rgba(90, 113, 208, 0)'
                    },
                    ticks: {
                        display: true,
                        beginAtZero: true,
                        stepSize: 100,
                        fontColor: '#a7afb7',
                        fontSize: 14,
                        callback: function (value, index, values) {
                            return value + 'k';
                        }
                    }
                }
            ]
        },
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: 'rgba(0, 0, 0, 1)'
        },
        plugins: {
            datalabels: {
                display: false,
                align: 'center',
                anchor: 'center'
            }
        }
    };
    return (
        <div className="card">
            <div className="card-body">
                <div className="row"></div>
                <div className="col-lg-12 col-sm-12 grid-margin  grid-margin-lg-0">
                    <div className="pl-0 pl-lg-4 ">
                        <div className="d-xl-flex justify-content-between align-items-center mb-2">
                            <div className="d-lg-flex align-items-center mb-2 mb-xl-0">
                                <h3 className="text-dark font-weight-bold mr-2 mb-0">
                                    Corona Cases
                                </h3>
                                {/* <h5 className="mb-0">( growth 62% )</h5> */}
                            </div>
                        </div>
                        <div
                            id="visit-sale-chart-legend"
                            className="legend-top-right float-right"
                        >
                            <ul className="legend-horizontal">
                                <li>
                                    <span className="legend-dots bg-info"></span>
                                    Infected
                                </li>
                                <li>
                                    <span className="legend-dots bg-success"></span>
                                    Recovered
                                </li>
                                <li>
                                    <span className="legend-dots bg-danger"></span>
                                    Death
                                </li>
                            </ul>
                        </div>
                        <Bar
                            data={deviceSaleData}
                            options={deviceSaleOptions}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
