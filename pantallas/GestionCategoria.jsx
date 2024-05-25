import React, { useState } from 'react'
import { View } from 'react-native'
import { Text, DataTable, Button, Dialog, Portal, PaperProvider,Modal } from 'react-native-paper'

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function GestionCategoria() {

    //Modal
    const [visibleModal, setVisibleModal] = React.useState(false);

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    //Modal

    //Dialog
    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    //Dialog

    const [categorias] = useState([
        {
            id: 1,
            nombre: 'Frutas'
        },
        {
            id: 2,
            nombre: 'Verduras'
        },
        {
            id: 3,
            nombre: 'Lácteos'
        }
    ])

    return (
        <PaperProvider theme={Dialog}>
            <View>
                <Text variant="displayLarge" style={{ textAlign: 'center' }}>Categorias</Text>

                <Button mode='elevated' buttonColor='blue' textColor='white' style={{width:'170px',marginLeft:'5px',marginTop:'10px',marginBottom:'10px'}}>Nueva Categoria</Button>

                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Id</DataTable.Title>
                        <DataTable.Title>Nombre</DataTable.Title>
                        <DataTable.Title>Mantenimiento</DataTable.Title>
                    </DataTable.Header>
                    {categorias.map((categoria) => (
                        <DataTable.Row key={categoria.id}>
                            <DataTable.Cell>{categoria.id}</DataTable.Cell>
                            <DataTable.Cell>{categoria.nombre}</DataTable.Cell>
                            <DataTable.Cell>
                                <Portal>
                                    <Modal visible={visibleModal} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                                    </Modal>
                                </Portal>
                                <Button onPress={showModal}>
                                    <AntDesign name="edit" size={24} color="orange" />
                                </Button>
                                <Button onPress={showDialog}>
                                    <MaterialIcons name="delete" size={24} color="red" />
                                </Button>
                            </DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Alerta</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">Está seguro de eliminar esta categoria?</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Aceptar</Button>
                            <Button onPress={hideDialog}>Cancelar</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </PaperProvider>

    )
}

