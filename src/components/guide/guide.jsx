import React,{Component} from 'react';
import '@/assets/css/bootstrap.min.css'
import './guide.scss';
import {NavLink} from 'react-router-dom' //NavLink有activeClassName属性，Link没有
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import axios from 'axios'
class Guide extends Component{
	constructor(){
		super();
		this.ready=false;
		this.state={
			isShow:true
		}
	};
	
	componentWillMount(){
		
//		window.wx.config({
//          debug: true,
//          appId: '',
//          timestamp: '',
//          nonceStr: '',
//          signature: '',
//          jsApiList: [
//          // 所有要调用的 API 都要加到这个列表中
//          
//          ]
//      });
		
	};
	render(){
		return (
			<section id='guide'>
				<ReactCSSTransitionGroup 
					transitionName='example'
	            	transitionEnterTimeout={300}
	            	transitionLeaveTimeout={300}
				>
				{					
					this.props.isShow?
					<aside>
						<ul key='guide' onClick={this.routerClick.bind(this)}>
							<li><NavLink to='/home' activeClassName='lighted'>首页</NavLink></li>
							<li><NavLink to='/findjob' activeClassName='lighted' >找职位</NavLink></li>
							<li><NavLink to='/AboutUs' activeClassName='lighted'>关于我们</NavLink></li>
						</ul>
						{/* <div className = 'QRcode'>
							<span className = 'glyphicon glyphicon-qrcode' onClick={this.openQRcode.bind(this)}></span>
							<label>微信扫一扫</label>
						</div>
						<div className = 'uploadimg'>
							<span className = 'glyphicon glyphicon-picture'></span>
							<label>上传图片</label>
						</div> */}
					</aside>
					:null
				}
				</ReactCSSTransitionGroup>
			</section>
		)
	}
	routerClick(){ //利用事件冒泡
		this.props.event();
	}
	openQRcode(){
//		window.wx.ready(()=> {
//			console.log(111111)
//	      this.ready = true;
//	    });
//		if(this.ready){
//			window.wx.scanQRCode({
//				needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
//				scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
//				success: function (res) {
//				var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
//				}
//			});
//		}
		
//		axios.post('/wx/lyf/getTicket.php',{'url':window.location.href}).then(res=>{
//			console.log(res)
//			console.log(window.location.href)
//			window.wx.config({
//			    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//			    appId: '', // 必填，公众号的唯一标识
//			    timestamp: , // 必填，生成签名的时间戳
//			    nonceStr: '', // 必填，生成签名的随机串
//			    signature: '',// 必填，签名，见附录1
//			    jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//			});
//		})
	}
}

export default Guide;