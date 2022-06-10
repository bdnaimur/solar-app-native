import { StyleSheet, Platform } from 'react-native';
import { colors } from './src/theme/colors';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
});