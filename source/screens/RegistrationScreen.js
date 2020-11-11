import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Error} from '../components/Error';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {Loader} from '../components/Loader';
import {IconButton} from '../components/IconButton';

export function RegistrationScreen({navigation}) {
  const {colors} = useTheme();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loader, setLoader] = React.useState(false);

  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  const FormAuthentication = React.useCallback(() => {
    setError('');
    if (name === '') {
      setError('please enter full name');
      return false;
    }
    if (email === '') {
      setError('please enter email');
      return false;
    }
    if (password === '') {
      setError('please enter password');
      return false;
    }
    if (confirmpassword === '') {
      setError('please enter confirm password');
      return false;
    }
    if (confirmpassword !== password) {
      setError('password not match!');
      return false;
    }
    return true;
  }, [name, email, password, confirmpassword]);

  const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <IconButton
              style={styles.closeIcon}
              name={'close-circle-outline'}
              size={30}
              color={colors.primary}
              onPress={() => {
                navigation.pop();
              }}
            />

            <Text style={[styles.text, {color: colors.text}]}>
              Registration
            </Text>
            <Error error={error} />
            <Input
              style={styles.input}
              placeholder={'Full Name'}
              defaultValue={name}
              onChangeText={setName}
              returnKeyType={'next'}
              onSubmitEditing={() => emailInput.current.focus()}
            />

            <Input
              reference={emailInput}
              style={styles.input}
              returnKeyType={'next'}
              placeholder={'Email'}
              defaultValue={email}
              onChangeText={setEmail}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              onEndEditing={React.useCallback(() => {
                if (!validateEmail(email) && email !== '') {
                  setError('please enter valid email');
                } else {
                  setError('');
                }
              }, [email])}
              onSubmitEditing={() => passwordInput.current.focus()}
            />
            <Input
              reference={passwordInput}
              style={styles.input}
              returnKeyType={'next'}
              placeholder={'Password'}
              defaultValue={password}
              onChangeText={setPassword}
              secureTextEntry
              onSubmitEditing={() => confirmPasswordInput.current.focus()}
            />

            <Input
              reference={confirmPasswordInput}
              style={styles.input}
              returnKeyType={'go'}
              placeholder={'Comfirm Password'}
              defaultValue={confirmpassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              onEndEditing={React.useCallback(() => {
                if (password.toLowerCase() !== confirmpassword.toLowerCase()) {
                  setError('password not match');
                } else {
                  setError('');
                }
              }, [password, confirmpassword])}
            />
            <FilledButton
              style={styles.registerButton}
              title={'Register'}
              onPress={() => {
                setError('');
                if (FormAuthentication()) {
                }
              }}
            />
          </View>
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
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 25,
    fontFamily: 'Oswald-Bold',
  },
  input: {
    marginVertical: 8,
  },
  registerButton: {
    marginVertical: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
});
