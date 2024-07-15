import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListProduct from './ListProduct';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import PaymentScreen from './PaymentScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ListProduct">
        <Stack.Screen name="ListProduct" component={ListProduct} options={{headerShown:false}} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="EditProduct" component={EditProduct} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
