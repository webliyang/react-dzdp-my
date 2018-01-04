import React from 'react';
class RouterMap extends React.Component{
    render(){
        return (
            <div>
                <header>i am header</header>
                {this.props.children}
                <footer>i am footer</footer>
            </div>
        )
    }
}

export default RouterMap