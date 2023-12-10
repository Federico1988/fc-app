import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const CategoryItem = ({ category }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{category}</Text>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        marginHorizontal: "10%",
        backgroundColor: colors.green2,
        margin: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        /*Andoird*/
        elevation: 10,
        /*IOS*/
        shadowColor: "black",
        shadowOffset: { width: 3, height: 5 },
        shadowRadius: 1,
        shadowOpacity: 1
    }
})