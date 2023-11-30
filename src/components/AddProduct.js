import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const AddProduct = ({ newTitle, newPrice, setNewTitle, setNewPrice, addProduct }) => {

    return (
        <View style={styles.inputContainer}>
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
            <Button title="ADD"
                onPress={addProduct}
            />
        </View>
    )
}

const styles = StyleSheet.create({

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

})
export default AddProduct
