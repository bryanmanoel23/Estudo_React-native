import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container : {
      backgroundColor: 'black',
      flex: 1 ,
      padding: 24
    },
  
    eventName :{
      color:'white',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 48
    },
  
    eventDate : {
      color: '#6b6b6b',
      fontSize: 16,
      fontWeight: 'bold'
    },

    input : {
        flex:1,
        backgroundColor : '#1f1e25',
        height: 56,
        borderRadius: 5,
        color: '#fff',
        padding: 16,
        fontSize: 16,
        marginRight: 12 
    }, 

    inputText : {
      color: '#FFF',
      fontSize: 24,
    },

    inputStyle : {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: "#31CF64",
      alignItems: 'center',
      justifyContent: 'center',
    },

    form : {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },

    listEmpty:{ 
      color: '#FFF',
      fontSize: 14, 
      textAlign: 'center'
    }

  })