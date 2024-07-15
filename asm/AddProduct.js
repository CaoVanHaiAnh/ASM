import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const AddProduct = (props) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [error, setError] = useState('');

  const addProduct = async () => {
    if (!productName || !price || !imageURL) {
      setError('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    const newProduct = { Name: productName, Price: parseFloat(price), Img: imageURL };
    const apiURL = 'https://666035975425580055b2cb7a.mockapi.io/sanpham_api';

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.status === 201) {
        Alert.alert('Thành công', 'Sản phẩm đã được thêm');
        props.navigation.goBack();
      } else {
        Alert.alert('Lỗi', 'Có lỗi xảy ra. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi', 'Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thêm Sản Phẩm</Text>
      <TextInput
        style={styles.input}
        placeholder='Tên sản phẩm'
        placeholderTextColor={'#88888888'}
        value={productName}
        onChangeText={text => setProductName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Giá'
        keyboardType='numeric'
        placeholderTextColor={'#88888888'}
        value={price}
        onChangeText={text => setPrice(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Link hình ảnh'
        placeholderTextColor={'#88888888'}
        value={imageURL}
        onChangeText={text => setImageURL(text)}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title='Thêm Sản Phẩm' onPress={addProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'white'
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius:10,
    color:'white'
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

export default AddProduct;
