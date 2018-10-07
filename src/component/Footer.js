import "Footer.css"

export default class IndexPage extends React.Component {

    render() {
        return <div>
            <div className="section-sub">
                <div className="panel-top">
                    <div className="logo">
                        <img src={`${process.env.PUBLIC_PATH}asset/logo-light.svg`} />
                    </div>
                    <span>訂閱你我的甜蜜郵件</span>
                </div>
                <div className="panel-bot">
                    <div className="icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <input type="text"/>
                    <div className="submit">
                        <div className="arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-content">
                    <div className="panel-left">
                        <div className="logo">
                            <img src={`${process.env.PUBLIC_PATH}asset/logotype.svg`} />
                        </div>
                        <p>07-1234-5678</p>
                        <p>sweetaste@email.com</p>
                        <p>800 高雄市新興區幸福路 520 號</p>
                        <div className="contact">
                            <div className="icon">
                                <img src={`${process.env.PUBLIC_PATH}asset/ic-line.svg`} />
                            </div>
                            <div className="icon">
                                <img src={`${process.env.PUBLIC_PATH}asset/ic-facebook.svg`} />
                            </div>
                        </div>
                    </div>
                    <div className="panel-right">
                        <img src={`${process.env.PUBLIC_PATH}asset/sm-1.svg`} className='desktop' />
                        <p className="copyright">© 2018 Sweetaste* All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    }
}