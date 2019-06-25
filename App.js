/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import Button from './components/Button';
import TodoList from './components/TodoList';
import TabBar from './components/TabBar';

let todoIndex=0;
type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super()
    this.state={
      inputValue:'',
      todos:[],
      type:'All'
    }
    this.submitTodo= this.submitTodo.bind(this);
    this.toggleComplete=this.toggleComplete.bind(this);
    this.deleteTodo=this.deleteTodo.bind(this);
    this.setType=this.setType.bind(this);
  }
  inputChange(inputValue){
    console.log(' Input Value: ',inputValue);
    this.setState({inputValue:inputValue});
  }
  submitTodo(){
  // alert('Input value'+this.state.inputValue);
   /* if(this.state.inputValue.match(/^\s*$/)){
      return
    }*/
    var todo={
      title: this.state.inputValue,
      todoIndex:todoIndex,
      complete:false
    }
    todoIndex++
    var todos=[...this.state.todos, todo]
    this.setState({todos:todos,inputValue:''},()=>{
    //  alert('State: ',this.state.inputValue);
    })
  }
  deleteTodo(todoIndex){
    let { todos }=this.state;
    todos=todos.filter((todo)=> todo.todoIndex !== todoIndex);
    this.setState({todos});
  }
  toggleComplete(todoIndex){
    let todos=this.state.todos;
    todos.forEach((todo)=>{
      if(todo.todoIndex === todoIndex){
        todo.complete = !todo.complete;
      }
    })
    this.setState({todos});
  }
  setType(type){
    this.setState({type});
  }
  render() {
    const {inputValue,todos,type}=this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading/>
          <Input inputValue={inputValue} inputChange={(text)=>this.inputChange(text)} />
          <TodoList type={type} todos={todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f5f5f5'
  },
  content:{
    flex:1,
    paddingTop:6
  }
});

