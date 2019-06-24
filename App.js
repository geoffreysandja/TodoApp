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

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super()
    this.state={
      inputValue:'',
      todos:[],
      type:'All'
    }
  }
  inputChange(inputValue){
    console.log(' Input Value: ',inputValue);
    this.setState({inputValue});
  }
  render() {
    const {inputValue}=this.state
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
          <Heading/>
          <Input inputValue={inputValue} inputChange={(text)=>this.inputChange(text)} />
        </ScrollView>
      </View>
    );
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
