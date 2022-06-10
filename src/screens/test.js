import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import GlobalStyles from '../../GlobalStyles';

export default function Test() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Text style={{color: 'white'}}>Test Tab Naviagation</Text>
     </SafeAreaView>
  );
}
