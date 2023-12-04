import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid';
import ModalDelete from './src/components/ModalDelete';
import AddProduct from './src/components/AddProduct';
import ListProduct from './src/components/ListProduct';


export default function App() {
  const [newTitleProduct, setNewTitleProduct] = useState("");
  const [newPriceProduct, setNewPriceProduct] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handlerAddProduct = () => {
    if (newTitleProduct === "" || newPriceProduct === "") return; //No lo agrego si esta vacio. TODO: dar un feedback en los textInput
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
      <AddProduct
        newTitle={newTitleProduct}
        newPrice={newPriceProduct}
        setNewTitle={setNewTitleProduct}
        setNewPrice={setNewPriceProduct}
        addProduct={handlerAddProduct}
      />
      <ListProduct
        products={products}
        onModal={handlerModal}
      />
      <ModalDelete
        product={selectedProduct}
        onModal={handlerModal}
        visible={modalVisible}
        onDelete={handlerDeleteProduct}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    padding: 10,
    marginTop: 62
  }

});

