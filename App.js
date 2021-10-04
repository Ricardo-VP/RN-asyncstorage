import React from 'react';
import {
  TextInput,
  Button,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  return (
    <>
      <View style={styles.contenedor}>
        <TextInput placeholder="Escribe tu nombre" style={styles.input}/>
        <Button title="Guardar" color="#333"/>
        <TouchableHighlight style={styles.btnEliminar}>
          <Text style={styles.txtEliminar}>Eliminar Nombre &times;</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    borderColor: '#666',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
    marginBottom: 20,
  },
  btnEliminar : {
    backgroundColor: 'red',
    marginTop: 20,
    padding: 10,
  },
  txtEliminar : {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: 300,
  }
});

export default App;
