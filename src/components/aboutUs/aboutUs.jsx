import React,{Component} from 'react';

import './aboutUs.scss'
import {NavLink} from 'react-router-dom';
class AboutUs extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	render(){
		return (
			<section id='aboutUs'>
				<ul className="box">
					<li><NavLink to='/AboutUs/About' activeClassName='changecolor1'><i id='bg1'></i><span>关于我们</span></NavLink></li>
					<li><NavLink to='/AboutUs/Contact' activeClassName='changecolor2'><i id='bg2'></i><span>联系我们</span></NavLink></li>
				</ul>			
				{
					this.props.children
				}
			</section>
		)
	}
}
export default AboutUs;