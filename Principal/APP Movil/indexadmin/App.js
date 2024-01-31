import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Discapa from "./src/components/Discapacidad"
import Notifi from "./src/components/Notificacion"
import Rut from "./src/components/Rutina"

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.circleButton}>
        <TouchableOpacity 
        style={styles.rightButton}
        onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('./assets/casita.png')}
            style={styles.circleButtonImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.circleButton}>
        <TouchableOpacity
          style={styles.rightButton}
          onPress={() => navigation.navigate('Perfil')}>
          <Image
            source={require('./assets/usuario.png')}
            style={styles.circleButtonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
      <View style={styles.circleContainer}>
        <TouchableOpacity style={styles.buttonWithText}
        onPress={() => navigation.navigate('Discapacidad')}>
          <View style={styles.circle}>
            <Image
              source={require('./assets/ExercisePD.png')}
              style={styles.circleImage}
            />
            </View>
          <Text style={styles.circleText}>Añadir Discapacidad</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWithText}
        onPress={() => navigation.navigate('Rutina')}>
          <View style={styles.circle}>
            <Image
              source={require('./assets/Rutina.png')}
              style={styles.circleImage}
            />
            </View>
          <Text style={styles.circleText}>Añadir Rutina</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWithText}
        onPress={() => navigation.navigate('Notificacion')}>
          <View style={styles.circle}>            
            <Image
              source={require('./assets/Campana.png')}
              style={styles.circleImage}
            />
          </View>
          <Text style={styles.circleText}>Notificaciones</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
const LeftScreen = () => (
  <View style={styles.container}>
  </View>
);
const Perfil = () => (
  <View style={styles.container}>
    <Text>Contenido de la pantalla derecha</Text>
  </View>
);
const Discapacidad = () => (
  <View style={styles.container}>
    <Discapa/>
  </View>
);
const Rutina = () => (
  <View style={styles.container}>
    <Rut/>
  </View>
);
const Notificacion = () => (
  <View style={styles.container}>
    <Notifi/>
  </View>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LeftScreen" 
      component={LeftScreen} 
      options={{ headerShown: false }}
      />
      <Stack.Screen name="Perfil" 
      component={Perfil} />
      <Stack.Screen name="Discapacidad" component={Discapacidad} />
      <Stack.Screen name="Rutina" component={Rutina} />
      <Stack.Screen name="Notificacion" component={Notificacion} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
    backgroundColor: "#189FD9",
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  rightButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#3498db',
  },
  circleButtonImage: {
    width: '100%',
    height: '100%',
  },
  circleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 1,
    margin: 20,
    marginBottom: 60,
  },
  buttonWithText: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3498db',
    overflow: 'hidden',
    marginRight: 10,
  },
  circleImage: {
    width: '100%',
    height: '100%',
  },
  circleText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
