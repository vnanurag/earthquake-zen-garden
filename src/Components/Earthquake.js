import React from 'react';
import {Link} from 'react-router-dom';

class Earthquake extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <Link to={`/details/${this.props.id}`}>
                            <td className='table-title'>{this.props.place}</td>
                        </Link>
                        <td className='table-data'>{this.props.magnitude}</td>
                        <td className='table-data'>{this.props.time}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Earthquake;