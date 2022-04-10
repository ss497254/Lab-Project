import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MyModal({ lgShow, setLgShow, data }) {
    const StateData = [
        {
            AN: 'Andaman and Nicobar Islands',
            StateName: 'andaman and nicobar islands'
        },
        {
            AP: 'Andhra Pradesh',
            StateName: 'andhra pradesh'
        },
        {
            AR: 'Arunachal Pradesh',
            StateName: 'arunachal pradesh'
        },
        {
            AS: 'Assam',
            StateName: 'assam'
        },
        {
            BR: 'Bihar',
            StateName: 'bihar'
        },
        {
            CH: 'Chandigarh',
            StateName: 'chandigarh'
        },
        {
            CT: 'Chhattisgarh',
            StateName: 'chhattisgarh'
        },
        {
            DN: 'Dadra and Nagar Haveli Daman and Diu',
            StateName: 'dadra and nagar haveli daman and diu'
        },
        {
            DL: 'Delhi',
            StateName: 'delhi'
        },
        {
            GA: 'Goa',
            StateName: 'goa'
        },
        {
            GJ: 'Gujarat',
            StateName: 'gujarat'
        },
        {
            HR: 'Haryana',
            StateName: 'haryana'
        },
        {
            HP: 'Himachal Pradesh',
            StateName: 'himachal pradesh'
        },
        {
            JK: 'Jammu and Kashmir',
            StateName: 'jammu and kashmir'
        },
        {
            JH: 'Jharkhand',
            StateName: 'jharkhand'
        },
        {
            KA: 'Karnataka',
            StateName: 'karnataka'
        },
        {
            KL: 'Kerala',
            StateName: 'kerala'
        },
        {
            LA: 'Ladakh',
            StateName: 'ladakh'
        },
        {
            LD: 'Lakshadweep',
            StateName: 'lakshadweep'
        },
        {
            MH: 'Maharashtra',
            StateName: 'maharashtra'
        },
        {
            MN: 'Manipur',
            StateName: 'manipur'
        },
        {
            ML: 'Meghalaya',
            StateName: 'meghalaya'
        },
        {
            MZ: 'Mizoram',
            StateName: 'mizoram'
        },
        {
            MP: 'Madhya Pradesh',
            StateName: 'madhya Pradesh'
        },
        {
            NL: 'Nagaland',
            StateName: 'nagaland'
        },
        {
            OR: 'Odisha',
            StateName: 'odisha'
        },
        {
            PY: 'Puducherry',
            StateName: 'puducherry'
        },
        {
            PB: 'Punjab',
            StateName: 'punjab'
        },
        {
            RJ: 'Rajasthan',
            StateName: 'rajasthan'
        },
        {
            SK: 'Sikkim',
            StateName: 'sikkim'
        },
        {
            TN: 'Tamil Nadu',
            StateName: 'tamil nadu'
        },
        {
            TG: 'Telangana',
            StateName: 'telengana'
        },
        {
            TR: 'Tripura',
            StateName: 'tripura'
        },
        {
            UP: 'Uttar Pradesh',
            StateName: 'uttar pradesh'
        },
        {
            UT: 'Uttarakhand',
            StateName: 'uttarakhand'
        },
        {
            WB: 'West Bengal',
            StateName: 'west bengal'
        }
    ];
    const [states, setstates] = useState([]);

    useEffect(() => {
        if (lgShow) {
            let ldata = data.toLowerCase();
            let j = 0;
            let newstates = StateData;
            let old = [];
            // console.log({ ldata, data });

            while (
                newstates.length > 0 &&
                ldata.length > 0 &&
                j < ldata.length
            ) {
                let othernewstates = [];
                for (let i = 0; i < newstates.length; i++) {
                    // console.log(ldata, ldata[j], newstates[i].StateName);
                    if (ldata[j] == newstates[i].StateName[j]) {
                        othernewstates.push(newstates[i]);
                    }
                }

                if (othernewstates.length == 0) {
                    old = newstates;
                    newstates = othernewstates;
                    break;
                } else {
                    newstates = othernewstates;
                    old = newstates;
                }
                // console.log({ othernewstates, old, newstates });
                j++;
            }
            // console.log({ old, newstates, j });
            setstates(old);
        }
    }, [data, lgShow]);

    return (
        <div>
            <Modal
                size="md"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="3erq3w5"
            >
                <Modal.Header
                    closeButton
                    style={{ backgroundColor: 'white', color: 'black' }}
                >
                    <Modal.Title id="3erq3w5">
                        <h1 className="p-2">Search Result</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: 'white', padding: 40 }}>
                    <h3 className="text-dark">
                        Search Query:
                        <span className="text-primary"> &nbsp;"{data}"</span>
                    </h3>
                    {states.length == 0 ? (
                        `No Result Found`
                    ) : (
                        <StateTable states={states} setLgShow={setLgShow} />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="danger"
                        onClick={() => setLgShow(false)}
                        className="mx-4"
                        size="lg"
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const StateTable = ({ states, setLgShow }) => {
    return (
        <div className="mt-4">
            {/* <p className="card-description">
                    Add className <code>.table-hover</code>
                </p> */}
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>State Code</th>
                            <th>State Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {states.map((state, index) => {
                            let key = Object.keys(state)[0];
                            return (
                                <tr key={index}>
                                    <td className="text-danger">{key}</td>
                                    <td>
                                        <Link
                                            to={
                                                '/state/' +
                                                key +
                                                '/' +
                                                state[key]
                                            }
                                            onClick={() => setLgShow(false)}
                                        >
                                            {state[key]}
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
