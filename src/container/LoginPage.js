import "LoginPage.css"
import Footer from 'Footer'

export default class LoginPage extends React.Component {

    render() {
        return <div className='page page-login'>
            <div className="section-content">
                <div className="panel-left">
                    <div className="title">
                        <span>會員登入</span>
                    </div>
                    <div className="social-wrapper">
                        <div className="option">
                            <img src={`${process.env.PUBLIC_PATH}asset/facebook.png`}/>
                        </div>
                        <div className="option">
                            <img src={`${process.env.PUBLIC_PATH}asset/google.png`}/>
                        </div>
                        <div className="option">
                            <img src={`${process.env.PUBLIC_PATH}asset/yahoo.png`}/>
                        </div>
                    </div>
                    <div className="login-form">
                        <div className="input">
                            <div className="icon">
                                <i className="fas fa-user"></i>
                            </div>
                            <input type="text" placeholder='電子信箱/手機號碼'/>
                        </div>
                        <div className="input">
                            <div className="icon">
                                <i className="fas fa-key"></i>
                            </div>
                            <input type="text" placeholder='請輸入使用者密碼'/>
                        </div>
                        <div className="check">
                            <input type="checkbox"/>
                            <span>記住我</span>
                        </div>
                        <div className="btn">
                            <Link to='/'><span>登入帳號</span></Link>
                        </div>
                    </div>
                </div>
                <div className="panel-right">
                    <div className="title">
                        <span>—— 連結社群帳號 ——</span>
                    </div>
                    <div className="social-wrapper">
                        <div className="option">
                            <img src={`${process.env.PUBLIC_PATH}asset/facebook.png`}/>
                        </div>
                        <div className="option">
                            <img src={`${process.env.PUBLIC_PATH}asset/google.png`}/>
                        </div>
                        <div className="option">
                            <img src={`${process.env.PUBLIC_PATH}asset/yahoo.png`}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    }
}