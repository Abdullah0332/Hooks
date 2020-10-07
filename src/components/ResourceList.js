import React from 'react';
import useResources from './useResources';

export default function ResourceList ({ resource }) {

    const resources = useResources(resource);

    return (
        <ul>
            <h1>{`${resource} Title`}</h1>
            {resources.map( record => (
                <li key={record.id}>{ record.title }</li>
            ))}
        </ul>
    )
}
