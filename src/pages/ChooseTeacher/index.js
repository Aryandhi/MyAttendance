import {
  equalTo,
  get,
  getDatabase,
  orderByChild,
  query,
  ref,
} from '@firebase/database';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Guru1} from '../../assets';
import {Header, List} from '../../components';
import {Fire} from '../../config';
import {colors, showError} from '../../utils';

const ChooseTeacher = ({navigation, route}) => {
  const itemCategory = route.params;
  const [listTeacher, setListTeacher] = useState([]);
  useEffect(() => {
    callTeacherByCategory(itemCategory.category);
  }, []);

  const callTeacherByCategory = category => {
    const db = getDatabase(Fire);

    const listTeacher = query(
      ref(db, 'teachers/'),
      orderByChild('category'),
      equalTo(category),
    );

    get(listTeacher)
      .then(value => {
        if (value.exists()) {
          const oldData = value.val();
          const data = [];
          Object.keys(oldData).map(item => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          setListTeacher(data);
        }
      })
      .catch(error => {
        showError(error);
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title={`Pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}
      />
      {listTeacher.map(teacher => {
        return (
          <List
            type="next"
            key={teacher.id}
            profile={{uri: teacher.data.photo}}
            name={teacher.data.fullName}
            desc={teacher.data.gender}
            onPress={() => navigation.navigate('TeacherProfile', teacher)}
          />
        );
      })}
    </View>
  );
};

export default ChooseTeacher;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
