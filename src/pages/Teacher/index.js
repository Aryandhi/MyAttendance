import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  TeacherCategory,
  HomeProfile,
  NewsItem,
  RatedTeacher,
} from '../../components';
import {colors, fonts} from '../../utils';

const Teacher = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
      <TeacherCategory />
      <TeacherCategory />
      <TeacherCategory />
      <TeacherCategory />
      <Text>Top Rated Teachers</Text>
      <RatedTeacher />
      <RatedTeacher />
      <RatedTeacher />
      <Text>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
};

export default Teacher;

const styles = StyleSheet.create({
  page: {paddingVertical: 30, paddingHorizontal: 16},
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
});
