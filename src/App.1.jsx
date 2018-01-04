import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';
import RouterMap from './routetest/RouterMap'
import List from './routetest/List';
import Detail from './routetest/Detail';
import Home from './routetest/Home';
import NotFond from './routetest/NotFond'

class App extends React.Component{
    render(){
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={RouterMap}>
                    <IndexRoute component={Home}/>
                    <Route path='list' component ={List} />
                    <Route path='detail/:id' component={Detail} />
                    <Route path='*' component={NotFond} />
                </Route>

            </Router>
        )
    }
    updateHandle(){
        console.log('changed')
    }
}
export default App