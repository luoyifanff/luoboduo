import React,{Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import './user.scss'
import {NavLink} from 'react-router-dom'
class MYcollection extends Component{
	componentDidMount(){
		console.log(111)
		this.props.checkStyleOfPosition()
	}
	render(){
		
		var arr =this.props.detailHaveClicked;
		var data=[]
		if(arr.length!=0){
			var map={};	
			var collectionList=[]			
			for(var i = 0;i<arr.length;i++){
				var s = arr[i].id;
				if(map[s]){
					map[s]+=1
				}else{
					map[s]=1
				}			
			}
	
			for(var item in map){
				if(map[item]%2!=0){ //说明已经收藏了
					for(var i=0;i<arr.length;i++){
						if(arr[i].id==item){
							collectionList.push(arr[i]);
							break;
						}
						
					}
				}else{
					collectionList.forEach((i,index)=>{
						if(i.id==item)
						collectionList.splice(index,1)
					})
				}
			}
			
			
			for(var j=0;j<collectionList.length;j++){
				data.push(
					<li key={collectionList[j].id}>					
						<NavLink to={`/detail/${collectionList[j].id}`}>
							<img src ={collectionList[j].logo}/>
							<div>
								<span>{collectionList[j].name}</span>
								<p>{collectionList[j].companyName}</p>
							</div>
						</NavLink>
						<b>{this.props.salaryLevel[collectionList[j].compensation]}</b>						
						<a onClick={this.props.cancel.bind(this,collectionList[j].id)}>取消收藏</a>
					</li>
				)
			}
		}else{
			data.push(<li key='empty' className='empty'>收藏夹空空如也</li>)
		}
		return (
			<section id='user'>
			<ul className='list'>
			{
				data
			}
			</ul>
			</section>
		)
	}

}

export default connect(
	state=>{
		console.log(state.detailReducer.resultArr)
		return {			
			'detailHaveClicked':state.detailReducer.resultArr,
			'salaryLevel': state.salaryLevel
		}
	},
	{
		cancel(id){
			return {
				type:'canclePosition',
				payload:id
			  }	
		},
		checkStyleOfPosition(){
			return {
				type:'enterUser'
			}
		}
	}
)(MYcollection)
