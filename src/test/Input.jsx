import React from 'react';
class Input extends React.Component{
    render(){
        return(
            <input style={{width: '100%', height: '40px', fontSize: '35px'}} type="text" onKeyUp={this.handleKeyUp.bind(this)}/>
        )
    }
    handleKeyUp(e){
        var value = e.target.value;
        if(e.keyCode===13&&value.trim()){
            this.props.submitFn(value);
            e.target.value = ''; 
        }
    }
}

export default Input;