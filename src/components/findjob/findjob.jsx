import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import './findjob.scss'
import 'antd-mobile/lib/carousel/style/css'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile'
import axios from 'axios'
import {connect} from 'react-redux'
class FindJob extends Component{
	constructor(props) {
		super(props);
		console.log(this.props.children)

	}
	componentWillMount(){
		if(this.props.searchBGImg.length==0){
			this.props.getSwipe()
		}
	}
	componentDidMount(){
		
	}
	render(){
		return (
			<div id='findjob'>
				<article>
					<Carousel
			          className="my-carousel"
			          autoplay
			          infinite
			          swipeSpeed={35}
			        >
			          {
			          	this.props.searchBGImg.map(item => (
			              <img src={item.img} key={item} />			              			                
			         	))
			          	}
			        </Carousel>
				</article>
				<article className="positions">					
					<NavLink to='/findjob/recommendPosition' activeClassName='active'>推荐职位</NavLink>
					<NavLink to='/findjob/lastestPosition' activeClassName='active'>最新职位</NavLink>
				</article>
				<article>
					{
						this.props.children
					}
				</article>
			</div>
		)
	}

}


export default connect(
	function mapPropsToState(state) {
		return {
			'searchBGImg':state.findjobReducer
		}
	},
	function mapDispatchToState(dispatch) {
		return {
			getSwipe() {
				axios.get('/a/article/search?type=1').then(res=>{
					dispatch({
						type:'SwipeImg',
						payload:res.data.data.articleList
					});
				});
			}
		}
	}
)(FindJob);
