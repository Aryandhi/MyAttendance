import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Guru4} from '../../assets';
import {Header, ListTeacher} from '../../components';
import {colors} from '../../utils';

const ChooseTeacher = () => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Dokter Anak" />
      <ListTeacher
        type="next"
        profile={Guru4}
        name="Alexander Jennie"
        desc="Wanita"
      />
      <ListTeacher
        type="next"
        profile={Guru4}
        name="Alexander Jennie"
        desc="Wanita"
      />
      <ListTeacher
        type="next"
        profile={Guru4}
        name="Alexander Jennie"
        desc="Wanita"
      />
      <ListTeacher
        type="next"
        profile={Guru4}
        name="Alexander Jennie"
        desc="Wanita"
      />
      <ListTeacher
        type="next"
        profile={Guru4}
        name="Alexander Jennie"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseTeacher;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
