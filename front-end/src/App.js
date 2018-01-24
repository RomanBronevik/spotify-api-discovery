import React, { Component } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";

import reducers from "./reducers";
import theme from "./theme";

import Layout from "./containers/Layout";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const routingMiddleware = routerMiddleware(history);

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(routingMiddleware, ReduxThunk)
);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <Route path="/" component={Layout} />
            </div>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
