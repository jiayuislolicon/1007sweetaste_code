import "PaidPage.css"
import Footer from 'Footer'

export default class ProductPage extends React.Component {

    constructor(p){
        super(p)
        this.state = {
            mailVisible: false,
            eticketVisible: true
        }
    }
    componentDidMount(){
        let {info, processbar, options} = this
        info.classList.add('visible')
        processbar.children[0].classList.add('now')
        options.children[0].classList.add('pick')
    }
    formVisible(e){
        let parent = e.target.parentElement
        let {card, receipt, processbar} = this


        if(parent.classList[0] == 'form-info'){
            parent.classList.remove('visible')
            card.classList.add('visible')
            processbar.children[0].classList.add('sucess')
            processbar.children[0].classList.remove('now')
            processbar.children[2].classList.add('now')
        }else if(parent.classList[0] == 'form-card'){
            parent.classList.remove('visible')
            receipt.classList.add('visible')
            processbar.children[2].classList.add('sucess')
            processbar.children[2].classList.remove('now')
            processbar.children[4].classList.add('now')
        }
    }

    tabOptionVisible(e){
        let {options} = this
        let children = options.children
        let childrenArray = [...children]

        childrenArray.forEach((child) => child.classList.remove('pick') )
        if(e.target == childrenArray[0]){
            this.setState({
                eticketVisible: true,
                mailVisible: false
            })
            childrenArray[0].classList.add('pick')
        }else if(e.target == childrenArray[1]){
            this.setState({
                eticketVisible: false,
                mailVisible: true
            })
            childrenArray[1].classList.add('pick')
        }
    }

    render() {
        let {mailVisible, eticketVisible} = this.state
        return <div className='page page-paid'>
            <div className="section-content">
                <div className="paid-info">
                    <div className="paid-title">
                        <div className="title">
                            <span>運送</span>
                        </div>
                        <div className="processbar" ref = {el => this.processbar = el}>
                            <div className="circle"></div>
                            <div className="stright"></div>
                            <div className="circle"></div>
                            <div className="stright"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <div className="form-info" ref = { el => this.info = el}>
                            <div className="name">
                                <div className="input">
                                    <span>姓氏</span>
                                    <input type="text" placeholder='王'/>
                                </div>
                                <div className="input">
                                    <span>名字</span>
                                    <input type="text" placeholder='小明'/>
                                </div>
                            </div>
                            <div className="phone input">
                                <span>電話</span>
                                <input type="text" placeholder='0912-345-678'/>
                            </div>
                            <div className="address">
                                <div className="title">
                                    <span>地址</span>
                                </div>
                                <div className="option">
                                    <div className="input">
                                        <select name="city">
                                            <option value="高雄市">高雄市</option>
                                        </select>
                                    </div>
                                    <div className="input">
                                        <select name="dist">
                                            <option value="新興區">新興區</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input">
                                    <input type="text" placeholder='幸福路520號'/>
                                </div>
                            </div>
                            <div className="btn" onClick={(e) => this.formVisible(e)}>
                                <span>下一步</span>
                            </div>
                        </div>
                        <div className="form-card" ref = { el => this.card = el}>
                            <div className="card input">
                                <span>信用卡卡號</span>
                                <input type="text" placeholder='9012-3456-7890-1234'/>
                                <div className="icon">
                                    <i className="far fa-credit-card"></i>
                                </div>
                            </div>
                            <div className="card-name input">
                                <span>持卡人姓名</span>
                                <input type="text" placeholder='王'/>
                                <input type="text" placeholder='小明'/>
                            </div>
                            <div className="timelimit input">
                                <span>有效期限</span>
                                <select name="month">
                                    <option value="">月</option>
                                </select>
                                <select name="year">
                                    <option value="">年</option>
                                </select>
                            </div>
                            <div className="num input">
                                <span>背面末三碼</span>
                                <input type="text" placeholder='123'/>
                            </div>
                            <div className="btn" onClick={(e) => this.formVisible(e)}>
                                <span>下一步</span>
                            </div>
                        </div>
                        <div className="form-receipt" ref = { el => this.receipt = el}>
                            <div className="tab-options" ref = {el => this.options = el}>
                                <div className="option pick" onClick = {e => this.tabOptionVisible(e)}>
                                    <span>電子發票</span>
                                </div>
                                <div className="option" onClick = {e => this.tabOptionVisible(e)}>
                                    <span>郵寄發票</span>
                                </div>
                            </div>
                            <div className={`${eticketVisible && 'visible'} option-e-ticket`} ref = {el => this.eticket = el}>
                                <div className="input">
                                    <span>電子郵件信箱</span>
                                    <input type="text" placeholder='example@email.com'/>
                                </div>
                                <div className="input">
                                    <span>統一編號（選填）</span>
                                    <input type="text" placeholder='12345678'/>
                                </div>
                            </div>
                            <div className={`${mailVisible && 'visible'} option-mail`} ref = {el => this.mail = el}>
                                <div className="address">
                                    <div className="title">
                                        <span>地址</span>
                                    </div>
                                    <div className="option">
                                        <div className="input">
                                            <select name="city">
                                                <option value="高雄市">高雄市</option>
                                            </select>
                                        </div>
                                        <div className="input">
                                            <select name="dist">
                                                <option value="新興區">新興區</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input">
                                        <input type="text" placeholder='幸福路520號'/>
                                    </div>
                                </div>
                                <div className="taxid">
                                    <div className="input">
                                        <span>統一編號（選填）</span>
                                        <input type="text" placeholder='12345678'/>
                                    </div>
                                </div>
                            </div>
                             <Link to='/done'><div className="btn">
                               <span>確認結帳</span>
                            </div></Link>
                        </div>
                    </div>
                </div>
                <div className="paid-content">
                    <div className="paid-price">
                        <div className="title">
                            <span>訂單摘要</span>
                        </div>
                        <div className="text-wrapper">
                            <div className="text">
                                <span>小計</span>
                                <span>NT$ 2,700</span>
                            </div>
                            <div className="text">
                                <span>運費</span>
                                <span>NT$ 300</span>
                            </div>
                            <div className="total">
                                <span>總計</span>
                                <span>NT$ 3,000</span>
                            </div>
                        </div>
                    </div>
                    <div className="shopping-list">
                        <div className="title">
                            <span>購物清單</span>
                        </div>
                        <div className="shoppinglist-stuff-wrapper">
                            <div className="shoppinglist-stuff">
                                <div className="stuff-img" 
                                     style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/8.jpg)` }}>
                                </div>
                                <div className="stuff-name">
                                    <span>焦糖馬卡龍 (2)</span>
                                    <span className='price'>NT$ 900</span>
                                </div>
                            </div>
                            <div className="shoppinglist-stuff">
                                <div className="stuff-img" 
                                     style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/8.jpg)` }}>
                                </div>
                                <div className="stuff-name">
                                    <span>焦糖馬卡龍 (2)</span>
                                    <span className='price'>NT$ 900</span>
                                </div>
                            </div>
                            <div className="shoppinglist-stuff">
                                <div className="stuff-img" 
                                     style={{ backgroundImage: `url(${process.env.PUBLIC_PATH}asset/pic/8.jpg)` }}>
                                </div>
                                <div className="stuff-name">
                                    <span>焦糖馬卡龍 (2)</span>
                                    <span className='price'>NT$ 900</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    }
}