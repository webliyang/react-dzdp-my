import React from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as uersinfoActions from '../actions/userinfo'
class Home extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.userinfo.name}</p>
                <p className="less-Test">Home</p>
                <p>{this.props.userinfo.city}</p>
                <Link to="/list">to list</Link>
            </div>
        )
    }
    componentDidMount(){
      setTimeout(()=>{
        this.props.userinfoActions.login({
            name:'faker',
            city:'南京'
        })
      },2000)
    }
}

function mapStateToProps(state){
    return {
        userinfo : state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return {
        userinfoActions : bindActionCreators(uersinfoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
// export default Home