import {
  ActivityIndicator, Button, StyleSheet, Text, View, Image, ScrollView, RefreshControl, TouchableOpacity, Alert,
  TextInput
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';

const ListProduct = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dssp, setDssp] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getListPro = async () => {
    let url_api = 'https://666035975425580055b2cb7a.mockapi.io/sanpham_api';

    try {
      const response = await fetch(url_api);
      const json = await response.json();
      setDssp(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      getListPro();
    });
    return unsubscribe;
  }, [props.navigation]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getListPro();
  }, []);

  const deleteProduct = async (id) => {
    let url_api = `https://666035975425580055b2cb7a.mockapi.io/sanpham_api/${id}`;

    try {
      const response = await fetch(url_api, {
        method: 'DELETE',
      });

      if (response.ok) {
        getListPro();
        Alert.alert('Thành công', 'Sản phẩm đã được xóa thành công');
      } else {
        Alert.alert('Lỗi', 'Có lỗi xảy ra khi xóa sản phẩm');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi xóa sản phẩm');
    }
  };

  const buyProduct = (item) => {
    props.navigation.navigate('Payment', { product: item, onProductBought: (id) => deleteProduct(id) });
  };

  const filteredProducts = dssp.filter(item =>
    item.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={st.KhungDSSP}>
      
      <TextInput
        style={st.searchInput}
        placeholder="Tìm kiếm sản phẩm..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />


      <TouchableOpacity

        onPress={() => {
          props.navigation.navigate('AddProduct');
        }}
      >
        <Image source={require('../img/giohang.png')}
          style={{ width: 20, height: 20, borderRadius: 4 }}
        />
      </TouchableOpacity>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView
          contentContainerStyle={st.productContainer}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <View key={item.id} style={st.itemPro}>
                <Image
                  source={{ uri: item.Img }}
                  style={st.productImage}
                />
                <Text style={st.productName}>Sản phẩm: {item.Name}</Text>
                <Text style={st.productPrice}>Giá: {item.Price}</Text>
                <View style={st.buttonContainer}>
                  <TouchableOpacity
                    style={st.editButton}
                    onPress={() => {
                      props.navigation.navigate('EditProduct', { product: item });
                    }}
                  >
                    <Image source={require('../img/edit.png')}
                    style={{width:18,height:15,borderRadius:2,marginLeft:8,marginTop:6}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={st.deleteButton}
                    onPress={() => deleteProduct(item.id)}
                  >
                    <Image source={require('../img/delete.png')}
                    style={{width:18,height:15,borderRadius:2,marginLeft:8,marginTop:6}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={st.buyButton}
                    onPress={() => buyProduct(item)}
                  >
                    <Image source={require('../img/mua.png')}
                    style={{width:18,height:15,borderRadius:2,marginLeft:8,marginTop:6}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text style={st.noResults}>Không tìm thấy sản phẩm nào</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default ListProduct;

const st = StyleSheet.create({
  KhungDSSP: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10,
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 40,
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  itemPro: {
    margin: 10,
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 150,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  productName: {
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'green',
  },
  add: {
    alignSelf: 'center',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 20,
    width:40,
    height:30,
    marginRight:11
  },
  
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  editButton: {
    width:40,
    height:30,
    backgroundColor: 'blue',
    padding: 2,
    borderRadius: 40,
    marginRight: 10,
  },
  buyButton: {
    backgroundColor: 'green',
    padding: 2,
    borderRadius: 20,
    width:40,
    height:30,
  },
  noResults: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
  },
});
