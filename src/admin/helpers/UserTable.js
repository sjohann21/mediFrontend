import React from 'react'

const UserTable = props => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            {/* <button
                                onClick={() => {
                                    props.editRow(user)
                                }}
                                className="button muted-button"
                            >
                                Edit
              </button> */}
                            <button onClick={() => {
                                props.editRow(user)
                            }} className="btn btn-outline-primary">Edit</button>
                            {/* <button
                                onClick={() => props.deleteUser(user.id)}
                                className="button muted-button"
                            >
                                Delete
              </button> */}
                            <button onClick={() => props.deleteUser(user.id)} className="btn btn-outline-primary">Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
        </tbody>
    </table>
)

export default UserTable