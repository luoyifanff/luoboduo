import React,{Component} from 'react'
//import ReactDom from 'react-dom'
import axios from 'axios'
import './detail.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from 'react-redux'
import {Icon} from 'element-react'
import 'element-theme-default';
class Detail extends Component{
	constructor(){
		super();
		this.state={
			isShow:false,
			isLight:false
		}
	}
	
	componentDidMount(){	
		
		this.props.getDetail(this)

		var light=this.quchong()
		for(var k=0;k<light.length;k++){
			if(this.props.match.params.cid==light[k].id){
				this.setState({
					isLight:true
				})
			}
		}
	}
	render(){
		
		
		return (
			<div id='detail'>
			{				
				this.props.detailInfo?
				<div>
					<section className="title">
						<h4>{this.props.detailInfo.name}</h4>
						<span className="companyName">{this.props.detailInfo.companyName}</span>
						<div className="demand">
							<span className="salary">{this.props.salaryLevel[this.props.detailInfo.compensation]}</span>						
							<span className="province"></span>
							<span className="education"></span>
							<span className="experience"></span>							
						</div>						
						<div className="updateTime"></div>
						<div className='star' onClick={this.starClick.bind(this)}>						
							<i className={this.state.isLight?'el-icon-star-on':'el-icon-star-off'} ref='star'></i>
							<p>收藏</p>
						</div>
					</section>
					<section className='discription'>
						<h4>职位描述</h4>
						<article className="responsibility">
							<h5>岗位职责：</h5>
							<p dangerouslySetInnerHTML={{__html: this.props.detailInfo.requisite}}></p>
						</article>			
						<article className="requisite">
							<h5>必要条件：</h5>
							<p dangerouslySetInnerHTML={{__html: this.props.detailInfo.responsibility}}></p>
						</article>
						<article className="boon">
							<h5>公司福利：</h5>
							<p>{this.props.detailInfo.boon}</p>
						</article>
					</section>			
					<section className="share">
						<div><img src="http://luoboduo.com/images/sharing.png"/>分享</div>
						<ul>
							<li><i></i></li>
							<li><i></i></li>
							<li><i></i></li>
						</ul>
						<button onClick={this.handleClick.bind(this)}>我感兴趣</button>
					</section>
					<section className={this.state.isShow?'show':'hide'} id='intersted'>										
						<ReactCSSTransitionGroup 
							transitionName='pulldown'
			            	transitionEnterTimeout={300}
			            	transitionLeaveTimeout={300}
						>
						{
							this.state.isShow?
							<div id="box" className={this.state.isShow?'show':'hide'}>
								<div className="top">
									<span>我感兴趣</span>
									<div className="close" onClick={this.close.bind(this)}>×</div>
								</div>
								<div className="content">
									<span>模式介绍：萝卜多先技术面试-再推荐给用人单位</span>
									<p>萝卜多是一个知根知底的社群招聘。萝卜多的合作企业和候选人，都是萝卜多精心筛选，认证，陪伴多年的伙伴。在萝卜多找工作快，工作有保障。值得您信任的招聘网站。</p>
									<p>您将感兴趣的职位、公司名称以及您的个人信息发送到我们的邮箱，我们会尽快帮您安排。</p>
									<span>邮箱地址：hr@ptteng.com</span>
								</div>
							</div>
							:null
						}
						</ReactCSSTransitionGroup>					
				    </section>					
				</div>				
				:null
								
			}
			</div>
		)
	}

	handleClick(){
		this.setState({
			isShow : !this.state.isShow
		})
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		document.getElementById('intersted').style.top=scrollTop+'px';
		document.documentElement.style.overflow='hidden';   //阻止页面滚动(web模拟的移动端上有效)
//		document.body.ontouchmove=function(e){
//			e.preventDefault()		
//		}
		document.body.addEventListener('touchmove',function zhezhao(e){  //上面那个在移动端没用
			e.preventDefault()	
		})
	}
	close(){
		this.setState({
			isShow : !this.state.isShow
		})
		document.documentElement.style.overflow = 'visible';    //恢复默认值	
//		document.body.ontouchmove=null;
		document.body.removeEventListener('touchmove',function zhezhao(e){ 
			e.preventDefault()	
		})
	}
	
	starClick(){
		
			this.setState({
				isLight : !this.state.isLight
			},()=>{this.props.getStar(this.state.isLight,this.props.match.params.cid)})
		
		
	}
	
	quchong(){
		var arr =this.props.detailHaveClicked;
		var map={};	
		var collectionList=[] //存放数组去重后的已收藏的职位
		for(var i = 0;i<arr.length;i++){
			var s = arr[i].id;
			if(map[s]){
				map[s]+=1
			}else{
				map[s]=1
			}			
		}
		for(var item in map){
			if(map[item]%2!=0){
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
		return collectionList;
	}
}

export default connect(
	state=>{
		return {
			'detailInfo': state.detailReducer.resultObj,
			'detailHaveClicked':state.detailReducer.resultArr,
			
			'salaryLevel': state.salaryLevel
		}
	}
	,
	{
		getDetail:function getDetail(self){				
			return dispatch=>{
				axios.get(`/a/profession/${self.props.match.params.cid}`).then(res=>{
					dispatch({
						type:'detailInformation',
						payload:res.data.data
					})						
				})
				
			}
		},
		getStar:function getStar(isLight,id){
				if(isLight){
					return {			
						type:'starInfomation'	
					}
				}else{
					return {			
						type:'canclePosition',
						payload:id
					}
				}
				
		}
	}
)(Detail);










