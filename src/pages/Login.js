import { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Login = ({}) => {
  const [user,setUser]= useState({
    first_name:"",
    last_name:"",
    age:null,
    dob:null,
    phone:null,
    city:null
  })
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}
      style={{flex: 1}}>
      <SafeAreaView
        style={{
          display: 'flex',
          flex: 1,
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <View>
          <Text style={styles.header_styles}>Login</Text>
        </View>
        <View style={styles.input_fields_view}>
          <TextInput
            style={styles.input_fields}
            autoCorrect={false}
            placeholder="First name"
            onChangeText={(text) => {setUser({...user,first_name:text});console.log('----user-----',user)}}
          />
          <TextInput
            style={styles.input_fields}
            placeholder="Last name"
            onChangeText={(text) => {setUser({...user,last_name:text});console.log('----user-----',user)}}
          />
          <TextInput
            style={styles.input_fields}
            placeholder="Age"
            keyboardType="numeric"
            onChangeText={(text) => {setUser({...user,age:text});console.log('----user-----',user)}}
          />
          <TextInput
            style={styles.input_fields}
            placeholder="dob"
            onChangeText={(text) => {setUser({...user,dob:text});console.log('----user-----',user)}}
          />
          <TextInput
            style={styles.input_fields}
            placeholder="phone"
            onChangeText={(text) => {setUser({...user,phone:text});console.log('----user-----',user)}}
          />
          <TextInput
            style={styles.input_fields}
            placeholder="city"s
            onChangeText={(text) => {setUser({...user,city:text});console.log('----user-----',user)}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button_styles} onPress = {()=>{ navigation.navigate('allStudent',{user})}} >
            <Text style={{fontWeight: '700', fontSize: 20, alignSelf: 'auto'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input_fields: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 2,
    padding: 10,
    height: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  input_fields_view: {
    padding: 10,
  },
  header_styles: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  button_styles: {
    fontWeight: '900',
    fontSize: 50,
    borderRadius: 5,
    color: 'red',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    paddingHorizontal: 20,
  },
});

export default Login;
