import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button,View } from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';


export default function App() {
  
  const [visible, setVisible] = useState(true);
  const onPress = ()=>{
    setVisible(!visible);
  };
  return(
    <SafeAreaView>    
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
       <Button title='TEST' onPress={onPress} styles={styles.container}/> 
       {visible ?<Box rounded={true} size ="large" color = "blue"/> : null }
       </View>
    </SafeAreaView>
  );
  /*
  return (
    <View style={styles.container}>
      <Greeting/>
      <Box rounded={true} size="large" color='green'/>
      <StatusBar style="auto" />
    </View>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    flex:1 ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
