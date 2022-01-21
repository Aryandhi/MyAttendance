import {getDatabase, push, ref, set, onValue} from '@firebase/database';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Guru1, Guru2, Guru3} from '../../assets';
import {List} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {Fire} from '../../config';

const Messages = ({navigation}) => {
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
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const urlHistory = `messages/${user.uid}/`;
    const db = getDatabase(Fire);
    const getHistoryChat = ref(db, urlHistory);
    onValue(getHistoryChat, snapshot => {
      if (snapshot.exists()) {
        const oldData = snapshot.val();
        const data = [];
        Object.keys(oldData).map(key => {
          data.push({
            id: key,
            ...oldData[key],
          });
        });
        console.log('new data history: ', data);
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
        <Text style={styles.title}>Messages</Text>
        {historyChat.map(chat => {
          return (
            <List
              key={chat.id}
              profile={chat.uidPartner}
              name={chat.uidPartner}
              desc={chat.uidPartner}
              onPress={() => navigation.navigate('Chatting')}
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
