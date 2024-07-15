import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Favourite = ({ navigation }) => {
  return (
    <SafeAreaView style={st.khung}>



      <Text style={st.nd}>Favourites</Text>





      <ScrollView>
        <View style={st.box}>
          <Image source={require('../img/lam4.png')}
            style={st.anh} />
          <Text style={st.ndd}>Lamborghini Aventador</Text>
          <Text style={st.nddd}>Lamborghini Aventador là một chiếc xe thể thao động cơ đặt ở giữa được sản xuất bởi hãng xe Ý Lamborghini.</Text>

          <View style={st.t}>
            <Image source={require('../img/sao.png')}
              style={st.anh1} />

            <Text style={st.tt}>4/5 | Đã bán 10,8k</Text>
          </View>

          <Image source={require('../img/Tym.png')}
            style={st.anh2} />

        </View>

        <View style={st.box}>
          <Image source={require('../img/lam2.png')}
            style={st.anh} />
          <Text style={st.ndd}>Lamborghini Revuelto</Text>
          <Text style={st.nddd}>The Lamborghini Revuelto is a mid-engine plug-in hybrid sports car produced by the Italian automobile manufacturer Lamborghini. It was officially unveiled on March 29, 2023 as a successor to the Aventador.</Text>

          <View style={st.t}>
            <Image source={require('../img/sao.png')}
              style={st.anh1} />

            <Text style={st.tt}>4/5 | Đã bán 10,8k</Text>
          </View>

          <Image source={require('../img/Tym.png')}
            style={st.anh2} />

        </View>

        <View style={st.box}>
          <Image source={require('../img/lam6.png')}
            style={st.anh} />
          <Text style={st.ndd}>Lamborghini Urus</Text>
          <Text style={st.nddd}>Lamborghini Urus là một chiếc xe thể thao động cơ đặt ở giữa được sản xuất bởi hãng xe Ý Lamborghini.</Text>

          <View style={st.t}>
            <Image source={require('../img/sao.png')}
              style={st.anh1} />

            <Text style={st.tt}>4/5 | Đã bán 10,8k</Text>
          </View>

          <Image source={require('../img/Tym.png')}
            style={st.anh2} />

        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Favourite

const st = StyleSheet.create({

  icon5: {
    width: 30, height: 30,
    borderRadius: 151,
    marginLeft: 30
  },

  icon: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    height: 1, backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'

  },
  icon1: {
    width: 30, height: 30,
    borderRadius: 151
  },
  icon2: {
    width: 30, height: 30,
    borderRadius: 151,
    marginLeft: 30
  },
  icon3: {
    width: 30, height: 30,
    borderRadius: 151,
    marginLeft: 30
  },
  icon4: {
    width: 30, height: 30,
    borderRadius: 151,
    marginLeft: 30
  },
  t: {
    flexDirection: 'row',
  },
  tt: {
    color: 'white',
    fontSize: 8,
    marginTop: 10,
    marginLeft: 5

  },
  anh2: {
    width: 25, height: 25,
    borderRadius: 5,
    position: 'absolute',
    left: 250,
    top: 15

  },
  anh1: {
    width: 50, height: 35,
    marginLeft: 15,
    borderRadius: 40
  },
  ndd: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5
  },

  nddd: {
    color: '#888888',
    fontSize: 10,
    marginLeft: 10
  },
  khung: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10
  },

  nd: { color: 'white', fontSize: 20, textAlign: 'center' },



  anh: {
    width: 250, height: 150,
    alignSelf: 'center',
    borderRadius: 34,
    marginTop: 10
  },
  box: {
    borderWidth: 1,
    height: 250,
    marginTop: 20,
    borderRadius: 34

  }
})