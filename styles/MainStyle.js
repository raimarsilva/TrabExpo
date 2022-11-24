import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    titleText: {
      fontSize:24,
      textAlign: 'center',
      marginVertical:5,
      marginHorizontal:5,
      marginBottom:50
    },
    plainText:{
      fontSize:20
    },
    textInput: {
      borderWidth:1,
      placeholderTextColor:'grey',
      borderRadius:4,
      fontSize: 24,
      marginVertical:10,
      marginHorizontal:10,
      width:'95%',
      backgroundColor:'#fff',
      height:50,
      paddingHorizontal:5
    },
    button:{
      alignContent:'stretch',
      backgroundColor:'#1351B4',
      borderRadius:25,
      width:'60%',
      marginVertical:10,
      marginHorizontal:10,
      marginBottom:50,
      height:50
    },
    buttonText:{
      color:'#fff',
      fontSize:20,
      textAlignVertical:'center',
      textAlign:'center',
      height:50
    }
  });

  export default styles;