import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import MenuCard from '../components/menuCard';
import { menuDetailedData } from '../global/data';

export  function Route1() {
    return (
        <View style={{flex:1}} >
            <View style={styles.view2}>
                <FlatList
                    style={{backgroundColor:'white'}}
                    data={menuDetailedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item,index})=>(
                        <TouchableOpacity>
                            <MenuCard 
                                productName={item.meal}
                                image={item.image}
                                price={item.price}
                                productDetail={item.details}
                            />
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export const Route2 = ()=>(<View style = {styles.scene}/>)
export const Route3 = ()=>(<View style = {styles.scene}/>)
export const Route4 = ()=>(<View style = {{...styles.scene,backgroundColor:"green"}}/>)
export const Route5 = ()=>(<View style = {styles.scene}/>)
export const Route6 = ()=>(<View style = {styles.scene}/>)
export const Route7 = ()=>(<View style = {styles.scene}/>)
export const Route8 = ()=>(<View style = {styles.scene}/>)

const styles=StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: '#673ab7'
      },
    
    view2:{marginTop:5,
          paddingBottom:20
        },
    
    scene2: { backgroundColor: '#673ab7' }  
})