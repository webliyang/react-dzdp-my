import React from 'react'
import { hashHistory ,Link} from 'react-router'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as uersinfoActions from '../actions/userinfo'
class List extends React.Component {
    render() {
        const arr = [1, 2, 3]
        return (
            <ul>
                <li onClick={this.changeReduxdata.bind(this)}>{this.props.userinfo.name}</li>
                {arr.map((item, index) => {
                    return <li key={index} onClick={this.clickHandler.bind(this, item)}>js jump to {item}</li>
                })}
                <li><Link to="/">回到home</Link></li>
            </ul>
        )
    }
    clickHandler(value) {
        hashHistory.push('/detail/'+value)
    }
    changeReduxdata(){
        console.log('aaaa')
        this.props.userinfoActions.login({
            name:'bang',
            city: '上海'
        })
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
)(List)
// export default List