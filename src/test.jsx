import React, { Component } from 'react';
import Input from './test/Input';
import List from './test/List';
class Test extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos:[
        {id:'0',text:'aaaa'},
        {id:'1',text:'bbb'}
      ]
    }
  }
  componentDidMount(){
    console.log(this.firstInput.value)
  }
  render() {
    return (
      <div>
        <Input submitFn={this.submitFn.bind(this)}></Input>
        <List data={this.state.todos} deleteFn={this.deleteFn.bind(this)}></List>
        <input type="text" ref={(input)=>{this.firstInput=input}} defaultValue="aaa" onChange={this.handleOnChange.bind(this)}/>
        {/* <input type="text" value={this.firstInput.value}/>         */}
        <p>{this.state.todos[0].id}</p>
      </div>

    )
  } 
  submitFn(value){
    var arr = this.state.todos;
    arr.push({
      id:new Date().toString(),
      text:value
    })
    this.setState({
      todos: arr
    })
  }
  deleteFn(id){
    var arr = this.state.todos;
    this.setState({
      todos:arr.filter(item=>{
        if(item.id!==id){
          return item;
        }
      })
    })
  }
  handleOnChange(){
    console.log(this.firstInput.value);
  }
}

export default Test