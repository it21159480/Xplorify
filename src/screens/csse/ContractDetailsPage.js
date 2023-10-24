import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import Contract from '../../consts/Contract';
import { Provider } from 'react-native-paper';
import ContractCard from '../../components/ContractCard';
import DownloadComponent from './DownloadComponent';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';


const ContractDetailsPage = ({ navigation, route }) => {

    const item = route.params ;
    const Byer = route.params.byer
    console.log('item',item)
    const getBorderColor = () => {
        if (item.sta === 'Active') {
            return 'green';
        } else if (item.sta === 'Pending') {
            return 'orange';
        } else {
            return 'red';
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={{ backgroundColor: '#3F3825', height: 150, }} >
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center', marginTop: 70 }}>Contracts</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.grey, textAlign: 'center', }}>{item.CNID}</Text>
                </View>
                <View style={{ alignSelf: 'flex-end', marginRight: 20 }}>
                    <View style={{ backgroundColor: getBorderColor() , marginTop: 10, width: 70, borderRadius: 10, }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: COLORS.white, alignSelf: 'center', paddingBottom: 2 }}>{item.sta}</Text>
                    </View>
                </View>
                <View style={{}}>
                    <View style={{ alignSelf: 'center', padding: 20 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                    <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop:20 }}>
                        <View style={style.circle}>
                            <Text style={{ textAlign: 'center', color: COLORS.white, marginTop: 20, fontWeight:'bold', fontSize:15}}>{item.startDate}</Text>
                        </View>
                        <View style={{ width: 150, borderBottomColor: '#45290e', borderBottomWidth: 2, top: -30 }} >
                            <Text style={{ textAlign: 'center', fontSize: 20, bottom: -30 }}>{item.year}</Text>
                        </View>
                        <View style={style.circle}>
                            <Text style={{ textAlign: 'center', color: COLORS.white, marginTop: 20, fontWeight:'bold', fontSize:15 }}>{item.endDate}</Text>
                        </View>

                    </View>
                    <View>
                        <View style={{marginTop:20, elevation:15,backgroundColor:COLORS.white}}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 30 }}>Byer : {Byer[0]}</Text>
                            <View style={{ flexDirection: 'column', margin: 10 }}>
                                <Text style={style.byer}>{Byer[1]}</Text>
                                <Text style={style.byer} >{Byer[2]}</Text>
                                <Text style={style.byer}>{Byer[3]}</Text>
                                <Text style={style.byer}>{Byer[4]}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row' , marginTop:30}}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 30, textAlign:'center', alignSelf:'center'}}>Contract Agreement</Text>
                            <View style={{alignItems:'flex-end' , padding:10}}>
                                <DownloadComponent />                                
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>


        </SafeAreaView >
    );

}

const style = StyleSheet.create({
    byer: {
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 60,
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
        height: 200,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        overflow: 'hidden',
    },
    searchInputContainer: {
        height: 40,
        backgroundColor: COLORS.light,
        top: -20,
        marginHorizontal: 20,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 15
    },
    topFoodCard: {
        height: 110,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
        padding: 20,
        borderLeftWidth: 4
    },
})
export default ContractDetailsPage;