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

const Login = ({}) => {
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
            placeholder="First name"
            onChangeText={text => {}}
          />
          <TextInput
            style={styles.input_fields}
            placeholder="Last name"
            onChangeText={text => {}}
          />
          <TextInput
            style={styles.input_fields}
            placeholder="Age"
            onChangeText={text => {}}
          />
          <TextInput
            style={styles.input_fields}
            placeholder="dob"
            onChangeText={text => {}}
          />
          <TextInput
            style={styles.input_fields}
            placeholder="phone"
            onChangeText={text => {}}
          />
          <TextInput
            style={styles.input_fields}
            placeholder="city"
            onChangeText={text => {}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button_styles}>
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
