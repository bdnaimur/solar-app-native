import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import String from '../text/text';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export default function PlanetHeader({backBtn}) {
  const navigation = useNavigation()
  return (
    <View style={[styles.container, {display: 'flex', flexDirection: 'row',alignItems:'center'}]}>
      {backBtn && 
      <Pressable onPress = {()=>{
        navigation.goBack();
      }}>
        <Ionicons style={{marginRight: 20, marginTop:5}} name="arrow-back-circle-outline" size={30} color="white" />
      </Pressable>
      }
      <String preset="h2" >The Planet</String>
     </View>
  );
}
const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: .5,
        borderBottomColor: colors.white,
    }
})
