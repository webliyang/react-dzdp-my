import React from 'react';
import localStorageFn from '../util/localStore'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActions from '../actions/userinfo'
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                <header>header:{this.props.userinfo.cityName}</header>
                {
                    this.state.initDone ?
                        this.props.children :
                        <div>loadding</div>
                }
                <footer>footer</footer>
            </div>
        )
    }
    componentDidMount() {
        let cityName = localStorageFn.getItem('dzdp_cityName');
        if(cityName==null){
            cityName = '南京'
        }
        this.props.userInfoActions.updateCityName({
            cityName:cityName
        })
        setTimeout(() => {
            this.setState({
                initDone: true
            })
        }, 500)
    }
}
function mapStateToProps(state){
    return {
        userinfo : state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{
        userInfoActions:bindActionCreators(userInfoActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

// export default App;