import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passs, setPasss] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisiblee, setPasswordVisiblee] = useState(false);
    const [error, setError] = useState(""); // State để lưu trữ thông báo lỗi

    const [userData, setUserData] = useState({
        "tb_use": [
            {"usename": "admin", "password": "1234", "fullname": "mr:admin"},
            {"usename": "adminn", "password": "1234a", "fullname": "mr:a"}
        ]
    });

    const handleRegister = () => {
        // Kiểm tra các trường thông tin có được điền đầy đủ không
        if (name === "" || email === "" || pass === "" || passs === "") {
            setError("Vui lòng nhập đầy đủ thông tin"); // Hiển thị thông báo lỗi nếu thiếu thông tin
            return;
        }

        // Kiểm tra xem tên đăng nhập đã tồn tại hay chưa
        const existingUser = userData.tb_use.find(user => user.usename === email);
        if (existingUser) {
            setError("Tên đăng nhập đã tồn tại"); // Hiển thị thông báo lỗi nếu tên đăng nhập đã tồn tại
            return;
        }

        // Nếu không có lỗi, thêm người dùng mới vào cơ sở dữ liệu
        const newUser = {
            usename: email,
            password: pass,
            fullname: name
        };

        setUserData(prevState => ({
            ...prevState,
            tb_use: [...prevState.tb_use, newUser]
        }));

        // Đặt lại các trường nhập sau khi đăng ký thành công
        setName("");
        setEmail("");
        setPass("");
        setPasss("");
        setError("");

        // Điều hướng đến màn hình đăng nhập sau khi đăng ký thành công
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../img/i.png')} style={styles.logo} />

            <Text style={styles.title}>REGISTER</Text>
            <Text style={styles.subtitle}>Welcome to LamborGhini!!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Name...'
                    placeholderTextColor='#888888'
                    value={name}
                    onChangeText={txt => setName(txt)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email...'
                    placeholderTextColor='#888888'
                    value={email}
                    onChangeText={txt => setEmail(txt)}
                />

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        value={pass}
                        onChangeText={txt => setPass(txt)}
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Image
                            source={passwordVisible ? require('../img/icon_open.png') : require('../img/icon_hide.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type Password"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        value={passs}
                        onChangeText={txt => setPasss(txt)}
                        secureTextEntry={!passwordVisiblee}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setPasswordVisiblee(!passwordVisiblee)}
                    >
                        <Image
                            source={passwordVisiblee ? require('../img/icon_open.png') : require('../img/icon_hide.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    logo: {
        width: 350,
        height: 200,
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 5,
    },
    subtitle: {
        color: '#888888',
        fontSize: 20,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        width: 300,
        height: 40,
        fontSize: 16,
        color: 'white',
        borderRadius: 20,
        paddingLeft: 15,
        marginBottom: 10,
    },
    passwordContainer: {
        width: '100%',
        position: 'relative',
        alignItems: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 15,
        height: 35,
        width: 35,
    },
    icon: {
        width: 20,
        height: 20,
        marginTop:8,
        marginRight:12
    },
    button: {
        width: 250,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});
