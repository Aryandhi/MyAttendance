import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const TeacherProfile = ({navigation, route}) => {
  const dataTeacher = route.params;
  return (
    <View style={styles.page}>
      <Header title="Profil Guru" onPress={() => navigation.goBack()} />
      <Profile
        name={dataTeacher.data.fullName}
        desc={dataTeacher.data.profession}
        // photoURL={{uri: dataTeacher.data.photo}}
      />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value={dataTeacher.data.university} />
      <ProfileItem
        label="Tempat Mengajar"
        value={dataTeacher.data.school_address}
      />
      <ProfileItem label="No. STR" value={dataTeacher.data.str_number} />
      <View style={styles.action}>
        <Button
          title="Mulai Tanya Guru"
          onPress={() => navigation.navigate('Chatting', dataTeacher)}
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
