import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return(
            <div className='header'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <Link to='/' className='header-image'>
                            <img src={this.props.logo} />
                        </Link>
                    </div>
                    <div className='col-sm-4'>
                        <h1>
                            {this.props.title}
                        </h1>
                    </div>
                    <div className='col-sm-4'>
                        <Link to='/profile'>
                            <h4 className='welcome'>
                                Welcome {this.props.name}
                            </h4>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;