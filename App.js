import React, {useState} from 'react';
import {
  TextInput,
  Button,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  const [inputTexto, setInputTexto] = useState(''); // Estado inicial

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', inputTexto); // Guardar datos
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.contenedor}>
        <TextInput
          placeholder="Escribe tu nombre"
          style={styles.input}
          onChangeText={texto => setInputTexto(texto)}
        />
        <Button title="Guardar" color="#333" onPress={() => guardarDatos()} />
        <TouchableHighlight style={styles.btnEliminar}>
          <Text style={styles.txtEliminar}>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  btnEliminar: {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10,
  },
  txtEliminar: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  },
});

export default App;
