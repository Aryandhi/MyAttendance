import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  TeacherCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedTeacher,
} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {Guru1, Guru2, Guru3, JSONCategoryTeacher} from '../../assets';

const Teacher = ({navigation}) => {
  useEffect(() => {
    getData('user').then(res => {
      console.log('data user: ', res);
    });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONCategoryTeacher.data.map(item => {
                  return (
                    <TeacherCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseTeacher')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Teachers</Text>
            <RatedTeacher
              name="Hendro Junawarko Spd"
              desc="Matematika"
              avatar={Guru1}
              onPress={() => navigation.navigate('TeacherProfile')}
            />
            <RatedTeacher
              name="Sri Pudji Spd"
              desc="Kimia"
              avatar={Guru2}
              onPress={() => navigation.navigate('TeacherProfile')}
            />
            <RatedTeacher
              name="Ratna Spd"
              desc="Fisika"
              avatar={Guru3}
              onPress={() => navigation.navigate('TeacherProfile')}
            />
            <Text style={styles.sectionLabel}>Informasi Absensi dan Tugas</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Teacher;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {paddingHorizontal: 16},
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
