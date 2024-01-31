import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Modal, } from "react-native";

import Formulario from "./src/component/formulario";
import Login from "./src/component/Login"

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [pacientes, setPacientes]=useState([])
  console.log(modalVisible);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Bienvenidos a <Text style={styles.tituloBold}>Exercise PD</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible2(!modalVisible2)}
        style={styles.btn}
      >
      <Text style={styles.btnText}>Iniciar Sesion</Text>
      </Pressable>
      <Login
        modalVisible={modalVisible2}
        setModalVisible={setModalVisible2}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btn}
      >
      <Text style={styles.btnText}>Registrarse</Text>
      </Pressable>
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#189FD9",
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    textTransform: "uppercase",
    
    color: "#000000",
    textAlign: "center",
  },
  tituloBold: {
    
    color: "#000000",
  },
  btn: {
    backgroundColor: "#0024F0",
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    
    textTransform: "uppercase",
  },
});