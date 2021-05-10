import React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';
import './Launch.css';



interface Props {
    data: LaunchInfoQuery
}

export const LaunchDetails: React.FC<Props> = ({ data }) => {

    return (
        <div>
            <h1>{data.launch?.mission_name}</h1>
            <h3>{data.launch?.rocket?.rocket_name}</h3>
            <h5>TEST: {data.launch?.launch_success ? "Success" : "Failed"}</h5>
            <span className="details">{data.launch?.details}</span>
            <div>
            {!!data.launch?.links?.flickr_images ? data.launch.links.flickr_images.map((image) => {
                console.log(image);
                return <img src={String(image)} className="images"/>
            }) : null}
                </div>
            </div>
            
)           
}

