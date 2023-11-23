import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Button title="ADD" />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text style={styles.cardText}>Producto 1</Text>
          <Text>$432</Text>
          <Button title='DEL' />
        </View>

        <View style={styles.cardProduct}>
          <Text style={styles.cardText}>Producto 2</Text>
          <Text>$432</Text>
          <Button title='DEL' />
        </View>
        <View style={styles.cardProduct}>
          <Text style={styles.cardText}>Producto 3</Text>
          <Text>$432</Text>
          <Button title='DEL' />
        </View>
      </View>
    </View>
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
    alignSelf: "strech",
    justifyContent: "space-around"
  },
  input: {
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 200
  },
  listContainer: {
    padding: 5,
    width: "100%"
  },
  cardProduct: {
    marginTop:20,
    borderWidth: 4,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  cardText: {
  }
});

