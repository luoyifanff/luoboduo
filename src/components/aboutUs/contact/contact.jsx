import React,{Component} from 'react';

import './contact.scss'
import {connect} from 'react-redux'
class Contact extends Component{
	constructor(){
		super();
		this.state={
			
		}
	}
	componentDidMount(){
		this.props.checkStyleOfPosition()
	}
	render(){
		return (					
			<section id='contact'>
				<article>
					<h5>北京葡萄腾信息技术有限公司</h5>
					<ul>
						<li>
							<img src="http://luoboduo.com/images/phone.png" />
							<span>电话：</span>
							<b>(010)59478634</b>
						</li>
						<li>
							<img src="http://luoboduo.com/images/about-url.png" />
							<span>网址：</span>
							<b>www.luoboduo.com</b>
						</li>
						<li>
							<img src="http://luoboduo.com/images/email.png" />
							<span>邮箱：</span>
							<b>kefu@ptteng.com</b>
						</li>
						<li>
							<img src="http://luoboduo.com/images/location.png" />
							<span>地址：</span>
							<b>北京市海淀区翠微路甲10院225室</b>
						</li>
						<li className="address">
							<img src="http://luoboduo.com/images/map.jpg"/>
						</li>
					</ul>
				</article>
			</section>
		)
	}
}
export default connect(
	null,
	{
		checkStyleOfPosition(){
			return {
				type:'footerStatic'
					
			}
		}
	}
)(Contact);