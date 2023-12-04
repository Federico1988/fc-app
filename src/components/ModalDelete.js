import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

const ModalDelete = ({ product, visible,closeModal, onDelete }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>¿Está seguro de borrar?</Text>
          <Text style={styles.productTitle}>{product.title}</Text>
          <View style={styles.buttonContainer}>
            <Button title='Borrar' onPress={() => onDelete()} color="#e74c3c" />
            <Button title='CERRAR' onPress={() => closeModal()} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ModalDelete;
