import "ProductPage.css"
import Stuff from 'Stuff'
import Footer from 'Footer'

const ProductList = [
    {
        title: '果園世界',
        imgUrl: '12'
    },
    {
        title: '青葡甜甜圈',
        imgUrl: '7'
    },
    {
        title: '紅莓鬆餅',
        imgUrl: '13'
    },
    {
        title: '焦甜蘋果蛋糕',
        imgUrl: '14'
    },
    {
        title: '紅櫻蛋糕',
        imgUrl: '8'
    },
    {
        title: '紅莓冰淇淋',
        imgUrl: '15'
    }
]

export default class ProductPage extends React.Component {
    scrollTop = () => {
        window.scrollTo(0,0)
    }
    render() {
        let {item} = this.props
        return <div className='page page-product'>
            <div className="section-cover">
                <div className="cover" style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/10.jpg)` }}></div>
                <div className="titletext">
                    <img src={`${process.env.PUBLIC_PATH}asset/lg-1.svg`}/>
                </div>
            </div>
            <div className="section-content">
                <ul className="navi">
                    <li onClick={this.scrollTop}>
                        <span>甜點類別</span>
                    </li>
                    <li onClick={this.scrollTop}>
                        <span>所有甜點（48）</span>
                    </li>
                    <li onClick={this.scrollTop}>
                        <span>本日精選（10）</span>
                    </li>
                    <li onClick={this.scrollTop}>
                        <span>人氣推薦（26）</span>
                    </li>
                    <li onClick={this.scrollTop}>
                        <span>新品上市（12）</span>
                    </li>
                </ul>
                <div className="stuff-wrapper">
                    <div className="stuff-content">
                        {ProductList.map((e, index) => <Stuff item={e} key={index}></Stuff>)}
                    </div>
                    <div className="pagenum">
                        <div className="num prev">
                            <i className="fas fa-sort-up"></i>
                        </div>
                        <div className="num now">
                            <span>1</span>
                        </div>
                        <div className="num">
                            <span>2</span>
                        </div>
                        <div className="num">
                            <span>3</span>
                        </div>
                        <div className="num next">
                            <i className="fas fa-sort-up"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    }
}