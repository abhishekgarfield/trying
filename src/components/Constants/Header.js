import {View, Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default Header = () => {
    const navigation = useNavigation()
  return (
    <>
      <View
          style={{
            backgroundColor: 'black',
            paddingVertical: 10,
            flexDirection: 'row',
            paddingHorizontal: 15,
            opacity: 1,
            alignItems:"center",
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'skyblue',
              padding: 7,
              borderRadius: 3,
              justifyContent: 'center',
              marginRight: 10,
            }}
            onPress = {()=>{navigation.navigate('Login',{test:false})}}
            >
            <Text style={{fontWeight:"600"}}>Back</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'red',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '600',
            }}>
            List of students
          </Text>
        </View>
    </>
  );
};
