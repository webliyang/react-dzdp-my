import React from 'react';
import HomeHeader from '../../components/HomeHeader'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoAction from '../../actions/userinfo'
class Home extends React.Component{
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                home
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo : state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(userInfoAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)