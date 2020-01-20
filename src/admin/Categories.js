import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "./apiAdmin";
import moment from "moment";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { user, token } = isAuthenticated();

    const loadCategories = () => {
        getCategories(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setCategories(data);
                console.log("*** DATA = ", data)
            }
        });
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const destroy = categoryId => {
        deleteCategory(categoryId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadCategories();
            }
        });
    };

    const showCategoriesLength = () => {
        if (categories.length > 0) {
            return (
                <h6>Categories: {categories.length}</h6>
            );
        } else {
            return <h1 className="text-danger">No categories</h1>;
        }
    };

    return (
        <div className="row">
            <br/>
            <div class="container">
                <table className="table table-border">
                    <thead>
                        <tr>
                            <th>{showCategoriesLength()}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <ul className="list-group">
                                {categories.map((c, i) => (
                                    <li
                                        key={i}
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        <strong>{c.name}</strong>
                                        <Link to={`/admin/category/update/${c._id}`}>
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
            {/* {JSON.stringify(categories)} */}
        </div>
    )
};

export default Categories;
