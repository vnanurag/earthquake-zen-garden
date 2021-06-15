import React from 'react';
import Details from './Details';
import Profile from './Profile';
import Header from './Header';
import EarthquakesList from './EarthquakesList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { earthquakeData } from '../Data/data';


class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='app'>
                <Router>
                    <div>
                        <Header
                            logo={earthquakeData.site.logoImage}
                            title={earthquakeData.site.title}
                            name={earthquakeData.profile.firstName} />

                        <Switch>
                            <Route exact path='/' render={() => <EarthquakesList data={earthquakeData.data} />}></Route>
                            <Route path='/details/:id' render={() => <Details details={earthquakeData.data.features}/>}></Route>
                            <Route path='/profile' render={() => <Profile profile={earthquakeData.profile}/>}></Route>
                        </Switch>
                    </div>   
                </Router>
            </div>
        )
    }   
}

export default App;