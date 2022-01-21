import {getDatabase, push, ref, set} from '@firebase/database';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {Fire} from '../../config';
import {
  colors,
  fonts,
  getData,
  showError,
  getChatTime,
  setDateChat,
} from '../../utils';

const Chatting = ({navigation, route}) => {
  const dataTeacher = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then(res => {
      console.log('user login: ', res);
      setUser(res);
    });
  }, []);

  const chatSend = () => {
    console.log('user: ', user);
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };
    const chatID = `${user.uid}_${dataDoctor.data.uid}`;

    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    console.log('chat yang akan dikirim: ', data);
    console.log('url: ', urlFirebase);
    // kirim ke firebase
    const db = getDatabase(Fire);
    const allChatList = ref(db, urlFirebase);
    const newChat = push(allChatList);
    set(newChat, data)
      .then(() => {
        setChatContent('');
      })
      .catch(error => {
        showError(error);
      });
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title={dataTeacher.data.fullName}
        desc={dataTeacher.data.profession}
        photo={{uri: dataTeacher.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Senin, 21 Maret, 2021</Text>
          <ChatItem isMe />
          <ChatItem />
          <ChatItem isMe />
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
