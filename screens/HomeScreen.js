import Reacr,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
    constructor() {
      super();
      this.state = {
        text: '',
        displayText: '',
      };
    }
    getWord=()=>{
        var searchKeyword = word.toLowerCase()
        var url = "https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json"
        return fetch(url)
        .then((data)=>{
if(data.status===200){
    return data.json();

}
else
{
    return null
}
        })
        .then((response)=>{
            var responseObject = response;

            if(responseObject){
                var wordData = responseObject.definitions[0];
                var definition = wordData.description
                var lexicalCategary = wordData.wordtype
                this.setState({
                    "word":this.state.text,
                    "definition":definition,
                    "lexicalCategory":lexicalCateogory
                })
            }
            else{
                this.setState({
                    "word":this.state.text,
                    "definition":definition,
               })
            }
        })
    }
    render(){
        return(
            <View style = {styles.container}>
        <Header
          backgroundColor={'#1c8211'}
          centerComponent={{
            text: 'Pocket Dictionary',
            style: { color: 'red', fontSize: 20 },
          }}
        />
        <TextInput
        style = {styles.inputBox}
        onChangeText={(text) => {
            this.setState({
                text:text,
                isSearchPressed:false,
                word:"Loading...",
                lexicalCategory:'',
                examples:[],
                defination:""
            });
        }}
        value = {this.state.text}
        />
        <TouchableOpacity 
        style = {styles.searchButton} 
        onPress={()=>{
            this.setState({isSearchPressed:true})
            this.getWord(this.state.text)
            }}></TouchableOpacity>

            

<View style = {styles.detailsContainer}>
<Text style = {styles.detailsTitle}>
    Word:{""}
    
</Text>
<Text style={{fontSize:18}}>
    {this.state.word}
</Text>
</View>

<View style = {styles.detailsContainer}>
<Text style = {styles.detailsTitle}>
    Type:{""}
    
</Text>
<Text style={{fontSize:18}}>
    {this.state.lexicalCategory}
</Text>
</View>

<View style = {{flexDirection:'row',flexWrap:'wrap'}}>
<Text style = {styles.detailsTitle}>
    Definition:{""}
    
</Text>
<Text style={{fontSize:18}}>
    {this.state.definition}
</Text>
</View>
</View>


        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    inputBoxContainer :{
        flex:0.3,
        alignItems:'center',
        justifyContent:'center'
    },
    inputBox:{
        width:'80%',
        alignSelf:'center',
        height:40
    }
})