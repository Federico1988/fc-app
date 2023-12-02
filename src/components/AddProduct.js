import { StyleSheet, TextInput, View, TouchableHighlight, Text } from 'react-native'
import React from 'react'

const AddProduct = ({ newTitle, newPrice, setNewTitle, setNewPrice, addProduct }) => {

    return (
        <View style={styles.addProductsContainer}>
            <Text> Agregar productos: </Text>
            <View style={styles.addRowContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    value={newTitle}
                    onChangeText={(t) => setNewTitle(t)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Precio'
                    value={newPrice}
                    onChangeText={(t) => setNewPrice(t)}
                />
                <TouchableHighlight
                    style={styles.addButton}
                    underlayColor="#DDDDDD"
                    onPress={addProduct}
                >
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addProductsContainer: {
        padding: 10,
        borderWidth: 1,
        margin:5,
        borderRadius:8,
        borderColor: 'rgba(169, 169, 169, 0.5)'
        
    },
    addRowContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 2,
        marginTop:15,
        justifyContent: 'space-around',
        borderRadius: 8
    },
    input: {
        flex: 1,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginHorizontal: 5,
        borderRadius: 8
    },
    addButton: {
        borderRadius: 8,
        backgroundColor: '#3498db',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 30 //Como hacer esto responsive?
    }

})
export default AddProduct
