import React from 'react';
import {View, Button} from 'react-native';

export default function HomeScreen({navigation})
{
    return(
        <View>
            <Button title ="상세보기 열기 1"  onPress={()=> navigation.push('Detail', {id: 1})}/>
            <Button title ="상세보기 열기 2"  onPress={()=> navigation.push('Detail', {id: 2})}/>
            <Button title ="상세보기 열기 3"  onPress={()=> navigation.push('Detail', {id: 3})}/>
            <Button title ="상세보기 열기 4"  onPress={()=> navigation.push('Detail', {id: 4})}/>
        </View>
    );
}