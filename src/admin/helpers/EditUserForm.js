import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )
    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}
        >
            
            {/* <input type="text" name="name" value={user.name} onChange={handleInputChange} /> */}
            <div className="form-group">
                <input
                    value={user.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    type="text"
                    className="form-control"
                />
            </div>
            {/* <input type="text" name="username" value={user.username} onChange={handleInputChange} /> */}
            <div className="form-group">
                <input
                    value={user.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    type="text"
                    className="form-control"
                />
            </div>
            <button className="btn btn-outline-primary">Update user</button>
            {/* <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
      </button> */}
            <button onClick={() => props.setEditing(false)} className="btn btn-outline-primary">Cancel</button>
        </form>
    )
}

export default EditUserForm