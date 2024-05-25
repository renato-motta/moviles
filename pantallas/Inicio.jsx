import React, { useState } from 'react'
import { View } from 'react-native'

import { Button, Menu, Divider, PaperProvider, Text } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native'

export default function Inicio() {

    const navigation = useNavigation()

    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <PaperProvider>
            <View
                style={{
                    paddingTop: 50,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <Text variant="displayLarge" style={{ color: '#000' }}>Bienvenido</Text>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button onPress={openMenu}>Mostrar menu</Button>}>
                    <Menu.Item onPress={() => {
                        navigation.navigate('Categorias')
                        setVisible(!visible)
                    }} title="Gestionar Categorias" />
                    <Divider />
                    <Menu.Item onPress={() => {
                        navigation.navigate('Productos')
                        setVisible(!visible)
                    }} title="Gestionar Productos" />
                </Menu>
            </View>
        </PaperProvider>
    )
}

