import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Inicio from './pantallas/Inicio';
import Login from './pantallas/Login';
import GestionCategoria from './pantallas/GestionCategoria';
import GestionProducto from './pantallas/GestionProducto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Inicio' component={Inicio} />
        <Stack.Screen name='Categorias' component={GestionCategoria} />
        <Stack.Screen name='Productos' component={GestionProducto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

