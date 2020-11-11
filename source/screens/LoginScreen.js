import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {Input} from '../components/Input';
import {Error} from '../components/Error';
import {useTheme} from '@react-navigation/native';
import {FilledButton} from '../components/FilledButton';
import {Loader} from '../components/Loader';
import {sleep} from '../utils/sleep';

export function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loader, setLoader] = React.useState(false);

  const passwordInput = useRef(null);

  const {colors} = useTheme();
  const AuthenticateUser = React.useCallback(() => {
    setError('');
    if (email === '') {
      setError('please enter email');
      return false;
    }
    if (password === '') {
      setError('please enter password');
      return false;
    }
    return true;
  }, [email, password]);

  const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}>
          <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
            <Text style={[styles.text, {color: colors.text}]}>Login</Text>

            <Error error={error} />
            <Input
              style={styles.input}
              placeholder={'Email'}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              defaultValue={email}
              onChangeText={setEmail}
              onEndEditing={React.useCallback(() => {
                if (!validateEmail(email) && email !== '') {
                  setError('please enter valid email');
                } else {
                  setError('');
                }
              }, [email])}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                passwordInput.current.focus();
              }}
            />
            <Input
              style={styles.input}
              placeholder={'Password'}
              reference={passwordInput}
              secureTextEntry
              defaultValue={password}
              onChangeText={setPassword}
              returnKeyType={'go'}
            />
            <FilledButton
              title={'Login'}
              style={styles.loginButton}
              onPress={() => {
                setError('');
                if (AuthenticateUser()) {
                }
              }}
            />
            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
              <Text style={[styles.navButtonText, {color: colors.primary}]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.forgotButton}
              onPress={() => navigation.navigate('Registration')}>
              <Text style={[styles.navButtonText, {color: colors.primary}]}>
                Don't have an account? Create here
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
      <Loader loading={loader} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontFamily: 'Oswald-Bold',
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginTop: 25,
    marginBottom: 15,
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Oswald-Regular',
  },
  forgotButton: {
    marginVertical: 10,
  },
});
