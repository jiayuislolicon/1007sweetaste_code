import "Header.css"



export default class Header extends React.Component {
    constructor(p){
        super(p)
        this.state = {
            menuVisible: false
        }
    }
    setMenuVisible(){
        this.setState({ menuVisible: !this.state.menuVisible})
    }
    render() {
        let { menuVisible } = this.state
        return <header className='header'>
            <div className="mobile-menu">
                <div className={`hamberger ${ menuVisible && 'open'}`} onClick = { () => this.setMenuVisible(!menuVisible) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="logo">
                    <img src={`${process.env.PUBLIC_PATH}asset/logotype.svg`} className='mobile' />
                </div>
                <div className="link-shopping">
                    <NavLink exact to='/cart'>
                        <i className="fas fa-shopping-cart"></i>
                    </NavLink>
                </div>
            </div>
             <div className={`mobile-options mobile ${ menuVisible && 'open' }`}>
                <NavLink exact to='/'>首頁</NavLink>
                <NavLink exact to='/product'>甜點</NavLink>
                <NavLink exact to='/login'>登入</NavLink>
            </div>
            <div className='desktop-menu'>
                <div className="logo">
                        <img src={`${process.env.PUBLIC_PATH}asset/logo-all-dark.svg`} className='desktop' />
                    </div>
                <div className='menu'>
                    <NavLink exact to='/'>首頁</NavLink>
                    <NavLink exact to='/product'>甜點</NavLink>
                    <NavLink exact to='/login'>登入</NavLink>
                    <Link to='/cart' className='nohover'>
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                </div>
            </div>
        </header>
    }
}