import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Pressable, Linking } from 'react-native';
import GlobalStyles from '../../GlobalStyles';
import PlanetHeader from '../components/planet-header/planet-header';
import String from '../components/text/text';
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function Details({ route }) {
  const { planet } = route.params;

  const renderImage = (name) => {
    switch (name) {
      case 'mercury':
        return <MercurySvg />;
      case 'earth':
        return <EarthSvg />;
      case 'jupiter':
        return <JupiterSvg />;
      case 'mars':
        return <MarsSvg />;
      case 'neptune':
        return <NeptuneSvg />;
      case 'saturn':
        return <SaturnSvg />;
      case 'uranus':
        return <UranusSvg />;
      case 'venus':
        return <VenusSvg />;
      default:
        break;
    }
  }

  const PlanetSection = ({ title, value }) => {
    return (
      <View style={styles.planet}>
        <String>{title}</String>
        <String preset='h2'>{value}</String>
      </View>
    )
  }

  const pressLink = (wikilink) =>{
    Linking.openURL(wikilink)
  }

  return (
    <SafeAreaView style={[GlobalStyles.droidSafeArea]} >
      <PlanetHeader backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>
          {renderImage(planet.name)}
        </View>
        <View style={styles.detailsView}>
          <String style={styles.planetName} preset='h1'>
            {planet.name}
          </String>
          <String preset='h3' style={styles.description}>
            {planet.description}
          </String>
          <Pressable style={styles.source} onPress={()=> pressLink(planet.wikiLink)}>
            <String>
              Source:
            </String>
            <String preset='h3' style={styles.wikipedia}>
              Wikipedia
            </String>
          </Pressable>
        </View>
        <View style={styles.planetSectionWrapper}>
          <PlanetSection title="ROTATION TIME" value={planet.rotationTime} />
          <PlanetSection title="REVOLUTION TIME" value={planet.revolutionTime} />
          <PlanetSection title="RADIOUS" value={planet.radius} />
          <PlanetSection title="AVERAGE TEMP" value={planet.avgTemp} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageView: {
    padding: spacing[5],
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailsView: {
    padding: spacing[7],
    alignItems: 'center'
  },
  planetName: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  description: {
    marginTop: 20,
    lineHeight: 25
  },
  source: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  wikipedia: {
    textTransform: 'uppercase',
    marginStart: 10,
    textDecorationLine: 'underline'
  },
  planet: {
    borderWidth: 1,
    borderColor: colors.gray,
    padding: spacing[7],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 20,
    paddingHorizontal: 20

  },
  planetSectionWrapper:{
    marginBottom: 20
  }
})