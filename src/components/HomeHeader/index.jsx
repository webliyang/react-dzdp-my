import React from 'react';
import './style.less'

class HomeHeader extends React.Component{
    render(){
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        {/* <input type="text"/> */}
                        <input type="text" placeholder="请输入关键字" style={{border:'none'}}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default HomeHeader;