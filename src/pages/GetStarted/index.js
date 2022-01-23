import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
      </View>
      <View>
        <Button
          title="Daftar"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Masuk"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
};
export default GetStarted;
const styles = StyleSheet.create({
  page: {
    padding: 80,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 50,
    fontFamily: fonts.primary[600],
  },
});
