import React from "react";
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function DateHead({date})
{

    const year = date.getFullYear();
    const month = date.getMonth() +1;
    const day = date.getDate();

    const {top} = useSafeAreaInsets();

    //const format= `${year} 년 ${month} ${day}일`;
    return(
        <>
        <View style={[styles.statusbarPlaceholder ,{height:top}]}/>
        <StatusBar backgroundColor = "#26a69a" />
            <View style = {styles.block}>
                <Text style={styles.dateText}>  {year} 년 {month}월 {day}일 </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    block:{
        padding: 16,
        backgroundColor: '#26a69a',
    },
    dateText:{
        fontSize: 24,
        color:'white',
    },
    statusbarPlaceholder:{
        backgroundColor:'#26a69a',
    },
});

export default DateHead;