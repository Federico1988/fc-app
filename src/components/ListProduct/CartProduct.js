import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CartProduct = ({ product, onModal }) => {
    return (
        <View style={styles.cardProduct}>
            <Text style={styles.cardText}>{product.title}</Text>
            <Text>$ {product.price}</Text>
            <Button title='DEL' onPress={() => onModal(item)} />
        </View>
    )
}

export default CartProduct

const styles = StyleSheet.create({


    cardProduct: {
        marginTop: 20,
        borderWidth: 4,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    cardText: {
    }
})