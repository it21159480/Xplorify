import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import RequestForQuotation from '../../consts/RequestForQuotation'
import { Provider } from 'react-native-paper';
import ListCard from '../../components/ListCard';

const RequestForQuotationPage = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text.trim() === '') {
            setSearchResults([]);
        } else {
            const filteredResults = RequestForQuotation.filter(
                (quotation) =>
                    quotation.name.toLowerCase().includes(text.toLowerCase()) ||
                    quotation.type.toLowerCase().includes(text.toLowerCase()) ||
                    quotation.sta.toLowerCase().includes(text.toLowerCase())
            );
            setSearchResults(filteredResults);
        }
    };

    const SearchList = ({ RFQ }) => {

        const getBorderColor = () => {
            if (RFQ.sta === 'Open') {
                return 'green';
            } else if (RFQ.sta === 'Pending') {
                return 'orange';
            } else {
                return 'red';
            }
        };

        return (

            <View style={[style.topFoodCard, { borderColor: getBorderColor() }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10 }}>{RFQ.name}</Text>
                    <Text style={{ color: COLORS.grey, fontWeight: 'bold', marginTop: 5 }} >{RFQ.RFID}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>{RFQ.type} </Text>
                    <View style={{ backgroundColor: getBorderColor(), marginTop: 10, width: 70, borderRadius: 10 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: COLORS.white, alignSelf: 'center', paddingBottom: 2 }}>{RFQ.sta}</Text>
                    </View>

                </View>
            </View>

        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Provider>
                <View style={{ backgroundColor: '#3F3825', height: 150, }} >
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', textAlign:'center',marginTop:70 }}>Request For Quotation</Text>
                </View>
                <View style={style.searchInputContainer}>
                    <Icon name='search' size={25} style={{ marginLeft: 20 }} />
                    <TextInput
                        placeholder='Search'
                        style={{ fontSize: 18, paddingLeft: 10, }}
                        value={searchQuery}
                        onChangeText={(text) => handleSearch(text)}
                    />
                </View>
                {searchQuery.trim() ?
                    (
                        <FlatList
                            data={searchResults}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                marginTop: 10,
                                paddingBottom: 30,
                            }}
                            renderItem={({ item }) => <SearchList RFQ={item} />}
                        />
                    ) :
                    (

                        <ListCard navigation={navigation} list={RequestForQuotation} />


                    )
                }
            </Provider>
        </SafeAreaView >
    );

}

const style = StyleSheet.create({


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
        elevation:15
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
export default RequestForQuotationPage;