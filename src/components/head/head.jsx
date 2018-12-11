import React,{Component} from 'react';
import '@/assets/css/bootstrap.min.css'
import './head.scss'
import {NavLink} from 'react-router-dom'
class Head extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<header id='header'>
				<img src="http://luoboduo.com/images/logo.png" className="logo"/>
				<div className='user'>
					<i className="glyphicon glyphicon-user"></i>
					<NavLink to='/user'>我的收藏</NavLink>
				</div>
				<div className="glyphicon glyphicon-align-justify" onClick={this.handleClick.bind(this)}></div>				
			</header>	
		)
	}
	componentWillReceiveProps(a, nextProps) {
		console.log(a, nextProps);
		
	}
	handleClick(){
		this.props.event() //主动触发父组件中的组件
	}
}

export default Head;