import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Welcome = ({ navigation }) => {
  useEffect(() => {
    const Timeout = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
    return () => clearTimeout(Timeout);
  }, []);

  return (
    <View style={st.khung}>
      <Image source={require('../img/logo.png')}
        style={st.anh} />
      <Text style={st.a}>WELCOME</Text>
      <Text style={st.b}>to Lamborghini</Text>
    </View>
  );
};

export default Welcome

const st = StyleSheet.create({
  khung: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  anh: {
    width: 300,
    height: 200,
    borderRadius: 30
  },
  a: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  b: {
    color: 'white',
    fontSize: 25
  }
})