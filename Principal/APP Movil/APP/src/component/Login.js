import React, { useState } from "react";
import { Text, Button, StyleSheet, View, TextInput, ScrollView, Pressable, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const Login = () => {
  const [Documento, setDocumento] = useState("");
  const [Clave, setClave] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const handleLogin = () => {
    const ClaveCorrecta = '123456';
    const DocumentoCorrecto = '1234567'

    if (Documento === DocumentoCorrecto && Clave === ClaveCorrecta) {
      navigation.navigate('Menu');
    } else {
      Alert.alert(
        'Error',
        'Los Datos son incorrectos o existen campos sin llenar'
      )
    }
  }

  const navigateToRegistro = () => {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.contenido}>
      <ScrollView>
        <Text style={styles.titulo}>
          Nuevo {""}
          <Text style={styles.tituloBold}>Usuario</Text>
        </Text>

        <View style={styles.campo}>
          <Text style={styles.label}>
            Documento del Usuario
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Documento"
            placeholderTextColor={"#666"}
            value={Documento}
            onChangeText={setDocumento}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Clave</Text>
          <TextInput
            style={styles.input}
            placeholder="Clave"
            placeholderTextColor={"#666"}
            value={Clave}
            onChangeText={setClave}
            secureTextEntry={!showPassword}
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={styles.togglePasswordButton}>
            <Text style={styles.togglePasswordButtonText}>
              {showPassword ? "Ocultar" : "Mostrar"}
            </Text>
          </Pressable>
        </View>

        <Pressable style={styles.btn2} onPress={handleLogin}>
          <Text style={styles.btnTexto2}>Iniciar Sesión</Text>
        </Pressable>
        
        <Pressable style={styles.btnRegistro} onPress={navigateToRegistro}>
          <Text style={styles.btnTextoRegistro}>Registrarse</Text>
        </Pressable>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#189FD9",
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#fff",
  },
  tituloBold: {
    fontWeight: "900",
  },
  campo: {
    marginTop: 20,
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    color: "#000", // Ajusta el color del texto
  },
  btn2: {
    backgroundColor: '#0024F0',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  btnTexto2: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '900',
    fontSize: 16,
  },
  togglePasswordButton: {
    position: "absolute",
    top: 15,
    right: 10,
  },
  togglePasswordButtonText: {
    color: "#FFF",
  },
  btnRegistro: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  btnTextoRegistro: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '900',
    fontSize: 16,
  },
});

export default Login;