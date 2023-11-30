import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'
import CartProduct from './CartProduct'

const ListProduct = ({ products, onModal }) => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <CartProduct
                        product={item}
                        onModal={onModal}
                    />}

            />
        </View>
    )
}

export default ListProduct

const styles = StyleSheet.create({

    listContainer: {
        padding: 5,
        width: "100%"
    },
})