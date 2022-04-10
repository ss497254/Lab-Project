import React from 'react';
import { useLocation } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import { Dropdown, Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { Line, Bar } from 'react-chartjs-2';

export default function State() {
    const Id = useLocation().pathname.split('/')[2];
    const Name = useLocation().pathname.split('/')[3];
    const [Data, setData] = React.useState({ Loading: true });

    React.useEffect(() => {
        axios
            .get('/api/state/' + Id + '/' + Name)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((e) => {
                setData(null);
                console.log({ e });
            });
    }, [Id, Name]);

    if (!Data) {
        return (
            <div>
                <h1 className="text-dark my-4">
                    {Name} - {Id} : Server Error
                </h1>
            </div>
        );
    }
    if (Data.Loading) {
        return (
            <div>
                <h1 className="text-dark my-4">
                    {Name} - {Id} : Loading
                </h1>
            </div>
        );
    }

    const vaccinationData = ({
        precaution_dose,
        totally_vaccinated,
        partial_vaccinated
    }) => {
        return {
            labels: ['Vaccinations'],
            datasets: [
                {
                    label: 'Partial Vaccinated',
                    data: [partial_vaccinated],
                    backgroundColor: ['#a461d8'],
                    borderColor: ['#a461d8'],
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'Precaution Dose',
                    data: [precaution_dose],
                    backgroundColor: ['#00FF44'],
                    borderColor: ['#00FF44'],
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'Totally Vaccinated',
                    data: [totally_vaccinated],
                    backgroundColor: ['#fc5a5a'],
                    borderColor: ['#fc5a5a'],
                    borderWidth: 1,
                    fill: false
                }
            ]
        };
    };

    const deviceSaleOptions = ({ xSteps, ySteps }) => {
        return {
            scales: {
                xAxes: [
                    {
                        stacked: false,
                        barPercentage: 0.5,
                        categoryPercentage: 0.4,
                        position: 'bottom',
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false,
                            drawTicks: false
                        },
                        ticks: {
                            display: true, //this will remove only the label
                            stepSize: xSteps / 500,
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
                            stepSize: ySteps / 200,
                            fontColor: '#a7afb7',
                            fontSize: 14,
                            callback: function (value, index, values) {
                                return value + 'k';
                            }
                        }
                    }
                ]
            },
            plugins: {
                datalabels: {
                    display: false,
                    align: 'center',
                    anchor: 'center'
                }
            }
        };
    };
    return (
        <div>
            <h1 className="text-dark my-4">
                {Name} - {Id}
            </h1>
            {/* {JSON.stringify(Data, undefined, 4)} */}
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-sm-12 grid-margin ">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="px-4 d-flex align-items-center">
                                <svg width="0" height="0">
                                    <defs>
                                        <linearGradient id="progress-order">
                                            <stop
                                                offset="0%"
                                                stopColor="#222"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#555"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbarWithChildren
                                    className="progress-order"
                                    value={100}
                                >
                                    <h5 className="m-2 text-dark font-weight-normal">
                                        Total Confirmed
                                    </h5>
                                    <h2 className="m-4 text-secondary font-weight-bold">
                                        {Data.totalConfirmed}
                                    </h2>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="px-4 d-flex align-items-center">
                                <svg width="0" height="0">
                                    <defs>
                                        <linearGradient
                                            id="progress-visitors"
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="0%"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="#b4ec51"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#429321"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbarWithChildren
                                    className="progress-visitors"
                                    value={
                                        (Data.discharged * 100) /
                                        Data.totalConfirmed
                                    }
                                >
                                    <h5 className="mb-2 text-success font-weight-normal">
                                        Discharged
                                    </h5>
                                    <h2 className="m-4 text-success font-weight-bold">
                                        {Data.discharged}
                                    </h2>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4  col-lg-6 col-sm-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="px-4 d-flex align-items-center">
                                <svg width="0" height="0">
                                    <defs>
                                        <linearGradient
                                            id="progress-impressions"
                                            x1="0%"
                                            y1="0%"
                                            x2="100%"
                                            y2="0%"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="#fad961"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#f76b1c"
                                            />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <CircularProgressbarWithChildren
                                    className="progress-impressions"
                                    value={
                                        (Data.deaths * 100) /
                                        Data.totalConfirmed
                                    }
                                >
                                    <h5 className="mb-2 text-danger font-weight-normal">
                                        Deaths
                                    </h5>
                                    <h2 className="m-4 text-danger font-weight-bold">
                                        {Data.deaths}
                                    </h2>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-4">
                <div className="col-xl-6  col-lg-12 col-sm-12 grid-margin  ">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-dark">
                                Hospitals and Facilities
                            </h1>
                            <div className="border p-4 my-4">
                                <div className="d-lg-flex justify-content-between align-items-center mb-1">
                                    <h2 className=" text-dark">Hospitals</h2>
                                    <span className="font-weight-bold text-dark  ">
                                        Total Hospitals: {Data.totalHospitals}
                                    </span>
                                </div>
                                <ProgressBar
                                    variant="info"
                                    now={
                                        (Data.ruralHospitals * 100) /
                                        Data.totalBeds
                                    }
                                    className="my-4"
                                />
                                <div className="d-lg-flex justify-content-between align-items-center mb-1">
                                    <div className=" text-dark text-medium">
                                        Urban Hospitals : {Data.urbanHospitals}
                                    </div>
                                    <div className=" text-dark text-medium">
                                        Rural Hospitals : {Data.ruralHospitals}
                                    </div>
                                </div>
                            </div>
                            <div className="border p-4 my-4">
                                <div className="d-lg-flex justify-content-between align-items-center mb-1">
                                    <h2 className=" text-dark">Beds</h2>
                                    <span className="font-weight-bold text-dark  ">
                                        Total Beds: {Data.totalBeds}
                                    </span>
                                </div>
                                <ProgressBar
                                    variant="success"
                                    now={
                                        (Data.ruralBeds * 100) / Data.totalBeds
                                    }
                                    className="my-4"
                                />
                                <div className="d-lg-flex justify-content-between align-items-center mb-1">
                                    <div className=" text-dark text-medium">
                                        Urban Beds : {Data.urbanBeds}
                                    </div>
                                    <div className=" text-dark text-medium">
                                        Rural Beds : {Data.ruralBeds}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6  col-lg-12 col-sm-12 ">
                    <div className="card">
                        <div className="card-body my-4">
                            <h1 className="text-dark">Vaccinations</h1>
                            <div className="d-lg-flex justify-content-between align-items-center my-4">
                                <h4 className=" text-primary">
                                    Total Vaccinated: {Data.total}
                                </h4>
                                <span className="font-weight-bold text-primary pb-3 ">
                                    Today: {Data.today}
                                </span>
                            </div>
                            <Bar
                                className="my-4 py-4"
                                data={vaccinationData(Data)}
                                options={deviceSaleOptions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
