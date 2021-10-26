import React from "react";
import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import HomeHeader from "../components/homeHeader";
import { colors } from "../global/styles";
import { filterData, restaurantsData } from "../global/data";
import FoodCard from "../components/foodCard";
import CountDown from "react-native-countdown-component";


export default function HomeScreen({ navigation }) {

    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")

    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'white', paddingVertical: 12, }}>
                        <TouchableOpacity onPress={() => {
                            setDelivery(true)
                        }} >
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.button : colors.grey5 }} >
                                <Text style={styles.deliveryText} >Delivery</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            setDelivery(false)
                        }}>
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.grey5 : colors.button }} >
                                <Text style={styles.deliveryText} >Pick Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 12 }}>
                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: colors.grey4,
                        paddingHorizontal: 24,
                        width: 340,
                        paddingVertical: 6,
                        marginVertical: 12,
                        justifyContent: 'space-evenly',
                        borderRadius: 24,
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Icon type="material-community"
                                name="map-marker"
                                color={colors.grey1}
                                size={26}
                            />
                            <Text>Location In This Areaaaaaaa</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.cardbackground, borderRadius: 16, paddingHorizontal: 6, paddingVertical: 3, marginHorizontal: 3 }} >
                            <Icon type="material-community"
                                name="clock-time-four"
                                color={colors.grey1}
                                size={26}
                            />
                            <Text>Time</Text>
                        </View>
                    </View>
                    <View>
                        <Icon type="material-community"
                            name="tune"
                            color={colors.grey1}
                            size={30}
                        />
                    </View>
                </View>
                <View style={{ backgroundColor: colors.grey5, height: 32 }}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, }}>
                        <Text style={{ marginLeft: 15, fontSize: 20, marginRight: 5 }} >Option Changing In  </Text>
                        <CountDown
                            until={864000}
                            style={18}
                            digitStyle={{ backgroundColor: "lightgreen" }}
                            timeToShow={['D', 'H', 'M', 'S']}
                            timeLabels={{ d: 'Days', h: 'Hours', m: 'Min', s: 'Sec' }}
                        />
                    </View>
                    <FlatList
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        extraData={indexCheck}
                        renderItem={({ item, index }) => (
                            <Pressable onPress={() => { setIndexCheck(item.id) }}>
                                <View style={indexCheck === item.id ? { ...styles.smalCardSelect } : { ...styles.smalCard }} >
                                    <Image style={{ height: 60, width: 60, borderRadius: 48 }} source={item.image} />
                                    <Text style={indexCheck === item.id ? { ...styles.smalCardTextSelect } : { ...styles.smalCardText }} >{item.name}</Text>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
                <View style={{ backgroundColor: colors.grey5, height: 32 }}>
                    <Text style={styles.headerText}>Free Delivery Now</Text>
                </View>
                <View>
                    <FlatList style={{ marginTop: 10, marginBottom: 10 }}
                        horizontal={true}
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <FoodCard
                                    screenWidth={Dimensions.get('window').width * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    numberOfReview={item.numberOfReview}
                                    businessAddress={item.businessAddress}
                                    farAway={item.farAway}
                                    averageReview={item.averageReview}

                                />
                            </View>
                        )}
                    />
                </View>
                <View style={{ backgroundColor: colors.grey5, height: 32 }}>
                    <Text style={styles.headerText}>Fast Delivery</Text>
                </View>
                <View>
                    <FlatList style={{ marginTop: 10, marginBottom: 10 }}
                        horizontal={true}
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <FoodCard
                                    screenWidth={Dimensions.get('window').width * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    numberOfReview={item.numberOfReview}
                                    businessAddress={item.businessAddress}
                                    farAway={item.farAway}
                                    averageReview={item.averageReview}

                                />
                            </View>
                        )}
                    />
                </View>
                <View style={{ backgroundColor: colors.grey5, height: 32 }}>
                    <Text style={styles.headerText}>Thich Delivery</Text>
                </View>
                <View style={{ width: Dimensions.get('window').width, paddingTop: 10, }} >
                    {
                        restaurantsData.map(item => (
                            <View key={item.id} style={{ paddingBottom: 20, }} >
                                <FoodCard
                                    screenWidth={Dimensions.get('window').width * 0.95}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    numberOfReview={item.numberOfReview}
                                    businessAddress={item.businessAddress}
                                    farAway={item.farAway}
                                    averageReview={item.averageReview}

                                />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            {delivery &&
                <View style={styles.floatButton}>
                    <TouchableOpacity onPress={() => { navigation.navigate("RestaurantMapScreen") }} >
                        <Icon
                            name="place"
                            type="material"
                            size={32}
                            color={colors.button}
                            style={{ marginTop: 3 }}
                        />
                        <Text style={{ color: colors.grey2, alignItems: 'center' }} >Map</Text>
                    </TouchableOpacity>
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    deliveryButton: {
        paddingHorizontal: 12,
        borderRadius: 24,
        paddingVertical: 5,
        width: 110,
        alignItems: 'center'
    },
    deliveryText: {
        fontSize: 18,
        fontWeight: '400',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: colors.grey2,
        paddingLeft: 14,
        fontWeight: 'bold'
    },
    smalCard: {
        borderRadius: 24,
        backgroundColor: colors.cardbackground,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100,
    },
    smalCardSelect: {
        borderRadius: 24,
        backgroundColor: colors.button,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100,
    },
    smalCardTextSelect: {
        fontWeight: 'bold',
        color: colors.cardbackground,
        fontSize: 16
    },
    smalCardText: {
        fontWeight: 'bold',
        color: "black",
        fontSize: 16
    },
    floatButton: {
        position: 'absolute',
        bottom: 10, right: 15,
        backgroundColor: 'white',
        elevation: 10,
        width: 60, height: 60,
        borderRadius: 30,
        alignItems: 'center'
    }
})