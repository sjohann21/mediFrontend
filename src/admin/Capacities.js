import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCapacities, deleteCapacity } from "./apiAdmin";
import moment from "moment";

const Capacities = () => {
    const [capacities, setCapacities] = useState([]);
    const { user, token } = isAuthenticated();

    const loadCapacitiess = () => {
        getCapacities(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setCapacities(data);
                console.log("*** DATA = ", data)
            }
        });
    };

    useEffect(() => {
        loadCapacitiess();
    }, []);

    const destroy = capacityId => {
        deleteCapacity(capacityId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadCapacitiess();
            }
        });
    };

    const showCapacitiesLength = () => {
        if (capacities.length > 0) {
            return (
                <h6>Capacities: {capacities.length}</h6>
            );
        } else {
            return <h1 className="text-danger">No capacities</h1>;
        }
    };

    return (
        <div className="row">
            <br />
            <div class="container">
                <table className="table table-border">
                    <thead>
                        <tr>
                            <th>{showCapacitiesLength()}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <ul className="list-group">
                                {capacities.map((c, i) => (
                                    <li
                                        key={i}
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        <strong>{c.name}</strong>
                                        <Link to={`/admin/capacity/update/${c._id}`}>
                                            <span className="badge badge-warning badge-pill">Update</span>
                                        </Link>
                                        <span
                                            onClick={() => destroy(c._id)}
                                            className="badge badge-danger badge-pill"
                                        >
                                            Delete
                </span>
                                    </li>
                                ))}
                            </ul>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* {JSON.stringify(capacities)} */}
        </div>
    )
};

export default Capacities;
