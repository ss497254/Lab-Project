import React from 'react';

export default function VaccinationGraph() {
    return (
        <div>
            <div className="row w-100 my-4">
                <div className="col-sm-12  grid-margin stretch-card">
                    <div className="card">
                        <div className="card-title p-4 ml-4 mb-0">
                            Vaccination
                        </div>
                        <div className="card-body pt-0">
                            <iframe
                                src="https://flo.uri.sh/visualisation/6231741/embed"
                                // width="1000px"
                                height="600px"
                                // style={{ margin: '0 auto' }}
                                className="w-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
