import { View, Text, StyleSheet, Button } from 'react-native'

export const Home = ({ navigation }) => {
    return <View style={styles.container}>
        <Text>Bienvenido a mi aplicacion, soy Patsy Rios</Text>
        <Text>Esto es una frase cualquiera. Jajaja</Text>
        <View style={styles.botones}>

            <View style={styles.boton1}>
                <Button
                    title='CONTACTS'
                    color='yellow'
                    onPress={() => {
                        navigation.navigate('ContactsNav');
                    }}
                />
            </View>


            <View style={styles.boton2}>
                <Button
                    title='PRODUCTOS'
                    color='yellow'
                    onPress={() => {
                        navigation.navigate('ProductNav');
                    }}
                />
            </View>

        </View>

    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aquamarine',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,

    },
    boton1: {

        marginRight: 60,
        backgroundColor: 'purple',
        borderRadius: 5,


    },
    boton2: {
        backgroundColor: 'purple',
        borderRadius: 5,


    },
});
