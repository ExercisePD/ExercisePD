import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Input } from 'react-native-elements';

const App = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);

  const handleImagePicker = () => {
    const options = {
      title: 'Seleccionar imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Usuario canceló la selección de la imagen');
      } else if (response.error) {
        console.log('Error: ', response.error);
      } else {
        setImagen(response.uri);
      }
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Input
        label="Nombre"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <Input
        label="Descripción"
        placeholder="Describe algo"
        multiline
        numberOfLines={4}
        value={descripcion}
        onChangeText={(text) => setDescripcion(text)}
      />
      <Button title="Seleccionar imagen" onPress={handleImagePicker} />
      {imagen && <Image source={{ uri: imagen }} style={{ width: 200, height: 200, marginVertical: 10 }} />}
      <Button title="Enviar" onPress={() => console.log('Datos enviados:', { nombre, descripcion, imagen })} />
    </View>
  );
};

export default App;