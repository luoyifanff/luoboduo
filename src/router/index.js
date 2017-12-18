import React from 'react';
import App from '@/App.js';

import Home from '@/components/home/home.jsx';
import FindJob from '@/components/findjob/findjob.jsx';
import RecommendPosition from '@/components/recommendPosition/recommendPosition.jsx';
import LastestPosition from '@/components/lastestPosition/lastestPosition.jsx';
import Detail from '@/components/detail/detail.jsx';
import AboutUs from '@/components/aboutUs/aboutUs.jsx';
import About from '@/components/aboutUs/about/about.jsx';
import Contact from '@/components/aboutUs/contact/contact.jsx';
import User from '@/components/user/user.jsx';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect  
} from 'react-router-dom' ;
import {Provider} from 'react-redux';
import store from '../redux/store.js';

const router = (
  <Provider store={store}>
  <Router>
    <App>   		 
    	<Switch>
    		<Route exact path="/home" component={Home}/>
    		<Route exact path="/user" component={User}/>
     		<Route path="/findjob" render={()=>(
     			<FindJob>
     				<Switch>
	     				<Route path="/findjob/recommendPosition" component={RecommendPosition}/>
	     				<Route path="/findjob/lastestPosition" component={LastestPosition}/>
	     				<Redirect from='/findjob' to='/findjob/recommendPosition'/>
     				</Switch>
     			</FindJob>
     		)}/>
     		<Route path='/detail/:cid' component={Detail}/>
     		<Route path='/AboutUs' render={()=>(
     			<AboutUs>
     			<Switch>
	     			<Route path='/AboutUs/About' component={About}/>
	     			<Route path='/AboutUs/Contact' component={Contact}/>
	     			<Redirect from='/AboutUs' to='/AboutUs/About'/>
	     		</Switch>
     			</AboutUs>
     		)}/>    		
     		<Redirect from='*' to='/home'/>
    	</Switch>   	
    </App>
  </Router>
  </Provider>
)
export default router;