import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Home from './HomePage/Home';
import HomeP from '../pages/HomeP';
import { ServiceProvider } from './ServiceProviderPage/serviceProvider';
import { Admin } from './Admin';
import Final from './Login_register/final';
import VerifyOtp from './Otp/verifyOtp';


import Booking from '../pages/Booking';

import Spfinal from './Login_register/spfinal';
import Adminfinal from './Login_register/adminfinal';
import FormBooking from './Page2/FormBooking';

export class AllComp extends React.Component {
constructor(){
    super();
        this.state={
            count: 0,
            pno: '',
            details:[
                {

                }
            ],
            customercart:[
                {

                }
            ],
            accessToken : null
    }
}

loadChangeafterOtp=(count)=>{
    this.setState({count:count})
    
}

getPhoneNumber=(pno)=>{
    this.setState({pno:pno})
}

getProviderDetails=(details)=>{
    this.setState({details:details})
    console.log(this.state.details)
}

customerCartDetails=(customercart)=>{
    this.setState({customercart:customercart})
    console.log(this.state.customercart)
}

setAccessToken(accessToken) {

    this.setState({accessToken : accessToken});
}
    render() {
   

        return <div>
            <Switch>
                <Route path= '/verifyOtp'>
                    <VerifyOtp loadChangeafterOtp={this.loadChangeafterOtp.bind(this)} getPhoneNumber={this.getPhoneNumber.bind(this)}/>
                </Route>
                <Route path= '/' exact >
                    <Home setAccessToken={this.setAccessToken.bind(this)} getProviderDetails={this.getProviderDetails.bind(this)}/>
                </Route>
                <Route path='/serviceprovider' component={ServiceProvider}></Route>
                <Route path='/service' >
                    <HomeP accessToken={this.state.accessToken} details={this.state.details} customerCartDetails={this.customerCartDetails.bind(this)}/>
                </Route>
                <Route path='/admin' component={Admin} ></Route>
                <Route path='/login'>
                    <Final count={this.state.count} pno={this.state.pno} />
                </Route>
                <Route path='/adminlogin' component={Adminfinal} ></Route>
                <Route path='/booking' exact>
                    <Booking customerCartDetails={this.customerCartDetails.bind(this)}/>
                </Route>
                <Route path='/splogin'>
                    <Spfinal count={this.state.count} pno={this.state.pno} />
                </Route>
                <Route path='/confirmbooking' component={FormBooking} ></Route>
            </Switch>    
            
        </div>
    }
}