import { View, Text } from 'react-native'
import * as React from 'react'
import Login from './asm/Login'
import Register from './asm/Register'
import Home from './asm/Home'
import Favourite from './asm/Favourite'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Contact from './asm/Contact'
import Productdetails from './asm/Productdetails'
import Cart from './asm/Cart'
import Welcome from './asm/Welcome'
import Setting from './asm/Setting'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler'
import Appp from './asm/AddProduct'
import AddProduct from './asm/AddProduct'
import ListProduct from './asm/ListProduct'
import EditProduct from './asm/EditProduct'





const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();




const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex' },
      }}
    >
      <Tab.Screen name="Homee" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Favourite" component={Favourite} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Tab.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Setting} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};




const App = () => {
  return (
   
    
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Welcome">



        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register}
          options={{
            headerStyle: { backgroundColor: 'transparent' },//đảm bảo header trong suốt.
            headerTransparent: true,//  Làm cho header trở nên trong suốt.
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitle: '',//ẩn tiêu đề mặc định.
          }}
        />

        <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="Contact" component={Contact} />

        <Stack.Screen name="Productdetails" component={Productdetails}
          options={{
            headerShown: true, //Hiện tiêu đề,thanh điều hướng khi là true
            headerStyle: { backgroundColor: 'black' },//thay đổi màu cảu thanh điều hướng(navigation)
            headerTintColor: 'white',// Màu của text và các icon trên thanh điều hướng
            headerTitleAlign: 'center',//Căn thanh điều hướng ra giữa màn hình
            // headerTitle:'bold'// Định dạng font chữ của tiêu đề theo mong muốn của mình
          }} />

        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Setting" component={Setting} />

      </Stack.Navigator>


    </NavigationContainer>



  )
}




export default App