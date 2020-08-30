import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WriteScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        author: "",
        title: "",
        text: "",
      }
    }

    finishedStory=()=>{
      db.collection("booksWritten").add({
        'author': this.state.author,
        'title' : this.state.title,
        'date' : firebase.firestore.Timestamp.now().toDate(),
        'text': this.state.text
      })
      .then((response)=>{
        Alert.alert("Story submitted successfully !");
    })
    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert(errorMessage);
    })}
    

    render() {
      const authorName = this.state.author;
      const titleName = this.state.title;
      const textStory = this.state.text;

      return(

        <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled> 
       <View style={styles.container}>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Author of the Story"
            value={this.state.author}
            onChangeText = {text => this.setState({author : text})}/>
          </View>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="Title of the Story"
            value={this.state.title}
            onChangeText = {text => this.setState({title : text})}/>
          </View>
          <View style={styles.inputView}>
          <TextInput 
            style={styles.inputBox}
            placeholder="The Story"
            value={this.state.text}
            multiline = {true} 
            onChangeText = {text => this.setState({text : text})}/>
          </View>
          <View style={styles.inputView}>
          <TouchableOpacity onPress={this.finishedStory}>
            <Text style={styles.submitButton}> Submit </Text>
          </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>  
      );
      }
    }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    submitButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    }
  });