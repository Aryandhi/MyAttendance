import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {User1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={User1} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>Ardi Wibowo</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  userInfo: {justifyContent: 'center'},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
