import {combineReducers} from 'redux';
const homeReducer = (state={},action)=>{
	var {type,payload} = action

	switch(type){
		case 'homeSwiperImg': return Object.assign({},state,payload)

		default: return state
			
	}
}
const findjobReducer = (state=[],action)=>{
	var {type,payload} = action;
	switch(type){
		case 'SwipeImg': return [...state,...payload]
			
		default: return state
			
	}
}
const recommendReducer = (state=[],action)=>{
	var {type,payload} = action;
	switch(type){
		case 'recommendPositionList': return [...state,...payload]

		default: return state
			
	}
}
const lastestReducer = (state=[],action)=>{
	var {type,payload} = action
	switch(type){
		case 'lastestPositionList': return [...state,...payload]

		default: return state
			
	}
}
const detailReducer = (state={resultArr:[],resultObj:{}},action)=>{
	var {type,payload} = action
	switch(type){
		case 'detailInformation':{
			if(payload){
				var data = huanhang(payload)
				var resultObj = Object.assign({},payload,data)				
//				var resultArr=state.resultArr.push({
//					isLight:action.starState,
//					starList:payload.id
//				})	
				
			}			
			return {
				resultArr:state.resultArr,
				resultObj				
			}
		}
		case 'starInfomation':{			
			var resultArr = []
			
			resultArr = [...state.resultArr,state.resultObj]
			return {
				resultArr,
				resultObj:state.resultObj
			}
		}
		
		case 'canclePosition':{
			var arr = [...state.resultArr]
			for(var i=0;i<arr.length;i++){
				if(arr[i].id==payload){
					arr.splice(i,1)
				}
			}
			return {
				resultArr:arr,
				resultObj:state.resultObj
			}
		}
		
		
		default: return state
			
	}
}

const salaryLevel = (state={
							'1':'8-10K',
							'2':'10-15K',
							'3':'15-20K',
							'4':'20K以上'
						})=>{
					
				return state
	
}
const footerIfAbsolute = (state={},action)=>{
	var {type}=action;
	switch(type){
		case 'enterUser':
			IfAbsolute(); 
			return state;
			break;
		
		case 'footerStatic':
			footerStatic(); 
			return state;
			break;
		
		default: return state
	}
}
const reducer = combineReducers({
					homeReducer,
					findjobReducer,
					recommendReducer,
					lastestReducer,
					detailReducer,
					salaryLevel,
					footerIfAbsolute
			})

function IfAbsolute(){
	var htmlHeight = document.documentElement.clientHeight
	var headerHeight = document.getElementById('header').clientHeight
	var boxHeight = document.getElementById('box').clientHeight
	var footerHeight = document.getElementById('foot').clientHeight
	console.log(boxHeight)
	if(headerHeight+ boxHeight+ footerHeight<htmlHeight){
		document.getElementById('foot').style.cssText='position:absolute;bottom:0;'
	}else{
		document.getElementById('foot').style.cssText='position:static;'
	}
	
}
function footerStatic(){
	document.getElementById('foot').style.cssText='position:static;'
}

function huanhang(payload){
	var requisite = payload.requisite.split(/\d+、|\d+\./);		
	var responsibility =  payload.responsibility.split(/\d+、|\d+\./);
//			删除数组第一位的空字符串 
	requisite.splice(0,1);
	responsibility.splice(0,1);
	
	var arr_requisite=[];
	for(var i=0;i<requisite.length;i++){
		arr_requisite[i] = (i+1)+'、'+requisite[i];
	}
	requisite = arr_requisite.join('<br>')
	requisite = requisite.replace(/，/g,",");
	
	var arr_responsibility=[];
	for(var j=0;j<responsibility.length;j++){
		arr_responsibility[j] = (j+1)+'、'+responsibility[j];
	}
	responsibility = arr_responsibility.join('<br>')
	responsibility = responsibility.replace(/，/g,",");
	
	return {
		requisite,
		responsibility
	}
}
export default reducer;