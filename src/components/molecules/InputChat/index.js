import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from '../../atoms';
import {colors, fonts} from '../../../utils';

const InputChat = ({value, teacherName, onChangeText, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Tulis pesan untuk ${teacherName}`}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        disable={value.length < 1}
        type="btn-icon-send"
        onPress={onButtonPress}
      />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {padding: 16, flexDirection: 'row', backgroundColor: colors.white},
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
