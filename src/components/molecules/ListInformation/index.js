import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummySch1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListHospital = () => {
  return (
    <View style={styles.container}>
      <Image source={DummySch1} style={styles.picture} />
      <View>
        <Text style={styles.title}>Penerimaan Siswa Baru</Text>
        <Text style={styles.title}>SMK 2 Mei</Text>
        <Text style={styles.address}>Bandar Lampung</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  picture: {width: 80, height: 60, borderRadius: 11, marginRight: 16},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
