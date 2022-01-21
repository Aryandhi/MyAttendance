import {getDatabase, push, ref, set, onValue} from '@firebase/database';
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
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const chatID = `${user.uid}_${dataTeacher.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;

    const db = getDatabase(Fire);
    const getChat = ref(db, urlFirebase);
    onValue(getChat, snapshot => {
      if (snapshot.exists()) {
        const dataSnapshot = snapshot.val();
        const allDataChat = [];
        Object.keys(dataSnapshot).map(key => {
          const dataChat = dataSnapshot[key];
          const newDataChat = [];

          Object.keys(dataChat).map(itemChat => {
            newDataChat.push({
              id: itemChat,
              data: dataChat[itemChat],
            });
          });

          allDataChat.push({
            id: key,
            data: newDataChat,
          });
        });
        console.log('all data chat: ', allDataChat);
        setChatData(allDataChat);
      }
    });
  }, [dataTeacher.data.uid, user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  const chatSend = () => {
    console.log('user: ', user);
    const today = new Date();
    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    const chatID = `${user.uid}_${dataTeacher.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    const urlMessageUser = `messages/${user.uid}/${chatID}`;
    const urlMessageTeacher = `messages/${dataTeacher.data.uid}/${chatID}`;
    const dataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataTeacher.data.uid,
    };
    const dataHistoryChatForTeacher = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };
    const db = getDatabase(Fire);
    const allChatList = ref(db, urlFirebase);
    const newChat = push(allChatList);
    set(newChat, data)
      .then(() => {
        setChatContent('');
        // set history for user
        set(ref(db, urlMessageUser), dataHistoryChatForUser);

        // set history for teacher
        set(ref(db, urlMessageTeacher), dataHistoryChatForTeacher);
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
          {chatData.map(chat => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map(itemChat => {
                  return (
                    <ChatItem
                      key={itemChat.id}
                      isMe={isMe}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                      photo={isMe ? null : {uri: dataTeacher.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        teacherName={dataTeacher.data.fullName}
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
