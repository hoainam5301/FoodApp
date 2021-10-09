import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { FlatList, Text, TouchableWithoutFeedback, View } from "react-native";
import SearchComponent from "../components/searchComponent";
import { filterData2 } from "../global/data";
import { colors } from "../global/styles";

export default function SearchScreen({navigation}) {
    return (
        <View style={{ flex: 1,marginBottom: 12 }} >
            <SearchComponent />
            <View style={{marginTop:16}} >
                <FlatList
                    style={{ marginBottom: 1 }}
                    data={filterData2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback 
                        onPress={()=>{
                            navigation.navigate("SearchResultScreen",{item:item.name})
                        }}
                        >
                            <View style={styles.imageView}>
                                <ImageBackground
                                    style={styles.image}
                                    source = {{uri:item.image}}
                                >
                                    <View style={styles.textView}>
                                        <Text style={{color:colors.cardbackground}}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    key={2}
                    ListHeaderComponent={<Text style={styles.listHeader}>Top Categories</Text>}
                    ListFooterComponent={<Footer/>}
                />
            </View>
        </View>
    )
}

const Footer=()=>{
    return(
        <View style={{ marginBottom: 35 }} >
            <View style={{marginTop:16}} >
                <FlatList
                    style={{ marginBottom: 1 }}
                    data={filterData2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback >
                            <View style={styles.imageView}>
                                <ImageBackground
                                    style={styles.image}
                                    source = {{uri:item.image}}
                                >
                                    <View style={styles.textView}>
                                        <Text style={{color:colors.cardbackground}}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    key={2}
                    ListHeaderComponent={<Text style={styles.listHeader}>More Categories</Text>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    imageView: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width * 0.4475,
        height: Dimensions.get('window').width * 0.4475,
        marginLeft: Dimensions.get('window').width * 0.035,
        marginBottom: Dimensions.get('window').width * 0.035
    },

    image: {
        height: Dimensions.get('window').width * 0.4475,
        width: Dimensions.get('window').width * 0.4475,
        borderRadius: 10,
    },

    listHeader: {
        fontSize: 16,
        color: colors.grey2,
        paddingBottom: 10,
        marginLeft: 12

    },

    textView: {
        height: Dimensions.get('window').width * 0.4475,
        width: Dimensions.get('window').width * 0.4475,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(52, 52, 52,0.3)'
    },


})