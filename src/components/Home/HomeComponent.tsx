import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

const HomeComponent = () => {
  
  return (
    <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logo: {
    width: 50,
    height: 50
  }
});


export default HomeComponent;
