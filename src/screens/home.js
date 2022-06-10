import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, Pressable, TextInput } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import PlanetHeader from '../components/planet-header/planet-header';
import String from '../components/text/text';
import { colors } from '../theme/colors';
import { PLANET_LIST } from '../data/planet-list';
import { spacing } from '../theme/spacing';
import { AntDesign } from '@expo/vector-icons';


export default function Home({ navigation }) {

  const [lists, setLists] = useState(PLANET_LIST);
  const searchInput = (search) =>{
    const seacrchInput = PLANET_LIST.filter(name =>{
      const searchTest = search.toLowerCase();
      const nameSearch = name.name.toLowerCase();

      return nameSearch.indexOf(searchTest) > -1;
    })
    setLists(seacrchInput);
  }
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <PlanetHeader />
      <View style={{paddingHorizontal: 15}}>
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          autoCapitalize="none"
          onChangeText = {(search)=>{searchInput(search)}}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.list}
        data={lists}
        keyExtractor={item => item.name}
        renderItem={({ item, index }) => {
          return (
            <Pressable onPress={() => {
              navigation.navigate('Details', { planet: item })
            }} style={styles.item}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={[styles.circle, { backgroundColor: item.color }]}></View>
                <String preset='h2' style={styles.itemName}>{item.name}</String>
              </View>
              <AntDesign name="right" size={24} style={{ color: 'white' }} />
            </Pressable>)
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    padding: spacing[6]
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[5]
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  list: {
    padding: spacing[6]
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.6
  },
  input: {
    marginVertical: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 20
  }
})