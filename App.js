import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid';
import ModalDelete from './Components/ModalDelete';
import AddProduct from './Components/AddProduct';
import Header from './Components/Header';
import Home from './Screens/Home';


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
  const closeModal = () => {
    setModalVisible(false);

  }
  const handlerDeleteProduct = () => {
    setProducts(current => current.filter(product => product.id != selectedProduct.id));
    setModalVisible(false);
  }



  return (
    <View style={styles.container}>
      <Home/>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  }

});

