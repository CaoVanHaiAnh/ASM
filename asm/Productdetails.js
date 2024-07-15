import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Productdetails = ({ navigation }) => {
  return (
    <SafeAreaView style={st.khung}>

      <View style={st.con}>
        <Image source={require('../img/lam4.png')} />
        <Text style={st.nd1}>Lamborghini Aventador</Text>
        <Text style={st.nd2}>Lamborghini Aventador là một chiếc xe thể thao động cơ đặt ở giữa được sản xuất bởi hãng xe Ý Lamborghini.</Text>
        <View style={st.con1}>
          <Text style={st.nd3}>Phiên bản tiền nhiệm: </Text>
          <Text style={st.nd4}>Lamborghini Murieslasgo</Text>
        </View>

        <View style={st.con1}>
          <Text style={st.nd3}>Phân loại: </Text>
          <Text style={st.nd4}>Xe thể thao (s)</Text>
        </View>

        <View style={st.con1}>
          <Text style={st.nd3}>Thiết kế: </Text>
          <Text style={st.nd4}>Động cơ đặt giữa, dẫn động 4 bánh</Text>
        </View>

        <View style={st.con1}>
          <Text style={st.nd3}>Động cơ: </Text>
          <Text style={st.nd4}>6.5 L L539 V12</Text>
        </View>

        <View style={st.con1}>
          <Text style={st.nd3}>Truyền động: </Text>
          <Text style={st.nd4}>Hộp số bán tự động 7 cấp ISR</Text>
        </View>

        <View style={st.con1}>
          <Text style={st.nd3}>Nhà sản xuất: </Text>
          <Text style={st.nd4}>Lamborghini</Text>
        </View>


        <View style={st.con1}>
          <Text style={st.nd3}>Sản xuất ngày: </Text>
          <Text style={st.nd4}>Tháng 2 năm 2011–27 tháng 9 năm 2022</Text>
        </View>



        <View style={st.con1}>
          <Text style={st.nd3}>Kiểu xe: </Text>
          <Text style={st.nd4}>2 cửa coupes, 2 cửa roadster</Text>
        </View>



        <View style={st.con1}>
          <Text style={st.nd3}>Lắp ráp: </Text>
          <Text style={st.nd4}>Sant, Ý</Text>
        </View>

        <View style={st.con1}>
          <Text style={st.nd3}>Nhà thiết kế: </Text>
          <Text style={st.nd4}>Filippo Perini</Text>
        </View>

        <View style={st.con1}>
          <Text style={st.nd3}>Chiều dài cơ sở: </Text>
          <Text style={st.nd4}>2700 mm</Text>
        </View>

        <View style={st.con1}>
          <Text style={st.nd3}>Chiều cao: </Text>
          <Text style={st.nd4}>1136 mm</Text>
        </View>

        <View style={st.con1}>
          <Text style={st.nd3}>Chiều rộng: </Text>
          <Text style={st.nd4}>2030 mm (w/mirrors: 2265 mm)</Text>
        </View>
        <View style={st.con1}>
          <Text style={st.nd3}>Chiều dài: </Text>
          <Text style={st.nd4}>4780 mm</Text>
        </View>

      </View>

    </SafeAreaView>
  )
}

export default Productdetails

const st = StyleSheet.create({
  con1: { flexDirection: 'row', margin: 3 },
  nd3: {
    color: 'red',
    fontSize: 11
  },
  nd4: {
    color: '#888888',
    fontSize: 10
  },
  nd2: {
    color: 'white',
    fontSize: 12,
    padding: 6
  },
  nd1: {
    color: 'white',
    fontSize: 20,
    textShadowColor: 'red',//Màu đổ bóng
    textShadowOffset: { width: 4, height: 3 },//độ lệch của đổ bóng
    textShadowRadius: 3//bán kính của đổ bóng
  },
  con: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  khung: { backgroundColor: 'black', flex: 1 },

})