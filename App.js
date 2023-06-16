import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/telas/Home';

export default function App() {
  return (
   <SafeAreaView style={styles.tela}>
    <Home/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1
  }
})