import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  LayoutAnimation,
  UIManager,
  Platform,
  Alert,
} from 'react-native';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../Config/StatusBar/index';
import { connect } from 'react-redux';
import Axios from 'axios';
import { API } from '../../common/Constants';
import Loader from '../../Util/loading';
import Spinner from 'react-native-loading-spinner-overlay';
import Client from 'shopify-buy';

// global inislize 
let initialCount = 0
let finalCount = 0

const client = Client.buildClient({
  domain: 'my-westside.myshopify.com',
  storefrontAccessToken: '206c5b40f0e0666cc4c7d5304b071f3c',
});

// Initializing a client to return translated content
const clientWithTranslatedContent = Client.buildClient({
  domain: 'my-westside.myshopify.com',
  storefrontAccessToken: '206c5b40f0e0666cc4c7d5304b071f3c',
  language: 'ja-JP'
});
class ProductScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerIcon: () => (
      <Icon name="home" style={{ fontSize: 30 }} />
    ),
  });

  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      listDataSource: CONTENT,
      productData: [],
      spinner: true,
      fullList: []
    };
    this.loaddata();
  }
  loaddata = async () => {
    initialCount = 0
    finalCount = 0
    client.product.fetch('155269627957').then((product) => {
      // Do something with the product
      console.log('rohit collection id'+JSON.stringify(product));
    })
    // client.product.fetchAll().then((products) => {
    //   // Do something with the products
    //   console.log('hhhhhhhh'+products);
    // });
    
    // // Fetch a single product by ID
    // const productId = '';
    
    // client.product.fetch(productId).then((product) => {
    //   // Do something with the product
    //   console.log(product);
    // });
    
    // // Fetch a single product by Handle
    // const handle = 'product-handle';
    
    // client.product.fetchByHandle(handle).then((product) => {
    //   // Do something with the product
    //   console.log(product);
    // });




    // Shopify.initialize(
    //   'my-westside.myshopify.com',
    //   'e44e15f3fc09c786069fe83203b0832c',
    // );
    // Shopify.getShop()
    //   .then((shop) => {
    //     console.log('shop ' + shop);
    //     // Save the shop somewhere and use it to display currency and other info
    //     return getAllCollections();
    //   })
    //   .then((collections) => {
    //     console.log('collection' + collections);
    //     // Do something with collections
    //     return getAllTags();
    //   })
    //   .then((tags) => {
    //     console.log('tag' + tags);
    //     // And tags...
    //   });

    let productInfo = this.props.navigation.getParam('productInfo');
    // console.log('productInfo', productInfo.id);

    if (productInfo) {
      const linkSplit = productInfo.link.split(':/');
      console.log('linkSplit', linkSplit);
      await Axios.get(`https://www.westside.com${linkSplit[1]}.json`)
        .then(async (response) => {
          console.log('collection response', JSON.stringify(response));
          let collectionId = response.data.collection.id;
console.log('rohit check data'+collectionId)
          client.product.fetch(collectionId).then((product) => {
            // Do something with the product
            console.log('rohit collection id'+JSON.stringify(product));
          })

          const header = {
            Authorization:
              'Basic NWYzZTdjMDAwMjZmYjBhMjUwYjdiYTkzMDBmNTcyMjU6ZDgwOGM3MzU4MGFjYmVmZDQ1YTBiZTI2MWViZjA3MGQ',
          };
          await Axios.get(
            `${API.BASE_URL2}/admin/api/2020-07/collections/${collectionId}/products.json`,
            { headers: header },
          )
            .then((res) => {
              console.log('kapil jain' + JSON.stringify(res))
              let sectionData = []
              if (res.data && res.data.products && res.data.products.length > 0) {
                let allProducts = res.data.products;
                if (allProducts.length > 6) {
                  for (let i = 0; i < 6; i++) {
                    sectionData.push(allProducts[i])
                  }
                } else {
                  for (let j = 0; j < allProducts.length; j++) {
                    sectionData.push(allProducts[j])
                  }
                }
                initialCount = 1
                finalCount = sectionData.length
              }

              this.setState({
                spinner: false,
                productData:
                  sectionData,
                fullList: res.data && res.data.products ? res.data.products : [],
              });
              console.log('final res', res);
            })
            .catch((error) => {
              console.log('final error', error.response);
            });
        })
        .catch((err) => {
          console.log('err', err.response);
        });
    }
  };

  updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    this.setState(() => {
      return {
        listDataSource: array,
      };
    });
  };

  onNext = () => {
    const { fullList, productData } = this.state
    let sectionData = [];
    let index = null
    for (let i = 0; i < fullList.length; i++) {
      if (productData[productData.length - 1].id && fullList[i].id) {
        if (productData[productData.length - 1].id == fullList[i].id) {
          index = i
        }
      }

    }
    if (index) {
      console.log("next index", index)
      initialCount = finalCount + 1 > fullList.length ? fullList.length : finalCount + 1
      finalCount = initialCount + 5 > fullList.length ? fullList.length : initialCount + 5
      for (let j = index; j < index + 6; j++) {
        sectionData.push(fullList[j])
      }
    }
    if (sectionData.length > 0) {
      this.setState({ productData: sectionData })
    }

  }

  onPrevious = () => {
    const { fullList, productData } = this.state
    let sectionData = [];
    let index = null
    for (let i = 0; i < fullList.length; i++) {
      if (productData[0].id && fullList[i].id) {
        if (productData[0].id == fullList[i].id) {
          index = i
        }
      }

    }
    console.log("index", index)
    if (index) {

      if (index <= 5) {
        initialCount = 1
        finalCount = index + 6 > fullList.length ? fullList.length : index + 1
        // if (fullList.length <= 5) {
        for (let k = 0; k < index + 1; k++) {
          sectionData.push(fullList[k])
        }
        sectionData.reverse()
        //}
      } else {
        initialCount = index + 2 > fullList.length ? fullList.length : index + 2
        finalCount = index + 6 > fullList.length ? fullList.length : index + 6
        for (let j = index; j > index - 6; j--) {
          sectionData.push(fullList[j])
        }
      }

    }
    console.log("sectionData... previous", sectionData)
    if (sectionData.length > 0) {
      this.setState({ productData: sectionData.reverse() })
    }
  }

  render() {
    const { productData, fullList } = this.state;
    console.log("productData", productData)
    return (
      <View style={{ flex: 1 }}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={{ color: '#fff' }}
        />
        <View
          style={{
            // marginTop: 10,
            backgroundColor: '#FFFFFF',
            width: '100%',
            padding: 8,
            height: 45,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{ height: 30, width: 30, marginLeft: 8 }}
            onPress={() => this.props.navigation.toggleDrawer()}>
            {/* <Image
              source={require('../../assets/Images/menu2.jpg')}
              style={styles.menu}
              resizeMode={'stretch'
            /> */}
            <Icon name="bars" size={24} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Dashboard');
            }}>
            <Image
              style={{ width: 120, height: 30 }}
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/westside_logo_new.png?v=1573053071',
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Search');
              }}>
              {/* <Image
              source={require('../../assets/Images/search.png')}
              style={{width: 30, height: 25}}
              resizeMode={'center'}
            /> */}

              <Icon
                name="search"
                size={20}
                color={'gray'}
                style={{ marginRight: 14 }}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Whishlist');
              }}>
              <Icon
                name="heart-o"
                size={20}
                color={'gray'}
                style={{marginEnd: 6}}
              />
            </TouchableOpacity> */}
          </View>
        </View>
        <StatusBar />
        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
        <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

          {productData.length > 0 ? (
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  marginVertical: 5,
                }}>
                {productData[0].product_type}
              </Text>
              <FlatList
                data={productData}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{ margin: 1, width: '49%', marginBottom: 10 }}
                    onPress={() => {
                      //  Alert.alert('touched');
                      this.props.navigation.navigate('ProductDetail', {
                        productDetails: item.id,
                      });
                    }}>
                    <View
                      style={{
                        height: 300,
                        borderColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          height: '100%',
                          width: '99%',
                        }}
                        source={{ uri: item.image.src }}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#000',
                        marginLeft: 8,
                        padding: 4,
                        marginVertical: 5,
                      }}>
                      {item.title}
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                      {/* <Text
                    style={{
                      marginRight: 5,
                      textDecorationLine: 'line-through',
                    }}>
                    {item.price}
                  </Text>
                  <Text style={{color: 'red'}}>{item.price}</Text> */}
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
          ) : (
              <View />
            )}
          {productData.length > 0 ? <View>
            <View
              style={{
                marginVertical: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Text style={{fontSize: 12}}>{`Showing : ${initialCount}- ${finalCount} of ${fullList.length}`}</Text> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
              }}>
              {productData && fullList && productData[0] && productData[0].id && fullList[0].id && productData[0].id != fullList[0].id ? <View style={{ flexDirection: 'row' }}>
                <Icon name="chevron-left" onPress={() => this.onPrevious()} size={12} style={{ marginLeft: 10, marginTop: 5 }} />
                <Text
                  onPress={() => this.onPrevious()}
                  style={{ marginLeft: 10 }}>PREV</Text>
              </View> : null}

              {/* <Text style={{marginLeft: 10}}>{fullList.length > 3 ? `1 2 3 ... ${fullList.length}` :`1 2 3`} </Text> */}
              <Text style={{ marginLeft: 10 }}>{`${initialCount}- ${finalCount} of ${fullList.length}`} </Text>
              {productData && fullList && productData[productData.length - 1] && productData[productData.length - 1].id && fullList[fullList.length - 1].id && productData[productData.length - 1].id != fullList[fullList.length - 1].id ? <View style={{ flexDirection: 'row' }}>
                <Text onPress={() => this.onNext()} style={{ marginLeft: 10 }}>NEXT </Text>
                <Icon name="chevron-right" size={12} onPress={() => this.onNext()} style={{ marginLeft: 10, marginTop: 5 }} />
              </View> : null}

            </View>
          </View> : null}

        </ScrollView>
      </View>
    );
  }
}

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'SHOP',
    subcategory: [
      { id: 1, val: 'WOMAN' },
      { id: 2, val: 'MAN' },
      { id: 3, val: 'KIDS' },
      { id: 4, val: 'SHOES & BAGS' },
      { id: 5, val: 'HOME' },
      { id: 6, val: 'STUDIOWEST' },
    ],
  },
  {
    isExpanded: false,
    category_name: 'SITES AND STORIES',
    subcategory: [
      { id: 1, val: 'ABOUT US' },
      { id: 2, val: 'CONTACT US' },
      { id: 3, val: 'STORE LOCATOR' },
      { id: 4, val: 'INVESTORS' },
      { id: 5, val: 'MEDIA CENTERS' },
      { id: 6, val: 'CLUBWEST' },
    ],
  },
];

/* ///////////////////////////////////////////////////////////////////////////////////////////// */

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    CopyRight: state.CopyRight,
  };
};

export default connect(mapStateToProps)(ProductScreen);
