import {
  child,
  get,
  getDatabase,
  ref,
  query,
  orderByChild,
  limitToLast,
} from '@firebase/database';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Guru1, Guru2, Guru3, ILNullPhoto} from '../../assets';
import {
  TeacherCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedTeacher,
} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, getData, showError} from '../../utils';

const Teacher = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryTeacher, setCategoryTeacher] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [profile, setProfile] = useState({
    photoURL: ILNullPhoto,
    fullName: '',
    profession: '',
  });
  useEffect(() => {
    getNews();
    getCategoryTeacher();
    getTopRatedTeacher();
    getUser();
  }, []);

  const getTopRatedTeacher = () => {
    const db = getDatabase(Fire);

    const topRatedTeacher = query(
      ref(db, 'teachers/'),
      orderByChild('rate'),
      limitToLast(3),
    );

    get(topRatedTeacher)
      .then(value => {
        console.log('top rated teacher: ', value.val());
        if (value.exists()) {
          const oldData = value.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          console.log('data hasil array: ', data);
          setTeachers(data);
        }
      })
      .catch(error => {
        showError(error);
      });
  };

  const getCategoryTeacher = () => {
    const dbRef = ref(getDatabase(Fire));
    get(child(dbRef, `category_teacher/`))
      .then(value => {
        if (value.exists()) {
          setCategoryTeacher(value.val());
        }
      })
      .catch(error => {
        showError(error);
      });
  };

  const getNews = () => {
    const dbRef = ref(getDatabase(Fire));
    get(child(dbRef, `news/`))
      .then(value => {
        if (value.exists()) {
          setNews(value.val());
        }
      })
      .catch(error => {
        showError(error);
      });
  };

  const getUser = () => {
    getData('user').then(res => {
      const data = res;
      data.photoURL =
        res?.photoURL?.length > 1 ? {uri: res.photoURL} : ILNullPhoto;
      setProfile(data);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile
              profile={profile}
              onPress={() => navigation.navigate('UserProfile')}
            />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categoryTeacher.map(item => {
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
            <Text style={styles.sectionLabel}>Guru Favorit</Text>
            {teachers.map(teacher => {
              return (
                <RatedTeacher
                  key={teacher.id}
                  name={teacher.data.fullName}
                  desc={teacher.data.profession}
                  avatar={{uri: teacher.data.photo}}
                  onPress={() => navigation.navigate('TeacherProfile')}
                />
              );
            })}
            <Text style={styles.sectionLabel}>Informasi Absen dan Tugas</Text>
          </View>
          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
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
