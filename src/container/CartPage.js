import "CartPage.css"
import Footer from 'Footer'
import ShoppingItem from 'ShoppingItem'

const cartStuff = [
    {
        title: '紅櫻蛋糕',
        imgUrl: '8',
    },
    {
        title: '紅櫻蛋糕',
        imgUrl: '8',
    },
    {
        title: '紅櫻蛋糕',
        imgUrl: '8',
    },
]

export default class CartPage extends React.Component {

    render() {
        return <div className='page page-cart'>
            <div className="section-content">
                <div className="shopping-list">
                    <div className="title">
                        <span>您的購物車</span>
                    </div>
                    <div className="shopping-wrapper">
                        {cartStuff.map((e, index) => <ShoppingItem item={e} key={index}></ShoppingItem>)}
                    </div>
                </div>
                <div className="paid">
                    <div className="panel-top">
                        <div className="title">
                            <span>訂單摘要</span>
                        </div>
                        <div className="price">
                            <span>小計</span>
                            <span>NT$ 2,700</span>
                        </div>
                        <div className="price">
                            <span>運費</span>
                            <span>NT$ 300</span>
                        </div>
                        <div className="total">
                            <span>總計</span>
                            <span>NT$ 3,000</span>
                        </div>
                    </div>
                    <Link to='/checkout'><div className="panel-bottom">
                        <span>結帳</span>
                    </div></Link>
                </div>
            </div>
        <Footer></Footer>
        </div>
    }
}