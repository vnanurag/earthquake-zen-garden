import React from 'react';
import {useParams} from 'react-router-dom';

const Details = (props) =>{
    const {id} = useParams();
    let details = {};
    const getDetails = (id) =>{
        details = props.details.find((detail) => detail.id === id);
    }

    getDetails(id);

    return(
        <div className='details-container'>
            <div class='container'>
                <div className='details-section'>
                    <div className='row details-header'>
                    <h4>{details.properties.title}</h4>
                    </div>
                    
                    <div className='row'>
                        <div className='details-info-header'>Title</div>
                        <div className='details-info-details'>{details.properties.title}</div>
                    </div>

                    <div className='row'>
                        <div className='details-info-header'>Magnitude</div>
                        <div className='details-info-details'>{details.properties.mag}</div>
                    </div>

                    <div className='row'>
                        <div className='details-info-header'>Time</div>
                        <div className='details-info-details'>{details.properties.time}</div>
                    </div>

                    <div className='row'>
                        <div className='details-info-header'>Status</div>
                        <div className='details-info-details'>{details.properties.status}</div>
                    </div>

                    <div className='row'>
                        <div className='details-info-header'>Tsunami</div>
                        <div className='details-info-details'>{details.properties.tsunami}</div>
                    </div>

                    <div className='row'>
                        <div className='details-info-header'>Type</div>
                        <div className='details-info-details'>{details.properties.type}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;