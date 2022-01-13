import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Empty()
{
    return(
        <View style = {styles.block}>
            <Image source={{uri:'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E'}}
             style = {styles.image}/>
            <Text style = {styles.desctiption}> 야호!!!! 소리질러~~!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    desctiption:{
        fontSize: 24,
        color:'#9e9e9e'
    },
    image:{
        width: 240,
        height:179,
        marginBottom: 16,
    },
});
