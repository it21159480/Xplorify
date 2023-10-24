import React, { useState } from 'react';
import {FlatList,SafeAreaView,StyleSheet,Text,View,} from 'react-native';
import COLORS from '../consts/colors';
import { Menu, IconButton } from 'react-native-paper';

const ListCard = ({ navigation , list }) => {

    const item = list;
    const [data, setData] = useState(item);
    const [menuVisible, setMenuVisible] = useState(false);
    const [sortOrder, setSortOrder] = useState(null);
    const sortBy = (order) => {
        const sorted = [...data].sort((a, b) => {
            if (order === 'asc') {
                return a.name.localeCompare(b.name);
            } else if (order === 'desc') {
                return b.name.localeCompare(a.name);
            }
            return 0; // default to original order
        });
        setData(sorted);
        setSortOrder(order);
    };
    const Card = ({ lists }) => {

        const getBorderColor = () => {
            if (lists.sta === 'Open') {
                return 'green';
            } else if (lists.sta === 'Pending') {
                return 'orange';
            } else {
                return 'red';
            }
        };

        return (

            <View style={[style.topFoodCard, { borderColor: getBorderColor() }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10 }}>{lists.name}</Text>
                    <Text style={{ color: COLORS.grey, fontWeight: 'bold', marginTop: 5 }} >{lists.RFID}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>{lists.type} </Text>
                    <View style={{ backgroundColor: getBorderColor(), marginTop: 10, width: 70, borderRadius: 10 }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: COLORS.white, alignSelf: 'center', paddingBottom: 2 }}>{lists.sta}</Text>
                    </View>
                </View>
            </View>

        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white  }}>         
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10, height: 50 }}>
                    <Text style={{ marginTop: 10 }}>Sort by</Text>
                    <Menu
                        visible={menuVisible}
                        onDismiss={() => setMenuVisible(false)}
                        anchor={
                            <IconButton
                                icon="sort"
                                size={24}
                                onPress={() => setMenuVisible(!menuVisible)}
                            />
                        }
                    >
                        <Menu.Item onPress={() => sortBy('asc')} title="Sort Ascending" />
                        <Menu.Item onPress={() => sortBy('desc')} title="Sort Descending" />
                        <Menu.Item onPress={() => { setData(item); setSortOrder(null); }} title="Reset" />
                    </Menu>
                </View>
                <View style={{ flex: 1, }}>
                    <FlatList
                        data={data}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            marginTop: 10,
                            paddingBottom: 30,

                        }}
                        renderItem={({ item }) => <Card lists={item} />}
                    />
                </View>
        </SafeAreaView >
    );

}

const style = StyleSheet.create({
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
export default ListCard;