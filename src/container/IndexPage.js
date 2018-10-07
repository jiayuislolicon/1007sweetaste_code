import "IndexPage.css"
import Stuff from 'Stuff'
import Footer from 'Footer'

const test = [
    {
        title: '青萄甜甜圈',
        imgUrl: '7',
    },
    {
        title: '紅櫻蛋糕',
        imgUrl: '8',
    },
    {
        title: '藍莓優格',
        imgUrl: '9',
    },
]

export default class IndexPage extends React.Component {

    render() {
        return <div className='page page-index'>
        	<div className="section-index">
        		<div className="cover" style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/1.jpg)` }}></div>
        		<ul className="option">
        			<li><Link to ='/product'>
        				<img src={`${process.env.PUBLIC_PATH}asset/pic/2.jpg`}/>
        				<span>本日精選</span>
        			</Link></li>
        			<li><Link to ='/product'>
        				<img src={`${process.env.PUBLIC_PATH}asset/pic/3.jpg`}/>
        				<span>人氣推薦</span>
        			</Link></li>
        			<li><Link to ='/product'>
        				<img src={`${process.env.PUBLIC_PATH}asset/pic/4.jpg`}/>
        				<span>新品上市</span>
        			</Link></li>
        		</ul>
        	</div>
        	<div className="section-content">
        		<div className="titletext mobile">
        			<img src={`${process.env.PUBLIC_PATH}asset/sm-5.svg`}/>
        		</div>
        		<div className="titletext desktop">
        			<img src={`${process.env.PUBLIC_PATH}asset/lg-3.svg`}/>
        		</div>
        		<div className="cover mobile"
        			 style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/5.jpg)` }}>
        		</div>
        		<div className="content">
        			<p>
        				青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。 
        			</p>
        			<p>
        				是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
        			</p>
        		</div>
        		<div className="cover desktop">
        			<img src={`${process.env.PUBLIC_PATH}asset/pic/5.jpg`}/>
        		</div>
        	</div>
        	<div className="section-content">
        		<div className="cover desktop">
        			<img src={`${process.env.PUBLIC_PATH}asset/pic/6.jpg`}/>
        		</div>
        		<div className="titletext desktop mr42">
        			<img src={`${process.env.PUBLIC_PATH}asset/lg-2.svg`}/>
        		</div>
        		<div className="titletext mobile">
        			<img src={`${process.env.PUBLIC_PATH}asset/sm-4.svg`}/>
        		</div>
        		<div className="cover mobile"
        			 style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/6.jpg)` }}>
        		</div>
        		<div className="content">
        			<p>
        				青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。 
        			</p>
        			<p>
        				是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
        			</p>
        		</div>
        	</div>
        	<div className="section-choose">
        		<div className="titletext mobile">
        			<img src={`${process.env.PUBLIC_PATH}asset/sm-3.svg`}/>
        		</div>
        		<div className="titletext desktop">
        			<img src={`${process.env.PUBLIC_PATH}asset/lg-1.svg`}/>
        		</div>
        		<div className="choose-stuff">
        		  {test.map((e, index) => <Stuff key={index} item={e}/>)}
        		</div>
        	</div>
            <Footer></Footer>
        </div>
    }
}