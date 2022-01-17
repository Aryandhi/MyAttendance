import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const TeacherProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile name="Hendro Junawarko Spd" desc="Matematika" />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Universitas Indonesia, 2015" />
      <ProfileItem label="SMK 2 Mei" value="Jl ZA Pagar Alam, Bandar Lampung" />
      <ProfileItem label="NIP." value="0000116622081996" />
      <View style={styles.action}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default TeacherProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
});
