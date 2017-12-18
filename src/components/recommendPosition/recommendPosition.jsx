import React,{Component} from 'react'
import axios from 'axios'
import './recommendPosition.scss'
import {connect} from 'react-redux'
class RecommendPosition extends Component{
	constructor(){
		super();
		this.state={
			datalist: []
		}
	}
	componentWillMount(){
		this.finish(this)
		if(this.props.recommendPositionList.length==0)
			this.props.getRecommendList()	
	}
	componentDidMount(){
		
	}
	render(){
		if(this.props.recommendPositionList.length!=0){
			console.log(this.props.recommendPositionList)
			this.props.checkStyleOfPosition()
		}
		
		let pagination = [];
		for(let i=0;i<this.props.recommendPositionList.length/4;i++){		
			pagination.push(<li key={i} onClick={this.paginationClick.bind(this,i)}>{i+1}</li>)
		}
		
		return (
			<section id='recommendPosition'>
				<ul>
				{
					this.state.datalist.map(item=>(
							<li key={item.id} onClick={this.choosePosition.bind(this,item.id)}>
								<div className="logo">
									<img src={item.logo}/>
								</div>			
								<div className="introduction">
								{
									this.props.salaryLevel?
									<span className="salary">{this.props.salaryLevel[item.compensation]}</span>:null
								}
									<b className="position">{item.name}</b>
									<span className="company">{item.companyName}</span>
								</div>
							</li>
						)
					)
				}			
				</ul>
				<ol>
				{
					pagination
				}
				</ol>
			</section>			
		)
	}
	choosePosition(id){  /*bind改变指向，也可以传递参数*/
		this.props.history.push('/detail/'+id)
	}
	paginationClick(index,event){		
		if(event){
			event.target.parentNode.childNodes.forEach((item)=>{
				item.style.cssText="background:white;color:black"
			})
			event.target.style.cssText="background:#4CAE4C;color:white"
		}
		index = index?index*4:0	
		this.setState({
			datalist:this.props.recommendPositionList.slice(index,index+4)
		})
	}
	finish(self){
		var timer = setInterval(function(){
			if(self.props.recommendPositionList.length!=0){
				self.paginationClick() //初始化渲染页面
				clearInterval(timer)
			}	
		},20)
	}
}


export default connect(
	state=>{
		return {
			'recommendPositionList': state.recommendReducer,
			'salaryLevel': state.salaryLevel
		}
	}
	,
	{
		getRecommendList(){
			return dispatch=>{
				axios.get('/a/profession/search?recommend=1&size=20').then(res=>{
					dispatch({
						type:'recommendPositionList',
						payload:res.data.data		
					})
						
				})
			}
		},
		checkStyleOfPosition(){
			return {
				type:'footerStatic'
					
			}
		}
	}
)(RecommendPosition);





