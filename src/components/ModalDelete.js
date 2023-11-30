import { View, Text, Modal, Button, StyleSheet } from 'react-native'
import React from 'react'

const ModalDelete = ({ product, onModal, visible, onDelete }) => {

    return (
        <Modal
            visible={visible}
        >
            <View>
                <Text>Esta seguro de borrar?</Text>
                <Text>{product.title}</Text>
                <Button title='Borrar' onPress={() => onDelete()}></Button>
                <Button title='CERRAR' onPress={() => onModal(false)} />
            </View>
        </Modal >
    )
}


const styles = StyleSheet.create({



})
export default ModalDelete