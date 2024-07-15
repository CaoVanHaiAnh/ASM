import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const link_api = "https://666035975425580055b2cb7a.mockapi.io/sanpham_api"




const Home = ({ navigation }) => {
    return (
        <View style={st.khung}>
            <View style={st.f}>
                <TouchableOpacity>
                    <Image source={require('../img/menu.png')}
                        style={st.anh3} />
                </TouchableOpacity>

                <Text style={st.a}>Find the best car for you</Text>

                <TouchableOpacity>
                    <Image source={require('../img/hanh.png')}
                        style={st.anh4} />
                </TouchableOpacity>

            </View>

            <View style={st.khung1}>
                <Image source={require('../img/timkiem.png')}
                    style={st.anh}
                />
                <TextInput style={st.timkiem}
                    placeholder='This have car'
                    placeholderTextColor={'#888888'}
                />
            </View>



            <SafeAreaView>
                <ScrollView
                    style={st.ab}
                    horizontal={true}>

                    <TouchableOpacity style={st.button}>
                        <Text style={st.b1}>Home pape</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={st.button}>
                        <Text style={st.b1}>Introduce</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={st.button}>
                        <Text style={st.b1}>Address</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={st.button}>
                        <Text style={st.b1}>Contact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={st.button}>
                        <Text style={st.b1}>Favourite</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={st.button}>
                        <Text style={st.b1}>Evaluate</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>


            <ScrollView>
                <Text style={st.car}>New car</Text>
                <ScrollView
                    style={st.s}
                    horizontal={true}>

                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lambor.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/Lam.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lam1.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lam2.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>




                <Text style={st.car}>Gasoline car</Text>
                <ScrollView
                    style={st.s}
                    horizontal={true}>
                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lam3.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lam4.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lam5.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lam6.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>



                <Text style={st.car}>Electric car</Text>
                <ScrollView
                    style={st.s}
                    horizontal={true}>
                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lam7.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lam5.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lam2.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={st.a11}>
                        <View>
                            <Image source={require('../img/lam1.png')}
                                style={st.anhh} />
                            <Text style={st.b}>LamborGhini</Text>
                            <Text style={st.b11}>LamborGhini Reviews</Text>
                            <Text style={st.b12}>$12.000.000.000 USD</Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Productdetails')
                            }}>
                                <Text style={st.cong}>^.^</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>

            </ScrollView>







        </View>
    )
}




export default Home

const st = StyleSheet.create({

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
    icon5: {
        width: 30, height: 30,
        borderRadius: 151,
        marginLeft: 30
    },
    car: {
        color: 'white',
        fontSize: 16,
        padding: 10,
        fontStyle: 'italic'
    },
    cong: {
        borderWidth: 1,
        width: 20,
        color: '#5B7B9B',
        textAlign: 'center',
        marginLeft: 5,
        backgroundColor: '#B6D8FF',
        borderColor: '#3780FF',
        borderRadius: 5,
        fontWeight: 'bold'
    },
    s: {
        padding: 5,
        maxHeight: '100%'//để ScrollView chỉ chiếm không gian cần thiết.
    },
    f: { flexDirection: 'row' },
    anh3: {
        width: 20, height: 20,
        position: 'absolute', end: 30
    },
    anh4: { width: 20, height: 20, borderRadius: 50, position: 'absolute', left: 30, top: 4 },
    b: {
        fontSize: 12,
        marginLeft: 5,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor: 'red', // Màu đổ bóng
        textShadowOffset: { width: 2, height: 2 },// Độ lệch của đổ bóng
        textShadowRadius: 3 // Bán kính của đổ bóng
    },
    b11: {
        fontSize: 12,
        color: 'white',
        marginLeft: 5
    },
    b12: {
        fontSize: 12,
        color: 'red',
        marginLeft: 5
    },

    a11: {
        borderWidth: 1,
        borderColor: '#FF7738',
        width: 140,
        height: 170,
        borderRadius: 12,
        backgroundColor: '#586',
        margin: 5


    },
    anhh: {
        width: 130,
        height: 90,
        borderRadius: 30,
        marginLeft: 4,
        marginTop: 5
    },
    ab: {
        maxHeight: 38,//để ScrollView chỉ chiếm không gian cần thiết.
    },
    anh12: {
        width: 160, height: 100,
        borderWidth: 1, borderColor: 'white',
        borderRadius: 100
    },
    anh1: {
        width: 100,
        height: 40
    },
    b1: {
        color: 'white', padding: 10,
        fontSize: 10
    },
    khung1: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        height: 34,
        margin: 10,
        width: 200,
        borderRadius: 20,
    },
    anh: {
        width: 15, height: 15,
        marginTop: 7, marginLeft: 10,
        borderRadius: 20

    },
    timkiem: {
        fontSize: 10,
        color: 'white'
    },
    khung: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    a: {
        fontSize: 20,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',


    },
})