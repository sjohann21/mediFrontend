import React, { useState } from 'react'

const AddUserForm = props => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!user.name || !user.username) return

                props.addUser(user)
                setUser(initialFormState)
            }}
        >
           
            {/* <input type="text" name="name" placeholder="Capacity" value={user.name} onChange={handleInputChange} /> */}
                <div className="form-group">
                    <input
                        value={user.name} 
                        onChange={handleInputChange}
                        placeholder="Name"
                        type="text"
                        className="form-control"
                    />
                </div>
          
            {/* <input type="text" name="username" placeholder="Capacity Id" value={user.username} onChange={handleInputChange} /> */}
                <div className="form-group">
                    <input
                        value={user.username}
                        onChange={handleInputChange}
                        placeholder="Username"
                        type="text"
                        className="form-control"
                    />
                </div>
            <button className="btn btn-outline-primary">Add new user</button>
        </form>
    )
}

export default AddUserForm