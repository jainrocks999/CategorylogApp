import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
  Platform,
  Linking, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBar from '../../Config/StatusBar/index';
import { SliderBox } from 'react-native-image-slider-box';
import { connect } from 'react-redux';
import Axios from 'axios';
import Loader from '../../Util/loading';
import Spinner from 'react-native-loading-spinner-overlay';
class ProductScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerIcon: () => (
      // <Image
      //     source={require('../../Assets/Drawer/share.png')}
      //     style={{ width: 20, height: 20, borderWidth: 1 }}
      // />
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
      productData: '',
      imagesdata: [],
      spinner: true,
      productSelectionColor: "",
      productSelectionSize: "",
      productId: "",
      productPrice: "",
    };
    this.loaddata();
  }
  loaddata = async () => {
    let productDetails = this.props.navigation.getParam('productDetails');
    console.log('productDetails : ', productDetails);
    // this.props.dispatch({type:'User_Product_Details_Request',url:`admin/api/2020-07/products/${productDetails}.json`})

    await Axios.get(
      `https://my-westside.myshopify.com/admin/api/2020-07/products/${productDetails}.json`,
      {
        headers: {
          Authorization:
            'Basic NWYzZTdjMDAwMjZmYjBhMjUwYjdiYTkzMDBmNTcyMjU6ZDgwOGM3MzU4MGFjYmVmZDQ1YTBiZTI2MWViZjA3MGQ',
        },
      },
    )

      .then((res) => {
        var data = res.data.product;
        this.setState({
          productData: res.data.product,
          imagesdata: data.images,
          spinner: false,
        });
        console.log('image data ' + this.state.imagesdata);
        console.log('product data ' + this.state.productData);
        console.log('Hello dear resp' + JSON.stringify(res.data));

        if (data && data.options && data.options.length > 0) {
          let itemColor = ""
          let itemSize = ""
          data.options.map((item) => {
            if (item.name == "Color") {
              itemColor = item.values[0]
              this.setState({ productSelectionColor: item.values[0] })
            }
            if (item.name == "Size") {
              itemSize = item.values[0]
              this.setState({ productSelectionSize: item.values[0] })
            }
          })
          if (data && data.variants && data.variants.length > 0) {
            if (itemSize != "" && itemColor != "") {
              data.variants.map(dataItem => {
                if (dataItem.option1 == itemColor && dataItem.option2 == itemSize) {
                  this.setState({ productId: dataItem.id, productPrice: dataItem.price })
                }
              })
            }
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
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

  buy = () => {
    Linking.openURL(
      'https://www.tatacliq.com/flying-machine-usain-black-ankle-high-sneakers/p-MP000000006686371?wid=woman-western-wear-new-in:LOV:LOV_Light_Blue_Distressed_Braiden_Jeans:mp000000006686371:desktop',
    );
  };

  onSelection = (item, superItem) => {
    const { productSelectionSize, productSelectionColor, productData } = this.state;
    if (item.name == "Size") {
      if (productData && productData.variants && productData.variants.length > 0 && productSelectionSize != "") {
        productData.variants.map(ele => {
          if (ele.option1 == productSelectionColor && ele.option2 == superItem) {
            console.log("in size", superItem)
            this.setState({ productId: ele.id, productPrice: ele.price })
          }
        })
      }
      this.setState({
        productSelectionSize: superItem
      })
    }
    if (item.name == "Color") {
      if (productData && productData.variants && productData.variants.length > 0 && productSelectionSize != "") {
        productData.variants.map(ele => {
          if (ele.option1 == superItem && ele.option2 == productSelectionSize) {
            console.log("in Color")
            this.setState({ productId: ele.id, productPrice: ele.price })
          }
        })
      }
      this.setState({
        productSelectionSize: superItem
      })
    }
  }

  onRowFieldShow = (item) => {
    const { productSelectionSize, productSelectionColor } = this.state;
    if (item && item.values && item.values.length > 0) {
      return item.values.map((items) => {
        return (
          <TouchableOpacity
            style={
              items == productSelectionSize || items == productSelectionColor ?
                {
                  borderWidth: 1,
                  borderColor: '#000',
                  width: 45,
                  height: 45,
                  borderRadius: 45 / 2,
                  //marginLeft: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                } : {
                  // borderWidth: 1,
                  borderColor: '#000',
                  width: 45,
                  height: 45,
                  borderRadius: 45 / 2,
                  //marginLeft: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
            onPress={() => this.onSelection(item, items)}

          >
            <Text style={{ fontSize: 10 }}>{items}</Text>
          </TouchableOpacity>
        );
      });
    }
  };

  render() {
    let arr1 = [];
    const { imagesdata, productData, productId, productPrice } = this.state;
    imagesdata.map((item, key) => arr1.push(item.src));
    // console.log('array: ' + JSON.stringify(arr1));
    // console.log('datata : ' + JSON.stringify(productData));

    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={{ color: '#fff' }}
        />
        <SliderBox
          //ImageComponent={FastImage}
          images={arr1}
          sliderBoxHeight={550}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#000"
          inactiveDotColor="#424242"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'contain'}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          dotStyle={{
            width: 20,
            height: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.92)',
          }}
          ImageComponentStyle={
            {
              //borderRadius: 15,
              //width: '97%',
            }
          }
          imageLoadingColor="#2196F3"
        />
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            marginLeft: 8,
            position: 'absolute',
            top: 10,
          }}
          onPress={() => this.props.navigation.navigate('Product')}>
          {/* <Image
              source={require('../../assets/Images/menu2.jpg')}
              style={styles.menu}
              resizeMode={'stretch'
            /> */}
          <Icon name="angle-left" size={24} color={'gray'} />
        </TouchableOpacity>

        <View style={{ paddingHorizontal: 14, marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 6 }}>
            {productData.title}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>NUON</Text>
          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            {/* <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#959595',
                textDecorationLine: 'line-through',
              }}>
              ₹ 1,499
            </Text> */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ff0000',
                marginLeft: 2,
              }}>
              ₹ {productPrice}
            </Text>
          </View>
          <Text style={{ fontSize: 12, marginLeft: 1, marginBottom: 10 }}>{productId}</Text>
        </View>

        <View
          style={{
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            borderColor: 'grey',
          }}>
          <View
            style={{
              paddingHorizontal: 10,
            }}>
            <View style={{ marginBottom: 20 }}>
              <FlatList
                data={productData.options}
                // horizontal={true}
                renderItem={({ item }) => (
                  <View style={{ marginHorizontal: 6 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ marginVertical: 14 }}>
                        {item.name} <Text style={{ color: '#ff0000' }}>*</Text>
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      {this.onRowFieldShow(item)}
                    </View>
                    {/* <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text style={{}} onPress={()=>console.log("click data",item.values)} >{item.values}  </Text>
                    </View> */}
                  </View>
                )}
              />
            </View>

            <TouchableOpacity
              onPress={this.buy}
              style={{
                marginVertical: 5,
                backgroundColor: '#000',
                width: '55%',
                marginLeft: 6,
                borderRadius: 1,
                paddingVertical: 10,
                paddingHorizontal: 14,
              }}>
              <Text style={{ color: '#fff', fontWeight: '700' }}>BUY ONLINE ON TATACLIQ</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                marginLeft: 8,
              }}>
              <Text style={{ fontSize: 12 }}>Add To Wishlist</Text>
              <Icon
                name="heart-o"
                size={20}
                color={'gray'}
                style={{ marginLeft: 6 }}
              />
            </View>
            <View
              style={{
                width: '99%',
                flexDirection: 'row',
                //justifyContent: 'center',
                //alignItems: 'center',
                //alignContent: 'center',
                marginLeft: 8,
                paddingVertical: 30,
                paddingBottom: 30,
                borderColor: 'grey',
              }}>
              <Text style={{ marginRight: 10, fontSize: 12 }}>Share</Text>
              <Icon name="facebook" size={15} style={{ marginHorizontal: 8 }} />
              <Icon name="twitter" size={15} style={{ marginHorizontal: 8 }} />
              <Icon
                name="pinterest-p"
                size={15}
                style={{ marginHorizontal: 8 }}
              />
              <Icon name="whatsapp" size={15} style={{ marginHorizontal: 8 }} />
            </View>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 15,
                marginTop: 10,
                marginLeft: 8,
                marginBottom: 15,
              }}>
              {/* Made from a stretch-fabric handle for a flattering fit, these mid
              blue jeans from Nuon will boost your denim collection. Sporting a
              neon green tape detail on the sides, they come with multiple
              pockets for utility. Style them with a casual tee and sneakers for
              a casual look. */}
              {productData.body_html ? productData.body_html.replace(/<\/?[^>]+(>|$)/g, "") : ""}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 10,
            borderBottomWidth: 0.5,
            borderColor: 'grey',
            paddingBottom: 40,
          }}>
          {/* <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 10}}>
            Care Instruction
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>Machine wash</Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 10}}>
            Fabric Composition
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>
            {'70% Cotton, 28% Polyester, 2% Elastane'}
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 10}}>
            Fit
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>Regular fit</Text> */}

          {this.state.listDataSource.map((item, key) => (
            <ExpandableItemComponent
              key={item.category_name}
              onClickFunction={this.updateLayout.bind(this, key)}
              item={item}
            />
          ))}
        </View>
        {/* <View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              fontWeight: 'bold',
              marginBottom: 10,
              marginHorizontal: 10,
            }}>
            SILIMAR ITEMS
          </Text>
        </View>
        <FlatList
          style={{marginBottom: 20}}
          data={arr}
          contentContainerStyle={{justifyContent: 'space-around'}}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{width: 215, marginRight: 8}}
              onPress={() => {
                this.props.navigation.navigate('ProductDetail');
              }}>
              <View
                style={{
                  height: 300,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: '100%',
                    width: '99%',
                  }}
                  source={item.image}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  fontWeight: '700',
                  color: '#000',
                  marginVertical: 5,
                }}>
                {item.ItemName}
              </Text>

              <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Text
                  style={{
                    marginRight: 5,
                    textDecorationLine: 'line-through',
                  }}>
                  {item.price}
                </Text>
                <Text style={{color: 'red'}}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
        /> */}

        {/* <View style={{marginTop: 20}}>
          <NewsLetter />
        </View> */}
        <StatusBar />
      </ScrollView>
    );
  }
}

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'DETAILS AND CARE',
    subcategory: [
      { id: 1, val: 'WOMAN' },
      { id: 2, val: 'MAN' },
      { id: 3, val: 'KIDS' },
      { id: 4, val: 'SHOES & BAGS' },
      { id: 5, val: 'HOME' },
      { id: 6, val: 'STUDIOWEST' },
    ],
  },
];

/* ///////////////////////////////////////////////////////////////////////////////////////////// */
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    ProductDetails: state.ProductDetails,
  };
};

export default connect(mapStateToProps)(ProductScreen);

class ExpandableItemComponent extends Component {
  //Custom Component for the Expandable List
  constructor() {
    super();
    this.state = {
      layoutHeight: 0,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item.isExpanded) {
      this.setState(() => {
        return {
          layoutHeight: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          layoutHeight: 0,
        };
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <View>
        {/*Header of the Expandable List Item*/}
        {/* <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={{
            backgroundColor: '#FFFFFF',
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', marginBottom: 10}}>
            DETAILS AND CARE
          </Text>
          <Icon name="chevron-down" size={20} color="#3C3C3C" />
        </TouchableOpacity>
        <View
          style={{
            height: this.state.layoutHeight,
            overflow: 'hidden',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 10}}>
            Care Instruction
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>Machine wash</Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 10}}>
            Fabric Composition
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>
            {'70% Cotton, 28% Polyester, 2% Elastane'}
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', marginBottom: 10}}>
            Fit
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>Regular fit</Text>
        </View> */}
      </View>
    );
  }
}
