import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi tienda, soy Carlos Tipan</Text>
        <Text style={styles.producto1}>1.- Doritos </Text>
        <Text style={styles.producto2}>2.- Nachos </Text>
        <Text style={styles.producto3}>3.- Panchito </Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('Welcome Carlos');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bfbfbf',
      alignItems: 'center',
      justifyContent: 'center',
    },
    producto1:{
        color:'red',
    },
    producto2:{
        color:'blue',
    },
    producto3:{
        color:'green',
    },
  });