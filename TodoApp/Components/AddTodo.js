import React, {useState} from "react";
import {View, Image, StyleSheet, 
    TextInput,  TouchableOpacity, 
    Platform, TouchableNativeFeedback} from "react-native";

export default function AddTodo()
{
    const [text, setText] = useState('');
    const button=(
        <View style={styles.buttonStyle}>
            <Image source={require('../assets/icons/add_white/add_white.png')} />
        </View>)
        ;
    console.log(text);

    return (
        <View style={styles.block}>
            <TextInput 
            placeholder="할 일을 입력 하세요" 
            style={styles.input}
            value={text}
            onChangeText={setText}
            />

            {
                Platform.select({
                    ios: <TouchableOpacity activeOpacity={0.5}>  {button} </TouchableOpacity>,
                    android:(
                        <View style = {styles.circleWrapper}>
                            <TouchableNativeFeedback activeOpacity={0.5}>
                                {button}
                            </TouchableNativeFeedback>
                        </View>
                    )

            })}

        </View>
    );
}

const styles = StyleSheet.create({
    block:
    {
        backgroundColor:'red',
        height: 64,
        paddingHorizontal:16,
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth:1,
        alignItems:'center',
        flexDirection:'row',
        //backgroundColor:'red',
        //justifyContent:'center',
    },
    input:
    {
        flex:1,
        fontSize: 16,
        paddingVertical:8,
    },
    buttonStyle:
    {
        alignItems:'center',
        justifyContent:'center',
        width:48,
        height:48,
        backgroundColor:'#26a69a',
        borderRadius: 24,
    },
    circleWrapper:
    {
        overflow:'hidden',
        borderRadius:24,
    },
});