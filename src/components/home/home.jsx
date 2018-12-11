import React,{Component} from 'react'
//import ReactDom from 'react-dom'
import './home.scss'
import ReactSwipe from 'react-swipe'
import axios from 'axios'
import {connect} from 'react-redux'

class Home extends Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		if(!this.props.homeSwiperlist)
			this.props.getHomeSwiper()
		
	}
	componentDidMount(){
		this.props.checkStyleOfPosition()
	}
	render(){
		return (
			<div id='home'>
				<img className="pic1" src='http://carrots.ks3-cn-beijing.ksyun.com/3/3c3d47e1-3c26-4c09-9f9f-3ad6e877556b.jpg'/>
				<ul>
					<li>
						<img src="http://www.luoboduo.com/images/jianjie-1.png"/>
						<p>超短响应时间</p>
						<span>48小时高效推荐</span>
					</li>
					<li>
						<img src="http://www.luoboduo.com/images/jianjie-2.png"/>
						<p>行业1/3的价格</p>
						<span>成功推荐仅收费1月工资</span>
					</li>
					<li>
						<img src="http://www.luoboduo.com/images/jianjie-3.png"/>
						<p>三维的人才评测</p>
						<span>技术人事背景三维评定</span>
					</li>
				</ul>
				
				<section id='newPosition'>
					<h3>最新职位</h3>
					<div className="line"></div>
					<p>NEW POSITION</p>
					{
						this.props.isShow?
						<ReactSwipe className="my-swipe" swipeOptions={{
							continuous: true,
							auto:1,
							speed:3000
						}}>
							{
							this.props.homeSwiperlist.map(item=>(
								<div key={item.id}>
									<img src={item.logo}/>
								  	<p>{item.name}</p>
								  	<div className="line"></div>
								  	<span>{item.companyName}</span>
								</div>
							))
							
							}	
							
			            </ReactSwipe>
		            :null
		           }
				</section>
			</div>
		)
	}
	
}


export default connect(
	state=>{
		return {
			'homeSwiperlist': state.homeReducer.SwiperImg,
			'isShow': state.homeReducer.isShow
		}
	}
	,
	{
		getHomeSwiper(){
			return dispatch=>{
				axios.get('/a/profession/search?recommend=0').then(res=>{
					dispatch({
						type:'homeSwiperImg',
						payload: {
							SwiperImg: res.data.data,
							isShow: true
						}
					});
				})		
			}
		},
		checkStyleOfPosition(){
			return {
				type:'footerStatic'
					
			}
		}
		
	}
)(Home);