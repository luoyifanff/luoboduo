import React,{Component} from 'react'
import axios from 'axios'
import './lastestPosition.scss'
import {connect} from 'react-redux'
class LastestPosition extends Component{
	
	constructor(){
		super();
		this.state={
			datalist: []
		}
	}
	componentWillMount(){
		this.finish(this)
		if(this.props.lastestPositionList.length==0)
			this.props.getLastestList()
	}
	componentDidMount(){
		this.props.checkStyleOfPosition()
	}
	render(){
		let pagination = [];
		for(let i=0;i<this.props.lastestPositionList.length/4;i++){		
			pagination.push(<li key={i} onClick={this.paginationClick.bind(this,i)}>{i+1}</li>)
		}
		return (	
			<section id='lastestPosition'>
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
	choosePosition(id){
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
			datalist:this.props.lastestPositionList.slice(index,index+4)
		})
	}
	finish(self){
		var timer = setInterval(function(){
			if(self.props.lastestPositionList.length!=0){
				self.paginationClick()
				clearInterval(timer)
			}	
		},20)
	}
}

export default connect(
	state=>{
		return {
			'lastestPositionList': state.lastestReducer,
			'salaryLevel': state.salaryLevel
		}
	}
	,
	{
		getLastestList(){
			return dispatch=>{
				axios.get('/a/profession/search?recommend=0&size=8').then(res=>{
					dispatch({
						type:'lastestPositionList',
						payload: res.data.data
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
)(LastestPosition);










