import React,{Component} from 'react';
import './foot.scss';
import {NavLink} from 'react-router-dom'
class Footer extends Component{
	constructor(){
		super();
	} 

	render(){
		return (
			<section id='foot'>
				<article className='link'>
					<NavLink className='aboutUS' to='/AboutUs/About'>关于我们</NavLink>
					<b>萝卜多——知根知底的社群招聘</b>
					<NavLink className='contactUS' to='/AboutUs/Contact' >联系我们</NavLink>
					<ul className="box">
						<li className='tel' >
							<img src="http://luoboduo.com/images/i-phone.jpg"/>
							<span>联系电话</span>
							<mark>(010)59478634</mark>
						</li>
						<li className="email">
							<img src="http://luoboduo.com/images/i-email.jpg"/>
							<span>邮箱支持</span>
							<mark>kefu@ptteng.com</mark>
						</li>
						<li className="address">
							<img src="http://luoboduo.com/images/i-address.png"/>
							<span>地　　址</span>
							<mark>北京市海淀区翠微路甲10#225室</mark>
						</li>
					</ul>
					<div className="vx">
						<img src="http://luoboduo.com/images/erweima.jpg"/>
						<span id="">微信号：葡萄藤IT技能树</span>		
					</div>
				</article>
				<article className="foot">
		            <p>Copyright © 2015 北京葡萄藤信息技术有限公司 All Rights Reserved | 京ICP备15035574号-3</p>
				</article>
			</section>
		)
			
		
	}
}

export default Footer;