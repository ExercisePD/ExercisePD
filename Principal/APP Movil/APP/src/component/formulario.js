import React, { useState } from "react";
import { Text, Button, StyleSheet, View, TextInput, ScrollView, Pressable, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Formulario = () => {
  const [Usuario, setUsuario] = useState("");
  const [Clave, setClave] = useState("");
  const [Clave2, setClave2] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const navigation = useNavigation();

  const handleCita = () => {
    if ([Usuario, Clave, Email, Telefono, Clave2].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
      )
      return
    }

    if (Clave !== Clave2) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    const nuevoPaciente = {
      id: Date.now(),
      Usuario,
      Clave,
      Email,
      Telefono,
      Clave2
    }
    setPacientes([...pacientes, nuevoPaciente])
    navigation.navigate('Login');
  }

  const handleCancel = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.contenido}>
      <ScrollView>
        <Text style={styles.titulo}>
          Nuevo {""}
          <Text style={styles.tituloBold}>Usuario</Text>
        </Text>

        <Pressable
          style={styles.btn}
          onPress={handleCancel}
        >
          <Text style={styles.btnTexto}>X Cancelar</Text>
        </Pressable>

       
        <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre del Usuario
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Usuario"
                placeholderTextColor={"#666"}
                value={Usuario}
                onChangeText={setUsuario}
              />
            
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>
              Email usuario
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"#666"}
                value={Email}
                onChangeText={setEmail}
              />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>
              Documento usuario
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Documento"
                placeholderTextColor={"#666"}
                value={Email}
              />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Telefono
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Telefono"
                placeholderTextColor={"#666"}
                keyboardType="number-pad"
                value={Telefono}
                onChangeText={setTelefono}
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
              secureTextEntry={!showPassword1}
            />
            <Pressable
              onPress={() => setShowPassword1(!showPassword1)}
              style={styles.togglePasswordButton}
            >
              <Text style={styles.togglePasswordButtonText}>
                {showPassword1 ? "Ocultar" : "Mostrar"}
              </Text>
            </Pressable>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Repetir Clave</Text>
            <TextInput
              style={styles.input}
              placeholder="Repetir Clave"
              placeholderTextColor={"#666"}
              value={Clave2}
              onChangeText={setClave2}
              secureTextEntry={!showPassword2}
            />
            <Pressable
              onPress={() => setShowPassword2(!showPassword2)}
              style={styles.togglePasswordButton}
            >
              <Text style={styles.togglePasswordButtonText}>
                {showPassword2 ? "Ocultar" : "Mostrar"}
              </Text>
            </Pressable>
          </View>

        <Pressable style={styles.btn2} onPress={handleCita}>
          <Text style={styles.btnTexto2}>Registrarse</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#189FD9",
    flex: 1,
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
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  btn: {
    marginVertical: 30,
    backgroundColor: "#0024F0",
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnTexto: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
  btn2: {
    marginVertical: 50,
    backgroundColor: '#0024F0',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
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
});

export default Formulario;