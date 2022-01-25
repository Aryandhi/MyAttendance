import {getAuth, signInWithEmailAndPassword} from '@firebase/auth';
import {getDatabase, onValue, ref} from '@firebase/database';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, showError, storeData, useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    const auth = getAuth(Fire);
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch({type: 'SET_LOADING', value: false});
        const db = getDatabase(Fire);
        onValue(
          ref(db, `users/${user.uid}/`),
          value => {
            if (value.exists()) {
              storeData('user', value.val());
              navigation.replace('MainApp');
            }
          },
          {
            onlyOnce: true,
          },
        );
      })
      .catch(error => {
        const errorMessage = "Email/Password belum tepat, coba lagi atau hubungi admin kami (08xx45xx87xx)"

        dispatch({type: 'SET_LOADING', value: false});
        showError(errorMessage);
        console.log(errorMessage)
      });
  };
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan guru jadi lebih mudah & fleksibel
        </Text>
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={10} size={12} />
        {/* <Link title="Lupa password" /> */}
        <Gap height={40} />
        <Button title="Mulai" onPress={login} />
        <Gap height={30} />
        <Link
          title="Buat akun baru"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  page: {paddingHorizontal: 40, backgroundColor: colors.white, flex: 1},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
