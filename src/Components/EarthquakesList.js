import React from 'react';
import Earthquake from './Earthquake';
import '../Styles/styles.css';

class EarthquakesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sort: 'asc'
        };
        this.formatDateTime = this.formatDateTime.bind(this);
        this.sortColumn = this.sortColumn.bind(this);
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
                          <td onClick={() => this.sortColumn('place')}>Title</td>
                          <td onClick={() => this.sortColumn('mag')}>Magnitude</td>
                          <td onClick={() => this.sortColumn('time')}>Time</td>
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

    formatDateTime = (time) =>{
        let date = new Date(time);
        let [month, day, year] = [date.toLocaleString('default', { month: 'short' }), date.getDate(), date.getFullYear()];
        let arr = date.toLocaleTimeString().split(':');
        let [hour, min, ext] = [arr[0], arr[1], arr[arr.length-1].slice(-2)];

        return `${month} ${day}, ${year}, ${hour}:${min} ${ext}`;
    }

    sortColumn = (col) => {
        this.setState((prevState) =>({
            sort: prevState.sort === 'asc' ? 'desc' : 'asc'
        }));

        switch(col){
            case 'place':{
                this.state.sort === 'asc' 
                    ? this.props.data.features.sort((a, b) => a.properties.place.localeCompare(b.properties.place))
                    : this.props.data.features.sort((a, b) => b.properties.place.localeCompare(a.properties.place))
                break;
            }
            case 'mag':{
                this.state.sort === 'asc' 
                    ? this.props.data.features.sort((a, b) => a.properties.mag - b.properties.mag)
                    : this.props.data.features.sort((a, b) => b.properties.mag - a.properties.mag)
                break;
            }
            case 'time':{
                this.state.sort === 'asc' 
                    ? this.props.data.features.sort((a, b) => a.properties.time - b.properties.time)
                    : this.props.data.features.sort((a, b) => b.properties.time - a.properties.time)
                break;
            }
            default:{
                break;
            }
        }
    }
}

export default EarthquakesList;