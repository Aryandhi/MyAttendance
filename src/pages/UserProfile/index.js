import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {colors, getData} from '../../utils';
import {Fire} from '../../config';
import {getAuth, signOut} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photoURL: ILNullPhoto,
  });
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photoURL =
        res?.photoURL?.length > 1 ? {uri: res.photoURL} : ILNullPhoto;
      setProfile(data);
    });
  }, []);

  const signOutApp = () => {
    const auth = getAuth(Fire);
    signOut(auth)
      .then(() => {
        console.log('success sign out');
        navigation.replace('GetStarted');
      })
      .catch(error => {
        showMessage({
          message: error,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          photoURL={profile.photoURL}
        />
      )}
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Bahasa"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Berikan Rating"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Sign Out"
        desc="Last Update Yesterday"
        type="next"
        icon="help"
        onPress={signOutApp}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
