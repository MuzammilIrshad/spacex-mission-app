import React, { useState } from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';
import './Launch.css';



interface Props {
    data: LaunchInfoQuery
}

export const LaunchDetails: React.FC<Props> = ({ data }) => {
 
    return (
        <div>
            <div className="details">
            <h1>{data.launch?.mission_name}</h1>
            <h3>{data.launch?.rocket?.rocket_name}</h3>
            <h5 style={data.launch?.launch_success ? { color: "green" } : { color: "red" }}>TEST: {data.launch?.launch_success ? "Success" : "Failed"}</h5>
            </div>
            { data.launch?.details ? ( 
                <div>
                    <span>{data.launch?.details}</span>
                </div>
            ):""}
                <div>
            {!!data.launch?.links?.flickr_images ? data.launch.links.flickr_images.map((image) => {
                console.log(image);
                return <img src={String(image)} className="images"/>
            }) : null}
                </div>
            </div>
            
)           
}

