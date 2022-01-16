import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILSMKBG} from '../../assets';
import {ListInformation} from '../../components';
import {colors, fonts} from '../../utils';

const Informations = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILSMKBG} style={styles.background}>
        <Text style={styles.title}>Media Informasi</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListInformation />
        <ListInformation />
        <ListInformation />
      </View>
    </View>
  );
};

export default Informations;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.black,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
