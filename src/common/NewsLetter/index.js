import React from 'react';
import {View, Text, UIManager} from 'react-native';
import ExpandableItemComponent from '../../screens/homeScreen/expandableList';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class NewsLetter extends React.Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      listDataSource: CONTENT,
    };
  }

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
  render() {
    return (
      <View style={{padding: 10, marginBottom: 20}}>
        <Text
          style={{
            marginVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          JOIN OUR NEWSLETTER
        </Text>

        {this.state.listDataSource.map((item, key) => (
          <ExpandableItemComponent
            key={item.category_name}
            onClickFunction={this.updateLayout.bind(this, key)}
            item={item}
          />
        ))}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',

            alignItems: 'center',
            alignContent: 'center',

            paddingVertical: 30,
            paddingBottom: 30,
            borderBottomWidth: 0.2,
            borderColor: 'grey',
          }}>
          <Icon name="facebook" size={18} style={{marginHorizontal: 12}} />
          <Icon name="twitter" size={18} style={{marginHorizontal: 12}} />
          <Icon name="instagram" size={18} style={{marginHorizontal: 12}} />
          <Icon name="youtube" size={18} style={{marginHorizontal: 12}} />
        </View>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          {'COPYRIGHT@2019 WESTSIDE LIMITED'}
        </Text>
      </View>
    );
  }
}

const CONTENT = [
  {
    isExpanded: false,
    category_name: 'SHOP',
    subcategory: [
      {id: 1, val: 'WOMAN'},
      {id: 2, val: 'MAN'},
      {id: 3, val: 'KIDS'},
      {id: 4, val: 'SHOES & BAGS'},
      {id: 5, val: 'HOME'},
      {id: 6, val: 'STUDIOWEST'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'SITES AND STORIES',
    subcategory: [
      {id: 1, val: 'ABOUT US'},
      {id: 2, val: 'CONTACT US'},
      {id: 3, val: 'STORE LOCATOR'},
      {id: 4, val: 'INVESTORS'},
      {id: 5, val: 'MEDIA CENTERS'},
      {id: 6, val: 'CLUBWEST'},
    ],
  },
];
