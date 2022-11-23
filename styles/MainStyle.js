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
      marginVertical:5,
      marginHorizontal:5,
      width:'95%',
      backgroundColor:'#fff'
    },
    button:{
      flexWrap:'wrap',
      borderRadius:25,
      fontSize: 24,
      marginVertical:5,
      marginHorizontal:5,
      marginBottom:50
    }
  });

  export default styles;