import React, { Component } from 'react';
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
    Image,
} from 'react-native';
import colors from '../../Config/colors';
//import basic react native components

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
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.props.onClickFunction}
                    style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image
                                style={{ height: 40, width: 40, borderWidth: 1, borderColor: 'black', marginRight: 10 }}
                                source={this.props.item.category_image}
                            />
                            <Text style={styles.headerText}>{this.props.item.category_name}</Text>
                        </View>
                        <Image
                            style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'center', height: 20, width: 20 }}
                            source={require('../../Assets/image/arrow.png')}
                        />
                    </View>
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
                            style={styles.content}
                            onPress={() => alert('Id: ' + item.id + ' val: ' + item.val)}>
                            <Text style={styles.text}>
                                {key}. {item.val}
                            </Text>
                            {/* <View style={styles.separator} /> */}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

export default class App extends Component {
    //Main View defined under this Class
    constructor() {
        super();
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.state = { listDataSource: CONTENT };
    }

    updateLayout = index => {
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
            <View style={styles.container}>
                <ScrollView>
                    {this.state.listDataSource.map((item, key) => (
                        <ExpandableItemComponent
                            key={item.category_name}
                            onClickFunction={this.updateLayout.bind(this, key)}
                            item={item}
                        />
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        padding: 4,
        marginLeft: 10,
        borderBottomColor: colors.grey,
        borderBottomWidth: 0.5
    },
    headerText: {
        fontSize: 14,
        fontWeight: '500',
        textAlignVertical: 'center'
    },
    separator: {
        height: 0.5,
        backgroundColor: '#808080',
        width: '95%',
        marginLeft: 16,
        marginRight: 16,
    },
    text: {
        fontSize: 12,
        color: '#606070',
        padding: 10,
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
    },
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
    {
        isExpanded: false,
        category_name: 'Snacks',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All Snack' },
        { id: 2, val: 'Salty Snack' },
        { id: 3, val: 'Bars' },
        { id: 4, val: 'Coockies' },
        { id: 5, val: 'Nuts & Seeds' },
        { id: 6, val: 'Chocolate & Candy' },
        { id: 7, val: 'Fruit Snack' },
        { id: 8, val: 'Jerky & Meat Snack' },
        { id: 9, val: 'Fruit Cups & Pouches' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Beverages',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All Beverages' },
        { id: 2, val: 'Coffee' },
        { id: 3, val: 'Water' },
        { id: 4, val: 'Seltzer & Sparklig' },
        { id: 5, val: 'Juices & Mixes' },
        { id: 6, val: 'Sports & Energy' },
        { id: 7, val: 'Tea' },
        { id: 8, val: 'Milk & Creamers' },
        { id: 9, val: 'Protein Shakes' },
        { id: 9, val: 'Soda & Pop' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Grocery',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All Grocery' },
        { id: 2, val: 'Cereal & Breafast' },
        { id: 3, val: 'Meals & Canned Goods' },
        { id: 4, val: 'Condiments & Spreads' },
        { id: 5, val: 'Cooking & Baking' },
        { id: 6, val: 'Bread & Bakery' },
        { id: 7, val: 'Sugars & Sweeteners' },
        { id: 8, val: 'Spices & Seasonings' },
        { id: 9, val: 'Sea Food' },

        ],
    },
    {
        isExpanded: false,
        category_name: 'Household Essentials',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All Household Essentials' },
        { id: 2, val: 'Paper Products' },
        { id: 3, val: 'Laundry' },
        { id: 4, val: 'Disposable Tableware' },
        { id: 5, val: 'Cleaners & Tools' },
        { id: 6, val: 'Trash Bags' },
        { id: 7, val: 'Food Storage' },
        { id: 8, val: 'Dish Soap & Detergent' },
        { id: 9, val: 'Air Fresheners' },

        ],
    },
    {
        isExpanded: false,
        category_name: 'Personal Care',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All Personal Care' },
        { id: 2, val: 'Skin Care & Body Wash' },
        { id: 3, val: 'Feminine Products' },
        { id: 4, val: 'Hand Soaps & Sanitizers' },
        { id: 5, val: 'Hair Care' },
        { id: 6, val: 'Deodorants' },
        { id: 7, val: 'Shaving & Grooming' },
        { id: 8, val: 'Incontinence' },

        ],
    },
    {
        isExpanded: false,
        category_name: 'Health & Wellness',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All Health & Wellness' },
        { id: 2, val: 'Dental & Eye' },
        { id: 3, val: 'Vitamins & Supplements' },
        { id: 4, val: 'Pain Relief & First Aid' },
        { id: 5, val: 'Allergy & Flu' },
        { id: 6, val: 'Sexual Wellness' },

        ],
    },
    {
        isExpanded: false,
        category_name: 'Baby',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All Baby' },
        { id: 2, val: 'Diapers' },
        { id: 3, val: 'Baby Wipes' },
        { id: 4, val: 'Food & Formulas' },
        { id: 5, val: 'Bath & Lotion' },
        { id: 6, val: 'Health & Safety' },

        ],
    },
    {
        isExpanded: false,
        category_name: 'Home',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All Home' },
        { id: 2, val: 'Bed & Bath' },
        { id: 3, val: 'Power & Batteries' },
        { id: 4, val: 'Kitchen' },
        { id: 5, val: 'Seasonal & Gifting' },
        { id: 6, val: 'Toys & Gaming' },
        { id: 7, val: 'Tech Accessories' },
        { id: 8, val: 'Storage & Organization' },
        { id: 9, val: 'Apparel' },
        { id: 9, val: 'Sports & Outdoor' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'School & Office',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All School & Office' },
        { id: 2, val: 'Office Supplies' },
        { id: 3, val: 'Writing & Stationery' },
        { id: 4, val: 'Folders & Organizations' },
        { id: 5, val: 'Paper & Printing' },
        { id: 6, val: 'Backpacks & Lunch Bags' },]

    },
    {
        isExpanded: false,
        category_name: 'Pets',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All Pets' },
        { id: 2, val: 'Treats' },
        { id: 3, val: 'Pet Care' },
        { id: 4, val: 'Dog Food' },
        { id: 5, val: 'Cat Food' },
        { id: 6, val: 'Toys & Accessories' },]

    },
    {
        isExpanded: false,
        category_name: 'Wine',
        category_image: require('../../Assets/image/a2.png'),
        subcategory: [{ id: 1, val: 'All Beverages' },
        { id: 2, val: 'Coffee' },
        ],
    },
];
