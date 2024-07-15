import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Settings = ({ navigation }) => {
    // State để lưu trạng thái của tính năng thông báo
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
    // State để lưu trạng thái của chế độ ban đêm
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

    return (
        <ScrollView style={styles.container}>
            {/* Phần đầu trang hiển thị tên người dùng */}
            <View style={styles.header}>
                <Text style={styles.headerText}>User Name</Text>
            </View>

            {/* Phần thiết lập chung */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>General Settings</Text>
                {/* Mục cho phép bật/tắt thông báo */}
                <View style={styles.item}>
                    <Text style={styles.itemText}>Notifications</Text>
                    <Switch
                        value={isNotificationsEnabled}
                        onValueChange={setIsNotificationsEnabled}
                    />
                </View>
                {/* Mục cho phép bật/tắt chế độ ban đêm */}
                <View style={styles.item}>
                    <Text style={styles.itemText}>Dark Mode</Text>
                    <Switch
                        value={isDarkModeEnabled}
                        onValueChange={setIsDarkModeEnabled}
                    />
                </View>
            </View>

            {/* Phần thiết lập tài khoản */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account</Text>
                {/* Mục để thay đổi mật khẩu */}
                <TouchableOpacity style={styles.item} onPress={() => { }}>
                    <Text style={styles.itemText}>Change Password</Text>
                </TouchableOpacity>
                {/* Mục về quyền riêng tư */}
                <TouchableOpacity style={styles.item} onPress={() => { }}>
                    <Text style={styles.itemText}>Privacy</Text>
                </TouchableOpacity>
                {/* Mục đăng xuất */}
                <TouchableOpacity style={styles.item} onPress={() => {
                    navigation.navigate('Login')
                }}>
                    <Text style={styles.itemText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

// CSS cho các phần tử của trang Settings
const styles = StyleSheet.create({
    container: {
        flex: 1, // Để ScrollView có thể căn chỉnh và cuộn nội dung
        backgroundColor: 'black', // Đặt màu nền chính của trang
    },
    header: {
        padding: 20, // Đệm lề cho phần header
        backgroundColor: 'black', // Màu nền cho header
        alignItems: 'center', // Căn giữa các phần tử ngang
        borderBottomWidth: 1, // Đường viền dưới header
        borderBottomColor: 'red', // Màu của đường viền dưới
    },
    headerText: {
        fontSize: 24, // Kích thước chữ tiêu đề
        fontWeight: 'bold', // Chữ in đậm
        color: '#888888', // Màu chữ cho tiêu đề
    },
    section: {
        marginTop: 20, // Khoảng cách từ đỉnh màn hình đến mỗi section
        paddingHorizontal: 20, // Đệm lề cho nội dung trong section

    },
    sectionTitle: {
        fontSize: 18, // Kích thước chữ tiêu đề section
        fontWeight: 'bold', // Chữ in đậm
        marginBottom: 10, // Khoảng cách dưới tiêu đề section
        color: '#888888'
    },
    item: {
        backgroundColor: '#ffffff', // Màu nền của mỗi item
        padding: 15, // Đệm lề bên trong mỗi item
        borderRadius: 5, // Bo góc của mỗi item
        flexDirection: 'row', // Sắp xếp các phần tử theo hàng ngang
        justifyContent: 'space-between', // Căn giữa và cách đều các phần tử
        alignItems: 'center', // Căn giữa các phần tử dọc
        marginBottom: 10, // Khoảng cách giữa các item
        borderWidth: 1, // Độ dày đường viền của mỗi item
        borderColor: '#dddddd', // Màu đường viền của mỗi item
    },
    itemText: {
        fontSize: 16, // Kích thước chữ cho nội dung mỗi item
    },
});

export default Settings; // Xuất thành phần Settings để sử dụng ở các thành phần khác trong ứng dụng
