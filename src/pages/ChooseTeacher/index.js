import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Guru4} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseTeacher = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Guru Matematika"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={Guru4}
        name="Alexander Jennie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List type="next" profile={Guru4} name="Alexander Jennie" desc="Wanita" />
      <List type="next" profile={Guru4} name="Alexander Jennie" desc="Wanita" />
      <List type="next" profile={Guru4} name="Alexander Jennie" desc="Wanita" />
      <List type="next" profile={Guru4} name="Alexander Jennie" desc="Wanita" />
    </View>
  );
};

export default ChooseTeacher;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
