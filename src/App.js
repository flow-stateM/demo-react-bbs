import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import {applyMiddleware,createStore,compose} from 'redux';
import thunk from 'redux-thunk';

import Home from './components/Index/Home';
import Essay from './components/Essay/Essay';

import Page404 from './static/Page404';
import reducers from './redux/index.redux';

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension()
))

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path="/good" component={Home}/>
                        <Route path="/share" component={Home}/>
                        <Route path="/ask" component={Home}/>
                        <Route path="/job" component={Home}/>
                        <Route path='/essay' component={Essay}/>
                        <Route component={Page404}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App;