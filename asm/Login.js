import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

// Dữ liệu người dùng giả lập
const userData = {
    "tb_use": [
        { "usename": "admin", "password": "1234", "fullname": "mr:admin" },
        { "usename": "adminn", "password": "1234a", "fullname": "mr:a" }
    ],
};

const Login = ({ navigation }) => {
    // State để lưu trữ giá trị email và password người dùng nhập
    const [gmai, setgmail] = useState("");
    const [pass, setpass] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false); // State để ẩn/hiện mật khẩu
    const [error, setError] = useState(""); // State để lưu trữ thông báo lỗi

    // Hàm xử lý đăng nhập
    const handleLogin = () => {
        // Kiểm tra xem người dùng đã nhập tên đăng nhập và mật khẩu chưa
        if (gmai === "" || pass === "") {
            setError("Chưa nhập tài khoản hoặc mật khẩu");
            return;
        }

        // Tìm kiếm người dùng trong dữ liệu giả lập
        const user = userData.tb_use.find(user => user.usename === gmai && user.password === pass);
        if (user) {
            // Nếu tìm thấy, điều hướng đến màn hình Home và xóa thông báo lỗi
            setError("");// Xóa thông báo lỗi

            navigation.navigate('Home');// Điều hướng đến màn hình Home
            console.log("Đăng nhập thành công");//thông báo khi đăng nhập thành công

            // Làm mới các trường nhập
            setgmail("");
            setpass("");

        } else {
            // Nếu không tìm thấy, hiển thị thông báo lỗi
            setError("Tên đăng nhập hoặc mật khẩu không hợp lệ");
        }
    };

    return (
        <View style={st.khung}>
            <Image source={require('../img/i.png')}
                style={st.amh1}
            />
            <Text style={st.tieude}>LOGIN</Text>
            <Text style={st.c}>Welcome to LamborGhini!!</Text>

            <View style={st.khung1}>
                <TextInput
                    style={st.g}
                    placeholder='Nhập Gmail...'
                    onChangeText={txt => setgmail(txt)}
                    placeholderTextColor='#888888'
                    value={gmai}
                />

                <View style={st.passwordContainer}>
                    <TextInput
                        style={st.input}
                        onChangeText={setpass}
                        value={pass}
                        placeholder="Mật khẩu"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        secureTextEntry={!passwordVisible} // Ẩn hoặc hiển thị mật khẩu

                    />
                    <TouchableOpacity
                        style={st.eyeIcon}
                        onPress={() => setPasswordVisible(!passwordVisible)} // Đổi trạng thái hiển thị mật khẩu
                    >
                        <Image
                            source={
                                passwordVisible
                                    ? require('../img/icon_open.png') // Đường dẫn đến biểu tượng mắt mở
                                    : require('../img/icon_hide.png') // Đường dẫn đến biểu tượng mắt đóng
                            }
                            style={st.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {error ? <Text style={st.errorText}>{error}</Text> : null}

            <View style={st.ttt}>
                <TouchableOpacity style={st.button}
                    onPress={handleLogin}
                >
                    <Text style={st.t}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={st.bb}>
                    <Text style={st.tt}>Sign in with Google</Text>
                </TouchableOpacity>

                <Image source={require('../img/image.png')}
                    style={st.anh}
                />
            </View>

            <View style={st.f}>
                <Text style={st.ff}>Don't have account? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                    <Text style={st.fff}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={st.a}>
                <Text style={st.aa}>Forgot password? </Text>
                <Text style={st.aaa}>Reset</Text>
            </View>
        </View>
    );
};

export default Login;

const st = StyleSheet.create({
    dd: {
        width: 20,
        height: 20,
        position: 'absolute',
        left: 250,
        top: 80,
        borderRadius: 40,
    },
    a: {
        flexDirection: 'row',
        marginTop: 20,
    },
    aa: {
        color: 'white',
        fontSize: 10,
    },
    aaa: {
        color: 'red',
        fontSize: 10,
    },
    f: {
        flexDirection: 'row',
        marginTop: 20,
    },
    ff: {
        color: 'white',
        fontSize: 10,
    },
    fff: {
        color: 'red',
        fontSize: 10,
    },
    amh1: {
        width: 360,
        height: 200,
    },
    anh: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 39,
        left: 7,
        borderRadius: 70,
    },
    ttt: {
        padding: 1,
    },
    bb: {
        backgroundColor: 'white',
        borderWidth: 1,
        width: 200,
        height: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    tt: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 12,
    },
    t: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 12,
    },
    button: {
        backgroundColor: 'red',
        borderWidth: 1,
        width: 200,
        height: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    khung: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    tieude: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    c: {
        fontSize: 20,
        fontStyle: 'italic', // chữ nghiêng
        fontWeight: 'bold', // chữ in
        color: '#888888',
    },
    g: {
        borderWidth: 1,
        borderRadius: 20,
        width: 250,
        height: 34,
        fontSize: 10,
        borderColor: 'white',
        margin: 3,
        padding: 10,
        color: 'white',
    },
    khung1: {
        padding: 30,
    },
    b: {
        borderRadius: 200,
    },
    passwordContainer: {
        width: '100%',
        marginBottom: 15,
        position: 'relative', // Đặt `position: relative` để chứa các phần tử bên trong có `absolute positioning`
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        width: 250,
        height: 34,
        fontSize: 10,
        borderColor: 'white',
        margin: 3,
        padding: 10,
        color: 'white',
    },
    eyeIcon: {
        position: 'absolute', // Đặt biểu tượng mắt bên phải của `TextInput`
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'right',
        bottom: 9,
        right: 5,
        height: 35,
        width: 35,
    },
    icon: {
        width: 20,
        height: 20,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});
