import {child, get, getDatabase, onValue, ref} from '@firebase/database';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, getData} from '../../utils';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const urlHistory = `messages/${user.uid}/`;
    const db = getDatabase(Fire);
    const getHistoryChat = ref(db, urlHistory);
    onValue(getHistoryChat, async snapshot => {
      if (snapshot.exists()) {
        const oldData = snapshot.val();
        const data = [];
        const promises = await Object.keys(oldData).map(async key => {
          const urlUidTeacher = `teachers/${oldData[key].uidPartner}`;
          const dbRef = ref(getDatabase(Fire));
          const detailTeacher = await get(child(dbRef, urlUidTeacher));
          // console.log('detail teachers: ', detailTeacher.val());
          data.push({
            id: key,
            detailTeacher: detailTeacher.val(),
            ...oldData[key],
          });
        });

        await Promise.all(promises);

        // console.log('new data history: ', data);
        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Pesan</Text>
        {historyChat.map(chat => {
          const dataTeacher = {
            id: chat.detailTeacher.uid,
            data: chat.detailTeacher,
          };
          return (
            <List
              key={chat.id}
              profile={{uri: chat.detailTeacher.photo}}
              name={'Guru ' + chat.detailTeacher.fullName}
              desc={chat.lastContentChat}
              onPress={() => navigation.navigate('Chatting', dataTeacher)}
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
