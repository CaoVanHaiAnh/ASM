import React, { useState, useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

const EditProduct = (props) => {
  const product = props.route.params?.product;

  const [productName, setProductName] = useState(product ? product.Name : '');
  const [price, setPrice] = useState(product ? product.Price.toString() : '');
  const [imageURL, setImageURL] = useState(product ? product.Img : '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!product) {
      Alert.alert('Lỗi', 'Sản phẩm không hợp lệ');
      props.navigation.goBack();
    }
  }, [product, props.navigation]);

  const saveProduct = async () => {
    if (!productName || !price || !imageURL) {
      setError('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    const updatedProduct = { Name: productName, Price: parseFloat(price), Img: imageURL };
    const apiURL = `https://666035975425580055b2cb7a.mockapi.io/sanpham_api/${product.id}`;

    try {
      const response = await fetch(apiURL, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      if (response.status === 200) {
        Alert.alert('Thành công', 'Sản phẩm đã được cập nhật');
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
      <Text style={styles.title}>Sửa Sản Phẩm</Text>
      <Image
        source={{ uri: imageURL }}  // Hiển thị hình ảnh từ URL
        style={styles.productImage}  // Áp dụng kiểu dáng cho hình ảnh sản phẩm
      />
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
      <Button title='Lưu Thay Đổi' onPress={saveProduct} />
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
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default EditProduct;
