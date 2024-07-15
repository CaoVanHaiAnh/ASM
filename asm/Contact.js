// Nhập các thư viện cần thiết từ React và React Native
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

// Thành phần màn hình liên hệ
const Contact = () => {
  // Khai báo các state để lưu trữ dữ liệu từ các trường nhập liệu
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Hàm xử lý khi nhấn nút gửi
  const handleSubmit = () => {
    // Hiển thị thông báo với các thông tin đã nhập
    Alert.alert('Contact Form Submitted', `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
    // Xóa các trường nhập liệu sau khi gửi
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    // Sử dụng ScrollView để có thể cuộn nội dung nếu vượt quá kích thước màn hình
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tiêu đề của trang */}
      <Text style={styles.title}>Contact Us</Text>

      {/* Trường nhập liệu cho tên */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      {/* Trường nhập liệu cho email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Trường nhập liệu cho số điện thoại */}
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Trường nhập liệu cho tin nhắn */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline={true}
        numberOfLines={4}
      />

      {/* Nút gửi */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Định nghĩa các kiểu dáng (styles) cho thành phần
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Đảm bảo ScrollView bao phủ toàn bộ không gian có thể cuộn
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    padding: 20, // Thêm khoảng đệm xung quanh nội dung
    backgroundColor: 'black', // Đặt màu nền xám nhạt
  },
  title: {
    fontSize: 24, // Kích thước chữ lớn
    fontWeight: 'bold', // In đậm
    marginBottom: 20, // Thêm khoảng cách phía dưới
    textAlign: 'center', // Căn giữa tiêu đề
    color: '#888888'
  },
  input: {
    borderWidth: 1, // Đặt độ rộng viền là 1
    borderColor: '#ddd', // Màu viền xám nhạt
    padding: 10, // Thêm khoảng đệm bên trong trường nhập liệu
    marginBottom: 10, // Thêm khoảng cách phía dưới
    borderRadius: 5, // Bo tròn các góc
    backgroundColor: '#fff', // Màu nền trắng
  },
  textArea: {
    height: 100, // Chiều cao lớn hơn cho trường nhập liệu nhiều dòng
  },
  button: {
    backgroundColor: '#007BFF', // Màu nền xanh dương
    padding: 15, // Thêm khoảng đệm bên trong nút
    borderRadius: 5, // Bo tròn các góc
    alignItems: 'center', // Căn giữa nội dung bên trong nút
  },
  buttonText: {
    color: '#fff', // Màu chữ trắng
    fontWeight: 'bold', // In đậm
  },
});

export default Contact; // Xuất thành phần ContactScreen để sử dụng ở nơi khác
