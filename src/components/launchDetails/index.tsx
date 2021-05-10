import React from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import { LaunchDetails} from './LaunchDetails';



export const LaunchInfoContainer = ({ id }: { id: string }) => {
    const { error, loading, data } = useLaunchInfoQuery({ variables: {id:id} });

    if (loading) {
        return <h1>Loading</h1>
    }
    if (error || !data) {
        return <div>error</div>
    }
    return <LaunchDetails data={data} />

}
