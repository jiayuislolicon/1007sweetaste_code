import App from 'App'
import store from 'Store'

let AppRouter = <HashRouter><App/></HashRouter>


window.onload = () => {
    ReactDOM.render(
        <Provider store={store}>
            {AppRouter}
        </Provider>,
        document.getElementById('root')
    );
};









