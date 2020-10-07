import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

export default function App() {

    const [ resource , setResource ] = useState('Posts')

    return (
        <div className="ui container">
            <h1>Users List</h1>
            <UserList />
            <div>
                <button className="ui button primary" onClick={() => setResource("Posts")}>Posts</button>
                <button className="ui button primary" onClick={() => setResource("Todos")}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    )
}
