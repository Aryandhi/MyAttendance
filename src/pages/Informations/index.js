import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ListInformation} from '../../components';
import {colors, fonts} from '../../utils';
import {DummySch1, DummySch2, DummySch3, ILSMKBG} from '../../assets';

const Informations = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILSMKBG} style={styles.background}>
        <Text style={styles.title}>Media Informasi</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListInformation
          type="Penerimaan Siswa Baru"
          name="SMK 2 Mei"
          address="Bandar Lampung"
          pic={DummySch1}
        />
        <ListInformation
          type="Juara Lomba"
          name="SMK 2 Mei juarai liga futsal"
          address="Teknokrat, Bandar Lampung"
          pic={DummySch2}
        />
        <ListInformation
          type="Mobil Rakitan Siswa"
          name="Wagub kunjungi SMK 2 Mei"
          address="Bandar Lampung"
          pic={DummySch3}
        />
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
