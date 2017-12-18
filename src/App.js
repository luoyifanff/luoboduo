import React, { Component } from 'react';
import Head from '@/components/head/head.jsx'
import Guide from '@/components/guide/guide.jsx'
import Footer from '@/components/foot/foot.jsx'
import '@/assets/css/public.css'
class App extends Component {
	constructor(){
		super();
		this.state={
			isShow: false
		}
	}
	componentWillUpdate(){
//		this.getPhoneHeight()
	}
  	render() {
  		
	    return (
	      <div className="App" ref='app'>
	     		<Head event={this.headClick.bind(this)}></Head>
	     		<Guide isShow= {this.state.isShow} event={this.routeClick.bind(this)}></Guide>
	     		<div id='box'>
		      	{
					this.props.children
				}
		      	</div>
		      	<Footer></Footer>
	      </div>     
	    );
    }
	headClick(){
		this.setState({
			isShow : !this.state.isShow
		})
	}
	routeClick(){
		this.setState({
			isShow : !this.state.isShow
		})
	}
	
}


export default App;
