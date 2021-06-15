import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className='profile-container'>
                <div className='profile-header'>
                    <h3>Profile</h3>
                </div>
                <div class='container'>
                    <div className='row profile-section'>
                        <div className='col-xs-6'>
                            <img className='profile-image' src={this.props.profile.avatarImage} />
                        </div>
                        <div className='col-xs-6'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='profile-info-header'>First name</td>
                                        <td className='profile-info-details'>{this.props.profile.firstName}</td>
                                    </tr>
                                    <tr>
                                        <td className='profile-info-header'>Last name</td>
                                        <td className='profile-info-details'>{this.props.profile.lastName}</td>
                                    </tr>
                                    <tr>
                                        <td className='profile-info-header'>Phone</td>
                                        <td className='profile-info-details'>{this.props.profile.phone}</td>
                                    </tr>
                                    <tr>
                                        <td className='profile-info-header'>Email</td>
                                        <td className='profile-info-details'>{this.props.profile.email}</td>
                                    </tr>
                                    <tr>
                                        <td className='profile-info-header'>Bio</td>
                                        <td className='profile-info-details'>{this.props.profile.bio}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;