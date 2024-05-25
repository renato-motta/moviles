import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Text,TextInput,Button } from 'react-native-paper'

import {useNavigation} from '@react-navigation/native'

export default function Login() {

    const navigation=useNavigation()

    return (
        <View style={styles.contenedor}>
            <View style={styles.div}>
                <Text variant="titleLarge">Usuario</Text>
                <TextInput/>
            </View>
            <View style={styles.div}>
                <Text variant="titleLarge">Contraseña</Text>
                <TextInput/>
            </View>
            <View>
                <Button mode='contained' onPress={()=>navigation.navigate('Inicio')}>Login</Button>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    contenedor:{
        width:'100%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    div:{
        display:'flex',
        marginBottom:'15px',
        width:'250px'
    }
})

