import React from 'react';
class List extends React.Component{
    render(){
        return (
            <ul style={{marginTop: '10px', fontSize: '20px', lineHeight: '30px'}}>
                {this.props.data.map((item,index)=>
                <li key={index} onClick={this.clickHandler.bind(this,item.id)}>{item.text}</li>
                )}
            </ul>
        )
    }
    clickHandler(id){
        this.props.deleteFn(id);
    }
}

export default List;