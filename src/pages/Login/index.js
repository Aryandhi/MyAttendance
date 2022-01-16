import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils/colors';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo style={styles.logo} />
      <Text style={styles.title}>Masuk dan temui Informasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} size={12} />
      <Link title="Forgot My Password" />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: colors.white, flex: 1},
  logo: {margin: 40},
  title: {
    fontSize: 20,
    fontFamily: 'Nunioto-SemiBold',
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
