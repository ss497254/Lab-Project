import React from 'react';

export default function About() {
    return (
        <div className="row justify-content-center m-4">
            <div className="col-xl-8 col-lg-12 col-sm-12 grid-margin grid-margin-lg-0 stretch-card">
                <div className="card">
                    <div className="card-body recent-activity m-4 p-4">
                        <h4 className="card-title">Professor</h4>
                        <div className="d-flex mb-3">
                            <div>
                                <div className="activity-info bg-warning">
                                    H
                                </div>
                            </div>
                            <div className="activity-details">
                                <h4 className="text-dark font-weight-normal">
                                    Prof. Hari OM
                                </h4>
                                <h5 className="text-dark font-weight-light">
                                    Assistant Professor
                                </h5>
                            </div>
                        </div>
                        <h4 className="card-title">Mentor</h4>
                        <div className="d-flex mb-3">
                            <div>
                                <div className="activity-info bg-secondary">
                                    D
                                </div>
                            </div>
                            <div className="activity-details">
                                <h4 className="text-dark font-weight-normal">
                                    Miss Diksha Rangwani
                                </h4>
                                <h5 className="text-dark font-weight-light">
                                    Research Scholar at IIT(ISM) Dhanbad
                                </h5>
                            </div>
                        </div>
                        <h4 className="card-title">Group Members:</h4>
                        <div className="d-flex mb-3">
                            <div>
                                <div className="activity-info bg-danger">S</div>
                            </div>
                            <div className="activity-details">
                                <h4 className="text-dark font-weight-normal">
                                    Saurabh Singh
                                </h4>
                                <h5 className="text-dark font-weight-light">
                                    20JE0880
                                </h5>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <div>
                                <div className="activity-info bg-primary">
                                    A
                                </div>
                            </div>
                            <div className="activity-details">
                                <h4 className="text-dark font-weight-normal">
                                    Abhinav Kasana
                                </h4>
                                <h5 className="text-dark font-weight-light">
                                    20JE0024
                                </h5>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <div>
                                <div className="activity-info bg-success">
                                    S
                                </div>
                            </div>
                            <div className="activity-details">
                                <h4 className="text-dark font-weight-normal">
                                    Sundaram Anand
                                </h4>
                                <h5 className="text-dark font-weight-light">
                                    20JE0987
                                </h5>
                            </div>
                        </div>
                        <div className="d-flex mb-3">
                            <div>
                                <div className="activity-info bg-info">A</div>
                            </div>
                            <div className="activity-details">
                                <h4 className="text-dark font-weight-normal">
                                    Anurudh Kumar
                                </h4>
                                <h5 className="text-dark font-weight-light">
                                    20JE0172
                                </h5>
                            </div>
                        </div>
                        {/* <p className="mb-0">added new task on trello</p>
                        <p className="text-small mb-0">08:19PM</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
