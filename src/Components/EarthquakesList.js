import React from 'react';
import Earthquake from './Earthquake';
import '../Styles/styles.css';

class EarthquakesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className='earthquake-container'>
              <div className='list-header'>
                <h3>
                    {this.props.data.metadata.title}
                </h3>
              </div>
              <table>
                  <thead className='table-header'>
                      <tr>
                          <td>Title</td>
                          <td>Magnitude</td>
                          <td>Time</td>
                      </tr>
                  </thead>
              </table>
                {this.props.data.features.map((feature, key) =>{
                    return(
                        <div key={key}>
                            <Earthquake
                                key = {key}
                                id = {feature.id}
                                place = {feature.properties.place}
                                magnitude = {feature.properties.mag}
                                time = {feature.properties.time}
                                getDetails = {this.props.getDetails}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default EarthquakesList;