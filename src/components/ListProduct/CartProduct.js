import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

const CartProduct = ({ product, onModal }) => {
    return (
        <View style={styles.cardProduct}>

            <View style={styles.productInfo}>
                <Text style={styles.cardText}>{product.title}</Text>
                <Text style={styles.cardPrice}>$ {product.price}</Text>
            </View>
            <TouchableHighlight
                style={styles.deleteButton}
                underlayColor="#DDDDDD"
                onPress={() => onModal(product)}
            >
                <Text style={styles.buttonText}>DEL</Text>
            </TouchableHighlight>
        </View>
    )
}

export default CartProduct

const styles = StyleSheet.create({
    cardProduct: {
        marginTop: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5   ,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginHorizontal: 10,
    },
    productInfo: {
        flex: 1,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardPrice: {
        color: 'green',
    },
    deleteButton: {
        borderRadius: 8,
        backgroundColor: 'red',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
})