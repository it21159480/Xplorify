import React from 'react';
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import foods from '../consts/foods';
import LessSpicy from '../consts/LessSpicy';
import FoodCard from '../components/FoodCard';
import TopFoodCard from '../components/TopFoodCard';
const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const Home = ({ navigation }) => {
    // const TopFoodCard = ({ food }) => {
    //     return (
    //         <TouchableOpacity
    //         onPress={() => navigation.navigate('FoodDetails', food)}>
    //             <View style={style.topFoodCard}>
    //                 <Image style={style.topFoodCardImage} source={food.image} />
    //                 <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
    //                     <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
    //                     <Text style={{ fontSize: 12, fontWeight: 'normal', color: COLORS.grey }}>
    //                         {food.type}
    //                     </Text>
    //                 </View>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={style.header}>
                <View style={{ paddingBottom: 15 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Hungry Time</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Teast Your </Text>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.primary }}>Food</Text>
                    </View>
                </View>
                <Icon name='person-outline' size={38} color={COLORS.grey} />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={style.searchInputContainer}>
                    <Icon name='search' size={30} style={{ marginLeft: 20 }} />
                    <TextInput placeholder='Search' style={{ fontSize: 20, paddingLeft: 10, }} />
                </View>
                <FoodCard navigation={navigation}/>
                
                <TopFoodCard navigation={navigation}/>
             
                
                
            </ScrollView>
        </SafeAreaView>
    );

}

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        marginTop: 15,
        marginHorizontal: 20,
        borderRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: COLORS.primary,
        borderWidth: 1,

    },
    card: {
        height: 280,
        width: cardWidth,
        elevation: 15,
        marginRight: 20,
        borderRadius: 15,
        backgroundColor: COLORS.white,
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    priceTag: {
        height: 60,
        width: 80,
        backgroundColor: COLORS.primary,
        position: 'absolute',
        zIndex: 1,
        right: 0,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardDetails: {
        height: 110,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: '100%',
    },
    cardOverLay: {
        height: 280,
        backgroundColor: COLORS.white,
        position: 'absolute',
        zIndex: 100,
        width: cardWidth,
        borderRadius: 15,
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
export default Home;