import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';
import {Guru1} from '../../../assets';

const DarkProfile = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>Hendro Junawarko</Text>
        <Text style={styles.desc}>Guru Matematika</Text>
      </View>
      <Image source={Guru1} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {flex: 1, alignItems: 'center'},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    marginTop: 6,
    color: colors.text.subTitle,
  },
});
