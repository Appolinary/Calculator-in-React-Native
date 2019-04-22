import React , {Component} from "react"
import {View , Text, StyleSheet, Button, Alert, TouchableOpacity} from "react-native"
import { throwStatement } from "@babel/types";


function buttonPressed({buttonString}){

  Alert.alert(buttonString)
       
}


class CalculatorButton extends Component {
  render(){
     return (
       <View style={this.props.s}>
          <TouchableOpacity onPress = {()=>{this.props.pressed(this.props.name)}} style = {{justifyContent:"center", flex : 1}} >
              <Text style = {{fontSize : 25, color : "white", textAlign : "center", fontWeight:"700"}}>
                    {this.props.name}
              </Text>
          </TouchableOpacity>
       </View>
     )
  }
}

export default class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      expression: ""
    }
  }


  pressed = (newElement)=>{
     var oldExpression = this.state.expression
    
     if(newElement == "AC"){
          this.setState({
            expression : ""
          })
     }else{
        this.setState({
          expression: oldExpression + newElement
        })
    }
  }

  render(){
    return( 
    <View style = {{flex : 1,backgroundColor : "#1C1C1C" , paddingBottom : 10}}>
       <View style={{flex : 2 , justifyContent: "center"}}>
           <Text style={{fontSize: 50 , color : "white", textAlign : "right", paddingRight:5 , paddingBottom : 10, paddingTop: 170}}>
               {this.state.expression}
           </Text>
       </View>
       <View style={{flex : 3, flexDirection : "row"}}>
            <View style = {{flex : 3}}>
                  <View style = {{flex : 1,flexDirection : "row"}}>
                        <CalculatorButton pressed = {this.pressed} s ={styles.lightGrayButton} name = "AC"  />
                        <CalculatorButton pressed = {this.pressed} s ={styles.lightGrayButton}name = "(" />
                        <CalculatorButton pressed = {this.pressed} s ={styles.lightGrayButton}name = ")" />
                  </View>
                  <View style = {{flex : 1,flexDirection : "row"}}>
                        <CalculatorButton pressed = {this.pressed} s ={styles.lightGrayButton} name = "<"  />
                        <CalculatorButton pressed = {this.pressed} s ={styles.lightGrayButton}name = ">" />
                        <CalculatorButton pressed = {this.pressed} s ={styles.lightGrayButton}name = "!" />
                  </View>
                   <View style = {{flex : 1,flexDirection : "row"}}>
                        <CalculatorButton pressed = {this.pressed} s ={styles.lightGrayButton} name = "&&"  />
                        <CalculatorButton pressed = {this.pressed} s ={styles.lightGrayButton}name = "||" />
                        <CalculatorButton pressed = {this.pressed} s ={styles.lightGrayButton}name = "^" />
                  </View>
                  <View  style= {{flex : 3}}>
                     <View style = {{flex : 1, flexDirection : "row"}}>
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton} name = "7" />
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton}name = "8" />
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton}name = "9" />
                    </View>
                    <View style = {{flex : 1, flexDirection : "row"}}>
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton} name = "4" />
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton} name = "5" />
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton} name = "6" />
                    </View>
                    <View style = {{flex : 1, flexDirection : "row"}}>
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton}name = "1" />
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton}name = "2" />
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton}name  = "3"/>
                    </View>
                  </View>
                  <View style = {{flex : 1, flexDirection: "row"}}>
                       <View style = {{flex : 2}}>
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton} name = "0"/>
                        </View>
                        <View style = {{flex : 1}}>
                          <CalculatorButton pressed = {this.pressed} s ={styles.lightBlackButton} name  = "."/>
                        </View>
                  </View>
            </View>
            <View style = {{flex : 1} }>
                  <CalculatorButton pressed = {this.pressed} s ={styles.orangeButton} name = "/" />
                  <CalculatorButton pressed = {this.pressed} s ={styles.orangeButton} name = "*" />
                  <CalculatorButton pressed = {this.pressed} s ={styles.orangeButton} name = "-" />
                  <CalculatorButton pressed = {this.pressed} s ={styles.orangeButton} name = "+" />
                  <CalculatorButton pressed = {this.pressed} s ={styles.orangeButton} name = "=" />
            </View>
       </View>
    </View>
    )
  }
}


const styles = StyleSheet.create({
   
  orangeButton:{
    backgroundColor: "#FF9500", 
    flex : 1,
     margin : 5, 
     borderRadius:10
  },
  lightGrayButton:{
    backgroundColor: "#D4D4D2", 
    flex : 1,
     margin : 5, 
     borderRadius:10
  },
  lightBlackButton:{
    backgroundColor: "#505050", 
    flex : 1,
     margin : 5, 
     borderRadius:10
  }
})