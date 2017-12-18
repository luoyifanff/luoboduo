import React,{Component} from 'react';

import './about.scss'
import {connect} from 'react-redux'
class About extends Component{
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
			<section id='about'>
				<article>
					<ul>
						<li>
							<span>什么是萝卜多</span>
							<p>萝卜多是针对创业公司以及独立人才寻找伙伴合作，提供多对多服务，以按需推荐的方式帮助创业团队以及人才解决、盲目寻找、茫然等待的问题。萝卜多不同于其他招聘网站。萝卜多的合作企业和候选人，都是萝卜多精心筛选，认证，陪伴多年的伙伴。
							</p>
						</li>
						<li>
							<span>萝卜多团队介绍</span>
							<p>成立于2014年，2015年3月开始运营，先后开启了IT修真院、草船云、萝卜多等三条项目主线，主打高质专业高效低价的理念，以卓越的技术实力和人才鉴别能力奠定基石，立足市场。
							</p>
							<p>葡萄藤始终秉持促进中国企业创新与成长为愿景，凭借其团队丰富的行业经验和全球资源网络以及在业界的声誉，不遗余力地帮助创业家和他们的企业突破自我、不断创新、共创事业、共享成功！
							</p>
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
)(About);