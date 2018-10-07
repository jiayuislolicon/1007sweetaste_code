import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from 'rootReducer';

function Store(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(ReduxThunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('rootReducer', () => {
            const nextRootReducer = require('rootReducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

let store = Store()

export default store