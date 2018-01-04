import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoAction from '../../actions/userinfo'
class User extends React.Component{
    render(){
        return (
            <div>
                User
                <p>name:{this.props.userinfo.name}</p>
                <p>city: {this.props.userinfo.cityName}</p>
                <button onClick={this.clickFn.bind(this)}>点击</button>
            </div>
        )
    }
    clickFn(){
        this.props.userInfoAction.updateCityName({
           cityName:'torkey'
        })
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userInfoAction:bindActionCreators(userInfoAction,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(User)

// export default User