import React from 'react';
import Earthquake from './Earthquake';
import '../Styles/styles.css';

class EarthquakesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.formatDateTime = this.formatDateTime.bind(this);
    }

    formatDateTime = (time) =>{
        let date = new Date(time);
        let [month, day, year] = [date.toLocaleString('default', { month: 'short' }), date.getDate(), date.getFullYear()];
        let arr = date.toLocaleTimeString().split(':');
        let [hour, min, ext] = [arr[0], arr[1], arr[arr.length-1].slice(-2)];

        return `${month} ${day}, ${year}, ${hour}:${min} ${ext}`;
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
                                time = {this.formatDateTime(feature.properties.time)}
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