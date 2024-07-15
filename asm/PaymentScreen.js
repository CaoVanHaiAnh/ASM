import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const PaymentScreen = ({ route, navigation }) => {
    const { product, onProductBought } = route.params;
    const [paymentMethod, setPaymentMethod] = useState(null);

    const handlePayment = () => {
        if (!paymentMethod) {
            Alert.alert('Lỗi', 'Vui lòng chọn phương thức thanh toán');
            return;
        }

        // Logic xử lý thanh toán
        Alert.alert('Thanh toán thành công', `Sản phẩm đã được thanh toán bằng ${paymentMethod}`, [
            {
                text: 'OK',
                onPress: () => {
                    onProductBought(product.id);
                    navigation.goBack();
                },
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thanh Toán</Text>
            <Text style={styles.productName}>Sản phẩm: {product.Name}</Text>
            <Text style={styles.productPrice}>Giá: {product.Price}</Text>

            <View style={styles.paymentMethods}>
                <TouchableOpacity
                    style={[styles.paymentButton, paymentMethod === 'Credit Card' && styles.selectedButton]}
                    onPress={() => setPaymentMethod('Credit Card')}
                >
                    <Text style={styles.paymentButtonText}>Thẻ tín dụng</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.paymentButton1, paymentMethod === 'Cash' && styles.selectedButton]}
                    onPress={() => setPaymentMethod('Cash')}
                >
                    <Text style={styles.paymentButtonText}>Tiền mặt</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.paymentButton2, paymentMethod === 'Online' && styles.selectedButton]}
                    onPress={() => setPaymentMethod('Online')}
                >
                    <Text style={styles.paymentButtonText}>Thanh toán online</Text>
                </TouchableOpacity>
            </View>

            <Button title="Thanh Toán" onPress={handlePayment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    productName: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white'
    },
    productPrice: {
        fontSize: 18,
        marginBottom: 20,
        color: 'white'
    },
    paymentMethods: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        backgroundColor: 'blue',
        borderRadius: 15
    },
    paymentButton: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 15,
    },
    paymentButton1: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 15,
        marginLeft: 6
    },
    paymentButton2: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 15,
        marginLeft: 7
    },

    selectedButton: {
        backgroundColor: '#8b0000',
    },
    paymentButtonText: {
        color: 'red',


    },
});

export default PaymentScreen;
