import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {Fire} from '../../config';
import {colors, showError, storeData, useForm} from '../../utils';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onContinue = () => {
    dispatch({type: 'SET_LOADING', value: true});
    const auth = getAuth(Fire);
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');
        const user = userCredential.user;
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: userCredential.user.uid,
        };

        const db = getDatabase(Fire);
        set(ref(db, `users/${user.uid}/`), data);

        storeData('user', data);
        navigation.navigate('MainApp', data);
      })

      .catch(error => {
        const errorMessage = "Coba Lagi, dan pastikan semua inputan sesuai ya.."
        dispatch({type: 'SET_LOADING', value: false});
        showError(errorMessage);
      });
  };
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
            placeholder="Sesuai nama KTP"
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.profession}
            onChangeText={value => setForm('profession', value)}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
            placeholder="saya@gmail.com"
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
            placeholder="min 6 karakter"
          />
          <Gap height={24} />
          <Button title="Lanjutkan" onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  );
};
export default Register;
const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 0},
});
