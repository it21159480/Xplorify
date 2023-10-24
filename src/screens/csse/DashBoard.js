import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, View, ImageBackground, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import COLORS from '../../consts/colors';
import searchFood from '../../consts/searchFood';
import DownloadComponent from './DownloadComponent';
import { Provider } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
const width = Dimensions.get('window').width - 25;

const DashBoard = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text.trim() === '') {
            setSearchResults([]);
        } else {
            const filteredResults = searchFood.filter(
                (food) =>
                    food.name.toLowerCase().includes(text.toLowerCase()) ||
                    food.type.toLowerCase().includes(text.toLowerCase())
            );
            setSearchResults(filteredResults);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView style={{ flex: 1 }}>
                <Provider>
                    <ImageBackground style={style.headerImage} source={require('../../assets/h.png')} resizeMode='stretch' >

                        <View style={style.searchInputContainer}>
                            <Icon name='search' size={25} style={{ marginLeft: 20 }} />
                            <TextInput
                                placeholder='Search'
                                style={{ fontSize: 18, paddingLeft: 10, }}
                                value={searchQuery}
                                onChangeText={(text) => handleSearch(text)}
                            />
                        </View>

                        <View style={style.header}>
                            <View style={{ paddingBottom: 15 }}>
                                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Your gateway to efficiancy & excellence</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: COLORS.white, flex: 1, borderTopRightRadius: 30, borderTopLeftRadius: 30, }}>
                            <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', marginHorizontal: 10 }}>
                                <View style={style.circle}>
                                    <FontAwesome5
                                        name="file-upload"
                                        size={30} color="white"
                                        onPress={() => navigation.navigate('RequestForQuotation')}
                                        style={{ alignSelf: 'center', marginTop: 15 }} />

                                </View>
                                <View style={style.circle}>
                                    <MaterialCommunityIcons
                                        name="hand-coin"
                                        size={40} color="white"
                                        onPress={() => navigation.navigate('InvitationForBidPage')}
                                        style={{ alignSelf: 'center', marginTop: 11 }} />
                                </View>
                                <View style={style.circle}>
                                    <MaterialCommunityIcons
                                        name='account-question'
                                        color='white'
                                        onPress={() => navigation.navigate('InquiryPage')}
                                        size={40} style={{ alignSelf: 'center', marginTop: 11, marginLeft: 5 }} />
                                </View>
                                <View style={style.circle}>
                                    <MaterialCommunityIcons
                                        name="handshake"
                                        size={40}
                                        onPress={() => navigation.navigate('ContractPage')}
                                        color="white" style={{ alignSelf: 'center', marginTop: 11 }} />
                                </View>
                            </View>
                            <View style={style.text}>
                                <Text style={{ fontSize: 18, fontWeight: 'normal' }}>RFQ</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'normal' }}>ITB</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'normal' }}>INQ</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'normal' }}>CN</Text>
                            </View>
                            <View style={{ marginTop: 20, }}>
                                <ImageBackground source={require('../../assets/h3.png')} resizeMode='cover' style={style.img}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 150, marginLeft: 15 }}>Your gateway to efficiancy & excellence</Text>
                                </ImageBackground>
                            </View>
                            <View>
                                <LineChart
                                    data={{
                                        labels: ['1/5/2022', '1/6/2022', '1/7/2022', '1/8/2022', '1/9/2022'],
                                        datasets: [
                                            {
                                                data: [50, 55, 80, 60, 85], // Example data for Series 1
                                                color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // orange color
                                            },
                                            {
                                                data: [30, 45, 60, 50, 70], // Example data for Series 2
                                                color: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`, // light orange color
                                            }
                                        ],
                                    }}
                                    width={Dimensions.get('window').width - 16}
                                    height={250}
                                    chartConfig={{
                                        backgroundColor: COLORS.dark,
                                        backgroundGradientFrom: '#ffffff',
                                        backgroundGradientTo: '#ffffff',
                                        decimalPlaces: 0,
                                        color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // text color
                                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                        propsForDots: {
                                            r: '4',
                                            strokeWidth: '2',
                                        }
                                    }}
                                    // bezier
                                    style={{
                                        marginVertical: 25,
                                        borderRadius: 16,

                                    }}
                                    withDots={true}
                                    withInnerLines={true}
                                    withOuterLines={true}
                                    withVerticalLines={true}
                                    withHorizontalLines={true}
                                    withVerticalLabels={true}
                                    withHorizontalLabels={true}
                                />
                            </View>
                            <View style={style.legendContainer}>
                                <View style={style.legendItem}>
                                    <View style={[style.colorBox, { backgroundColor: 'rgba(255, 165, 0,1)' }]} />
                                    <Text>Series 1</Text>
                                </View>
                                <View style={style.legendItem}>
                                    <View style={[style.colorBox, { backgroundColor: 'rgba(255, 215, 0, 1)' }]} />
                                    <Text>Series 2</Text>
                                </View>
                            </View>
                           

                        </View>
                    </ImageBackground>
                </Provider>
            </ScrollView>
        </SafeAreaView >
    );

}

const style = StyleSheet.create({
    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginBottom: 30
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorBox: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    img: {
        height: 200,
        width: width,
        borderRadius: 20,
        overflow: 'hidden',
        alignSelf: 'center'

    },
    text: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 5
    },
    icons: {
        alignContent: 'center',
        marginLeft: 15,
        marginTop: 10
    },
    circle: {

        width: 65, // Set the desired width (diameter) of the circle
        height: 65, // Set the same height as the width for a perfect circle
        borderRadius: 40, // Use half of the width to create a circle
        backgroundColor: '#45290e',
        overflow: 'hidden',
        elevation: 20,


    },
    header: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,

    },
    headerImage: {
        flex: 1,
        overflow: 'hidden',

    },
    searchInputContainer: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        marginTop: 35,
        marginHorizontal: 20,
        borderRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 40,
        // borderWidth: 1,

    },
    topFoodCard: {
        height: 160,
        width: 220,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    topFoodCardImage: {
        height: 100,
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

})
export default DashBoard;