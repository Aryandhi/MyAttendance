import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Guru1, Guru2, Guru3} from '../../assets';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [teachers] = useState([
    {
      id: 1,
      profile: Guru1,
      name: 'Hendro Junawarko',
      desc: 'Baik Pak, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: Guru2,
      name: 'Sri',
      desc: 'Oh tentu saja tidak karena tugas it...',
    },
    {
      id: 3,
      profile: Guru3,
      name: 'Maya',
      desc: 'Oke menurut Bu guru bagaimana unt...',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {teachers.map(teacher => {
          return (
            <List
              key={teacher.id}
              profile={teacher.profile}
              name={teacher.name}
              desc={teacher.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
