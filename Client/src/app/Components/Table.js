import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function Table() {
    const getCode = (i) => {
        if (i % 4 == 0) return 'table-info';
        if (i % 4 == 1) return 'table-warning';
        if (i % 4 == 2) return 'table-success';
        else return 'table-primary';
    };

    const Data = [
        {
            StateName: 'Andhra Pradesh',
            TotalConfirmed: 2319578,
            Discharged: 2304729,
            Death: 14730,
            'State code': 28
        },
        {
            StateName: 'Arunachal Pradesh',
            TotalConfirmed: 64486,
            Discharged: 64188,
            Death: 296,
            'State code': 12
        },
        {
            StateName: 'Assam',
            TotalConfirmed: 724196,
            Discharged: 716209,
            Death: 6639,
            'State code': 18
        },
        {
            StateName: 'Bihar',
            TotalConfirmed: 830477,
            Discharged: 818204,
            Death: 12256,
            'State code': 10
        },
        {
            StateName: 'Chandigarh',
            TotalConfirmed: 91929,
            Discharged: 90746,
            Death: 1165,
            'State code': 4
        },
        {
            StateName: 'Chhattisgarh',
            TotalConfirmed: 1152170,
            Discharged: 1138048,
            Death: 14034,
            'State code': 22
        },
        {
            StateName: 'Dadra and Nagar Haveli and Daman and Diu',
            TotalConfirmed: 11441,
            Discharged: 11437
        },
        {
            StateName: 'Delhi',
            TotalConfirmed: 1865382,
            Discharged: 1838760,
            Death: 26154,
            'State code': 7
        },
        {
            StateName: 'Goa',
            TotalConfirmed: 245325,
            Discharged: 241452,
            Death: 3832,
            'State code': 30
        },
        {
            StateName: 'Gujarat',
            TotalConfirmed: 1223941,
            Discharged: 1212932,
            Death: 10942,
            'State code': 24
        },
        {
            StateName: 'Haryana',
            TotalConfirmed: 985410,
            Discharged: 974528,
            Death: 10617,
            'State code': 6
        },
        {
            StateName: 'Himachal Pradesh',
            TotalConfirmed: 284578,
            Discharged: 280354,
            Death: 4133,
            'State code': 2
        },
        {
            StateName: 'Jammu and Kashmir',
            TotalConfirmed: 453815,
            Discharged: 448903,
            Death: 4750,
            'State code': 1
        },
        {
            StateName: 'Jharkhand',
            TotalConfirmed: 435153,
            Discharged: 429805,
            Death: 5315,
            'State code': 20
        },
        {
            StateName: 'Karnataka',
            TotalConfirmed: 3945698,
            Discharged: 3904101,
            Death: 40055,
            'State code': 29
        },
        {
            StateName: 'Kerala',
            TotalConfirmed: 6533998,
            Discharged: 6462529,
            Death: 68130,
            'State code': 32
        },
        {
            StateName: 'Ladakh',
            TotalConfirmed: 28225,
            Discharged: 27992,
            Death: 228,
            'State code': 37
        },
        {
            StateName: 'Lakshadweep',
            TotalConfirmed: 11402,
            Discharged: 11350,
            Death: 52,
            'State code': 31
        },
        {
            StateName: 'Maharashtra',
            TotalConfirmed: 7874446,
            Discharged: 7725791,
            Death: 147789,
            'State code': 27
        },
        {
            StateName: 'Manipur',
            TotalConfirmed: 137126,
            Discharged: 134961,
            Death: 2120,
            'State code': 14
        },
        {
            StateName: 'Meghalaya',
            TotalConfirmed: 93770,
            Discharged: 92165,
            Death: 1593,
            'State code': 17
        },
        {
            StateName: 'Mizoram',
            TotalConfirmed: 224963,
            Discharged: 223325,
            Death: 687,
            'State code': 15
        },
        {
            StateName: 'Madhya Pradesh',
            TotalConfirmed: 1041157,
            Discharged: 1030329,
            Death: 10735,
            'State code': 23
        },
        {
            StateName: 'Nagaland',
            TotalConfirmed: 35477,
            Discharged: 34708,
            Death: 759,
            'State code': 13
        },
        {
            StateName: 'Odisha',
            TotalConfirmed: 1287742,
            Discharged: 1278322,
            Death: 9121,
            'State code': 21
        },
        {
            StateName: 'Puducherry',
            TotalConfirmed: 165774,
            Discharged: 163812,
            Death: 1962,
            'State code': 34
        },
        {
            StateName: 'Punjab',
            TotalConfirmed: 759152,
            Discharged: 741320,
            Death: 17741,
            'State code': 3
        },
        {
            StateName: 'Rajasthan',
            TotalConfirmed: 1283042,
            Discharged: 1273360,
            Death: 9552,
            'State code': 8
        },
        {
            StateName: 'Sikkim',
            TotalConfirmed: 9141,
            Discharged: 38684,
            Death: 452,
            'State code': 11
        },
        {
            StateName: 'Tamil Nadu',
            TotalConfirmed: 3452931,
            Discharged: 3414643,
            Death: 38025,
            'State code': 33
        },
        {
            StateName: 'Telengana',
            TotalConfirmed: 791345,
            Discharged: 786963,
            Death: 4111,
            'State code': 36
        },
        {
            StateName: 'Tripura',
            TotalConfirmed: 100877,
            Discharged: 99953,
            Death: 921,
            'State code': 16
        },
        {
            StateName: 'Uttar Pradesh',
            TotalConfirmed: 2070882,
            Discharged: 2047015,
            Death: 23496,
            'State code': 9
        },
        {
            StateName: 'Uttarakhand',
            TotalConfirmed: 437270,
            Discharged: 429095,
            Death: 7692,
            'State code': 5
        },
        {
            StateName: 'West Bengal',
            TotalConfirmed: 2017507,
            Discharged: 1995752,
            Death: 21199,
            'State code': 19
        }
    ];

    return (
        <div>
            <div className="col-lg-12 stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">State Wise Cases</h4>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead style={{ borderTop: '1px solid #ddd' }}>
                                    <tr>
                                        <th> S. No.</th>
                                        <th> State </th>
                                        <th> Total Confirmed</th>
                                        <th> Discharged </th>
                                        <th> Deaths </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Data.map((data, index) => {
                                        return (
                                            <tr
                                                className={getCode(index)}
                                                key={index}
                                            >
                                                <td>{index + 1}</td>
                                                <td> {data.StateName} </td>
                                                <td> {data.TotalConfirmed} </td>
                                                <td> {data.Discharged} </td>
                                                <td> {data.Death} </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
