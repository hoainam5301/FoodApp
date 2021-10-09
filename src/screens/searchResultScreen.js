import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import SearchResultCard from "../components/searchResultCard";
import { restaurantsData } from "../global/data";
import { colors } from "../global/styles";

export default function SearchResultScreen({ navigation, route }) {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ backgroundColor: colors.cardbackground }}
                data={restaurantsData}
                key={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <SearchResultCard
                        screenWidth={Dimensions.get('window').width}
                        images={item.images}
                        averageReview={item.averageReview}
                        numberOfReview={item.numberOfReview}
                        restaurantName={item.restaurantName}
                        farAway={item.farAway}
                        businessAddress={item.businessAddress}
                        productData={item.productData}
                        OnPressRestaurantCard={() => { navigation.navigate("RestaurantHomeScreen", { id: index, restaurant: item.restaurantName }) }}
                    />
                )}
                ListHeaderComponent={<View>
                    <Text style={styles.listHeader}> {restaurantsData.length} Search Result {route.params.item} </Text>
                </View>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 12,
    },
    listHeader: {
        color: colors.grey1,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: "bold"
    }
})