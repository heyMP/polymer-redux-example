const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = Redux.createStore(createReducer(), composeEnhancers(
    Redux.applyMiddleware(ReduxThunk.default),
));

function createReducer() {
    return Redux.combineReducers({
        inboxReducer: inboxReducer
    });
}
