import React from "react";
import {View, StyleSheet} from 'react-native';

function Box(props)
{
    return <View style={[styles.box, 
        props.rounded? styles.rounded: true, 
        sizes[props.size],
        {
            backgroundColor: props.color,
        },
    ]}/>
}

const styles = StyleSheet.create({
    box:
    {
        width: 64,
        height: 64,
        backgroundColor: 'blue',
    },
    rounded:
    {
        borderRadius:20,
    },
    small:
    {
        width: 30,
        height: 30,
        backgroundColor: 'black',
    },
    medium:
    {
        width: 64,
        height: 64,
    },
    large:
    {
        marginTop: 150,
        width: 150,
        height: 150,
    },
});

const sizes = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
};

export default Box;