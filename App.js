import React, {useState, useEffect} from 'react';
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
  const [nombreStorage, setNombreStorage] = useState(''); // Estado inicial

  useEffect(() => {
    obtenerDatosStorage();
  }, [])

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', inputTexto); // Guardar datos
      setNombreStorage(inputTexto); // Actualizar el estado
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerDatosStorage = async () => {
    try {
      const nombre = await AsyncStorage.getItem('nombre'); // Obtener datos
      if (nombre !== null) {
        setNombreStorage(nombre);
        // console.log(nombre);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Text>Hola: {nombreStorage}</Text>
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
