import { StatusBar } from 'expo-status-bar';
import {SafeAreaView ,StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DateHead from './Components/DateHead';
import AddTodo from './Components/AddTodo';
import Empty from './Components/Empty';
import { useState } from 'react';

export default function App() {

  const today = new Date();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style = {styles.block}>
        <KeyboardAvoidingView behavior={Platform.select({ios:'padding', android:'undefind'})} style={styles.avoid}>
          <DateHead date={today}/>
            <Empty/>
            <AddTodo/>
        </KeyboardAvoidingView>
      </SafeAreaView>          
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor:'white',
  },
  avoid: {
    flex: 1,
  },
});
