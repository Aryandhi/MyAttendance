import {child, get, getDatabase, ref} from '@firebase/database';
import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ListInformation} from '../../components';
import {colors, fonts} from '../../utils';
import {ILSMKBG} from '../../assets';
import {Fire} from '../../config';

const Information = () => {
  const [informations, setInformations] = useState([]);
  useEffect(() => {
    const dbRef = ref(getDatabase(Fire));
    get(child(dbRef, 'informations/'))
      .then(value => {
        if (value.exists()) {
          setInformations(value.val());
        }
      })
      .catch(error => {
        showError(error);
      });
  }, []);
  return (
    <View style={styles.page}>
      <ImageBackground source={ILSMKBG} style={styles.background}>
        <Text style={styles.title}>Media Informasi</Text>
      </ImageBackground>
      <View style={styles.content}>
        {informations.map(item => {
          return (
            <ListInformation
              key={item.id}
              type={item.type}
              name={item.name}
              address={item.address}
              pic={item.pic}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Information;

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
