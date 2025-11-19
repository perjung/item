import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemsListScreen from './src/screens/ItemsListScreen';
import ItemDetailScreen from './src/screens/ItemDetailScreen';
import ItemCreateScreen from './src/screens/ItemCreateScreen';
import ItemEditScreen from './src/screens/ItemEditScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={ItemsListScreen} options={{ title: '아이템 목록' }} />
        <Stack.Screen name="Detail" component={ItemDetailScreen} options={{ title: '아이템 상세' }} />
        <Stack.Screen name="Create" component={ItemCreateScreen} options={{ title: '아이템 생성' }} />
        <Stack.Screen name="Edit" component={ItemEditScreen} options={{ title: '아이템 수정' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});