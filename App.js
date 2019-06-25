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
      console.log('State: ',this.state);
    })
  }
  render() {
    const {inputValue,todos}=this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading/>
          <Input inputValue={inputValue} inputChange={(text)=>this.inputChange(text)} />
          <TodoList todos={todos} />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
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

