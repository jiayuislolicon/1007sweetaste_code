import "normalize.css"
import "./App.css"
import { isMobile } from 'globals'


import Header from 'Header'
import IndexPage from 'IndexPage'
import ProductPage from 'ProductPage'
import LoginPage from 'LoginPage'
import CartPage from 'CartPage'
import PaidPage from 'PaidPage'
import SucessfulPage from 'SucessfulPage'

class App extends React.Component {
    componentDidMount(){
        if(!isMobile){
            document.body.classList.add('desktop')
        }
        window.scrollTo(0,0)
    }
    componentWillReceiveProps(np){
        window.scrollTo(0,0)
    }
    render() {
        return <div id='app'>
            <Header/>
            <Switch>
                <Route exact path='/' component={IndexPage}/>
                <Route exact path='/product' component={ProductPage}/>
                <Route exact path='/login' component={LoginPage}/>
                <Route exact path='/cart' component={CartPage}/>
                <Route exact path='/checkout' component={PaidPage}/>
                <Route exact path='/done' component={SucessfulPage}/>
            </Switch>
        </div>
    }
}


export default compose(
    withRouter,
    connect(
        ( { } ) => ( {} ),
        null
    )
)(App)



