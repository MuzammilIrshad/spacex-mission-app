import React from 'react';
import { useLaunchesQuery } from '../../generated/graphql';
import {Launch} from './Launch';



export const LaunchContainer = () => {
    const { error, loading, data } = useLaunchesQuery()
    if (loading) {
        return <h1>Loading</h1>
    }
    if (error || !data) {
        return <div>error</div>
    }
    return     <Launch data={data} />
}
