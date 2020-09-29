/*Example of Expandable ListView in React Native*/
import React, {Component} from 'react';
//import react in our project
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import basic react native components

export default class ExpandableItemComponent extends Component {
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
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={{
            backgroundColor: '#FFFFFF',
            padding: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 0.2,
            borderColor: 'grey',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {this.props.item.category_name}
          </Text>

          <Icon name="chevron-down" size={20} color="#3C3C3C" />
        </TouchableOpacity>
        <View
          style={{
            height: this.state.layoutHeight,
            overflow: 'hidden',
          }}>
          {/*Content under the header of the Expandable List Item*/}
          {this.props.item.subcategory.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                backgroundColor: '#fff',
              }}
              onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#3d3d3d',
                  padding: 10,
                }}>
                {item.val}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
