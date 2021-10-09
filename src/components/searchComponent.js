import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Modal, TextInput, FlatList, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import { colors } from "../global/styles";
import { filterData } from "../global/data";
import { useNavigation } from "@react-navigation/native";
import { filter } from "lodash";



export default function SearchComponent() {
    const navigation=useNavigation();
    const [data, setData] = useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocus, setTextInPutFocus] = useState(true)
    const textInput = useRef(0)

    const contains=({name},query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }

    const handleSearch=text=>{
        const dataS=filter(filterData,user=>{
            return contains(user,text)
        })
        setData([...dataS])
    }

    
    return (
        <View style={{ alignItems: 'center' }} >
            <TouchableWithoutFeedback onPress={() => { setModalVisible(true) }} >
                <View style={styles.SearchArea}>
                    <Icon
                        type="material"
                        style={styles.searchIcon}
                        name="search"
                        iconStyle={{ marginLeft: 5 }}
                        size={32}
                    />
                    <Text style={{ fontSize: 16 }}>What are you locking for?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType="false"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.TextInput}>
                            <Animatable.View 
                                animation={textInputFocus ? "fadeInRight" : "fadeInLeft"}
                                duration={800}
                            >
                                <Icon
                                    type="material"
                                    style={styles.icon2}
                                    onPress={() => {
                                        if (textInputFocus)
                                            setModalVisible(false)
                                        setTextInPutFocus(false)
                                    }}
                                    name={textInputFocus ? "arrow-back" : "search"}
                                    iconStyle={{ marginLeft: 5 }}
                                    size={32}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{ width: "90%" }}
                                placeholder=""
                                autoFocus={false}
                                ref={textInput}
                                onFocus={()=>{
                                    setTextInPutFocus(true)
                                }}
                                onBlur={()=>{
                                    setTextInPutFocus(false)
                                }}
                                onChangeText={handleSearch}
                            />
                            <Animatable.View 
                                 animation={textInputFocus ? "fadeInLeft" : ""}
                                 duration={800}
                            >
                                <Icon
                                    name={textInputFocus ? "cancel" : null}
                                    iconStyle={{ color: colors.grey3 }}
                                    type="material"
                                    style={{ marginRight: -10 }}
                                    onPress={() => {
                                        textInput.current.clear()
                                        // handleSearch()          
                                    }}
                                />
                            </Animatable.View>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress = {() => {
                                Keyboard.dismiss
                                navigation.navigate("SearchResultScreen", { item: item.name })
                                setModalVisible(false)
                                setTextInPutFocus(true)
                            }} >
                                
                                <View style={styles.view2}>
                                    <Text style={{ color: colors.grey2, fontSize: 15 }}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10

    },

    SearchArea: {
        marginTop: 10,
        width: "94%",
        height: 50,
        backgroundColor: colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey4,
        flexDirection: "row",
        alignItems: "center"
    },

    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },

    view1: {
        height: 70,
        justifyContent: "center",

        paddingHorizontal: 10,
    },

    view2: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },

    icon2: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },
    modal: {
        flex: 1
    }
})