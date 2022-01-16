import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  TeacherCategory,
  HomeProfile,
  NewsItem,
  RatedTeacher,
} from '../../components';
const Teacher = () => {
  return (
    <View>
      <HomeProfile />
      <Text>Mau konsultasi dengan siapa hari ini?</Text>
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

const styles = StyleSheet.create({});
