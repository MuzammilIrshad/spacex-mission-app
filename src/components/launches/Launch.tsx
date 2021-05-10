import React, { useState } from 'react';
import { LaunchesQuery } from '../../generated/graphql';
import { LaunchInfoContainer } from '../launchDetails';
import './Launch.css';



interface Props {
    data: LaunchesQuery;
}

export const Launch: React.FC<Props> = ({ data }) => {

    
    const [id, setId] = useState("");
    const handleClick = (id: string) => {
        setId(id);
    }

    return (
        <div className="mainDiv">
            <div className='Launches'>
            <ol>
                {!!data.launches && data.launches.map(

                    (launch, id) => !!launch && (
                        <>
                        <li key={id} onClick={() => handleClick(String(launch.flight_number))}>

                            {launch.mission_name} ({launch.launch_year})

                        </li>
                            <hr />
                            </>
                        )
                )            
             }
                </ol>
            </div>
            <div className='LaunchDetail'>
                <LaunchInfoContainer id={id} />
                </div>
    </div>
            
)}

