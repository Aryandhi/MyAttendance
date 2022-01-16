import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Guru1, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedTeacher = () => {
  return (
    <View style={styles.container}>
      <Image source={Guru1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Hendro Junawarko</Text>
        <Text style={styles.category}>Matematika</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
};

export default RatedTeacher;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2, marginRight: 12},
  rate: {flexDirection: 'row', alignItems: 'center'},
  profile: {flex: 1, justifyContent: 'center'},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
