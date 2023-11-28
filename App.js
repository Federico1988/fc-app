import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid';


export default function App() {
  const [newTitleProduct, setNewTitleProduct] = useState("");
  const [newPriceProduct, setNewPriceProduct] = useState("");
  const [selectedProduct, setSelectedProduct] = useState();
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handlerAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title: newTitleProduct,
      price: newPriceProduct
    }
    setProducts(current => [...current, newProduct])
    setNewTitleProduct("");
    setNewPriceProduct("");
  }
  const handlerModal = (item) => {
    setSelectedProduct(item);
    setModalVisible(true);

  }
  const handlerDeleteProduct = () => {
    setProducts(current => current.filter(product => product.id != selectedProduct.id));
    setModalVisible(false);
  }



  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Nombre'
          value={newTitleProduct}
          onChangeText={(t) => setNewTitleProduct(t)}
        />
        <TextInput
          style={styles.input}
          placeholder='Precio'
          value={newPriceProduct}
          onChangeText={(t) => setNewPriceProduct(t)}
        />
        <Button title="ADD"
          onPress={handlerAddProduct}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <View style={styles.cardProduct}>
              <Text style={styles.cardText}>{item.title}</Text>
              <Text>$ {item.price}</Text>
              <Button title='DEL' onPress={() => handlerModal(item)} />
            </View>}
        >
        </FlatList>
      </View>
      <Modal
        visible={modalVisible}
      >
        <View>
          <Text>Esta seguro de borrar?</Text>
          <Text></Text>
          <Button title='Borrar' onPress={() => handlerDeleteProduct()}></Button>
          <Button title='CERRAR' onPress={() => setModalVisible(false)} />
        </View>
      </Modal >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop: 62
  },
  inputContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-around"
  },
  input: {
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 180
  },
  listContainer: {
    padding: 5,
    width: "100%"
  },
  cardProduct: {
    marginTop: 20,
    borderWidth: 4,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  cardText: {
  }
});

