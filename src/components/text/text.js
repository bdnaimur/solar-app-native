import { View, Text as RNTEXT, StyleSheet } from 'react-native';
import { presets } from './text.preset';

export default function String({children, preset = 'default', style}) {
   const textStyles =  StyleSheet.compose(presets[preset], style);
  return (
    <View>
      <RNTEXT style={textStyles}>{children}</RNTEXT>
     </View>
  );
}
