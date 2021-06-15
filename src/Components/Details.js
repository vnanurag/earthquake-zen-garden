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
            <div className='details-header'>
                <h4>{details.properties.title}</h4>
            </div>
            <div class='container'>
                <div className='row details-section'>
                    <div className='col-xs-12'>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='details-info-header'>Title</td>
                                    <td className='details-info-details'>{details.properties.title}</td>
                                </tr>
                                <tr>
                                    <td className='details-info-header'>Magnitude</td>
                                    <td className='details-info-details'>{details.properties.mag}</td>
                                </tr>
                                <tr>
                                    <td className='details-info-header'>Time</td>
                                    <td className='details-info-details'>{details.properties.time}</td>
                                </tr>
                                <tr>
                                    <td className='profile-info-header'>Status</td>
                                    <td className='details-info-details'>{details.properties.status}</td>
                                </tr>
                                <tr>
                                    <td className='details-info-header'>Tsunami</td>
                                    <td className='details-info-details'>{details.properties.tsunami}</td>
                                </tr>
                                <tr>
                                    <td className='details-info-header'>Type</td>
                                    <td className='details-info-details'>{details.properties.type}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Details;